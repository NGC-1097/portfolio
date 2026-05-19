<script setup lang="ts">
import { TresCanvas } from '@tresjs/core'
import { OrbitControls, ContactShadows, Environment } from '@tresjs/cientos'
import { BasicShadowMap, SRGBColorSpace, NoToneMapping, Box3, Vector3 } from 'three'
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'

const props = defineProps<{
  modelPath?: string
}>()

const gl = {
  shadowMapType: BasicShadowMap,
  outputColorSpace: SRGBColorSpace,
  toneMapping: NoToneMapping,
}

const FOV = 45
const PADDING = 1.6 // breathing room around the model

const scene = shallowRef<any>(null)
const loading = ref(true)
const error = ref(false)

// Camera + orbit derived from model bounds after load.
const cameraPos = ref<[number, number, number]>([0, 1.5, 4])
const orbitMin = ref(1)
const orbitMax = ref(20)
const contactShadowFar = ref(4)

// Usage tip overlay
const tipVisible = ref(true)
const tipMounted = ref(true)

let tipTimer: ReturnType<typeof setTimeout> | null = null
let tipRemoveTimer: ReturnType<typeof setTimeout> | null = null

const fadeTip = () => {
  if (!tipVisible.value) return
  tipVisible.value = false
  if (tipTimer) clearTimeout(tipTimer)
  tipRemoveTimer = setTimeout(() => { tipMounted.value = false }, 500)
}

onBeforeUnmount(() => {
  if (tipTimer) clearTimeout(tipTimer)
  if (tipRemoveTimer) clearTimeout(tipRemoveTimer)
})

onMounted(async () => {
  // Auto-fade tip after 5s even without interaction.
  tipTimer = setTimeout(fadeTip, 5000)

  if (!props.modelPath) {
    loading.value = false
    return
  }
  const loader = new GLTFLoader()
  try {
    const gltf = await new Promise<any>((resolve, reject) => {
      loader.load(props.modelPath!, resolve, undefined, reject)
    })

    // Center model at origin.
    const box = new Box3().setFromObject(gltf.scene)
    const center = box.getCenter(new Vector3())
    const size = box.getSize(new Vector3())
    gltf.scene.position.sub(center)

    // Fit-to-view: distance derived from largest dimension and FOV.
    const maxDim = Math.max(size.x, size.y, size.z) || 1
    const fovRad = (FOV * Math.PI) / 180
    const fitDist = (maxDim / 2) / Math.tan(fovRad / 2)
    const dist = fitDist * PADDING

    cameraPos.value = [0, dist * 0.35, dist]
    orbitMin.value = dist * 0.4
    orbitMax.value = dist * 3
    contactShadowFar.value = Math.max(maxDim * 1.5, 4)

    scene.value = gltf.scene
  } catch (e) {
    console.warn('[ModelViewer] Failed to load:', props.modelPath, e)
    error.value = true
  } finally {
    loading.value = false
  }
})
</script>

<template>
  <ClientOnly>
    <div v-if="loading" class="w-full h-full flex items-center justify-center bg-muted">
      <span class="label">Loading model...</span>
    </div>

    <div v-else-if="error || !scene" class="w-full h-full flex items-center justify-center bg-muted">
      <span class="label">No model available</span>
    </div>

    <div v-else class="w-full h-full relative" @pointerdown="fadeTip" @wheel="fadeTip">
      <TresCanvas v-bind="gl" alpha class="w-full h-full">
        <TresPerspectiveCamera :position="cameraPos" :fov="FOV" />
        <OrbitControls
          :enable-pan="false"
          :min-polar-angle="0.2"
          :max-polar-angle="Math.PI / 1.8"
          :min-distance="orbitMin"
          :max-distance="orbitMax"
          enable-damping
          :damping-factor="0.05"
        />

        <TresAmbientLight :intensity="0.4" />
        <TresDirectionalLight :position="[4, 8, 4]" :intensity="1.2" cast-shadow />
        <TresDirectionalLight :position="[-4, 2, -4]" :intensity="0.3" />

        <Environment preset="studio" />

        <primitive :object="scene" />

        <ContactShadows :opacity="0.3" :blur="2" :far="contactShadowFar" />
      </TresCanvas>

      <!-- Usage tip overlay -->
      <div
        v-if="tipMounted"
        class="absolute bottom-4 left-1/2 -translate-x-1/2 pointer-events-none transition-opacity duration-500"
        :class="tipVisible ? 'opacity-90' : 'opacity-0'"
      >
        <div class="flex items-center gap-2 font-mono text-xs bg-foreground/85 text-background px-3 py-1.5 rounded-full backdrop-blur-sm whitespace-nowrap">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            <path d="M3 12h18" />
            <path d="M12 3a14.5 14.5 0 0 1 0 18 14.5 14.5 0 0 1 0-18Z" />
          </svg>
          Drag to rotate · scroll to zoom
        </div>
      </div>
    </div>

    <template #fallback>
      <div class="w-full h-full flex items-center justify-center bg-muted">
        <span class="label">Loading model...</span>
      </div>
    </template>
  </ClientOnly>
</template>
