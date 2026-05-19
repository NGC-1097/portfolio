<script setup lang="ts">
/**
 * BackgroundBeams
 *
 * 14 SVG cubic-bezier paths flowing diagonally across the viewport.
 * Each draws a travelling segment using pathLength normalization +
 * stroke-dashoffset animation. Palette-matched to our primary blue.
 *
 * Intended for home page only. Do not use on content pages.
 */

// Each path: [d, animDuration(s), delay(s), opacity]
const beams = [
  ['M0,180 C200,80  500,320 750,160 S1100,60  1440,220',  32, 0,    0.55],
  ['M0,420 C280,200 550,500 900,300 S1200,180 1440,380',  38, 4,    0.4 ],
  ['M0,90  C180,260 420,40  720,200 S1050,60  1440,130',  28, 8,    0.5 ],
  ['M0,550 C320,380 600,620 920,440 S1250,320 1440,510',  42, 2,    0.35],
  ['M0,290 C240,140 480,380 760,220 S1080,100 1440,290',  35, 12,   0.45],
  ['M0,670 C260,500 540,720 860,540 S1180,400 1440,640',  45, 6,    0.3 ],
  ['M0,40  C200,180 440,20  680,160 S980,20   1440,80',   30, 16,   0.4 ],
  ['M0,760 C300,600 580,800 900,640 S1220,500 1440,730',  50, 10,   0.25],
  ['M0,340 C220,160 500,420 780,260 S1100,140 1440,340',  36, 20,   0.45],
  ['M0,490 C280,320 560,560 860,380 S1180,260 1440,460',  40, 14,   0.35],
  ['M0,140 C200,300 460,80  720,240 S1040,80  1440,160',  33, 24,   0.5 ],
  ['M0,610 C260,440 540,660 840,480 S1160,360 1440,580',  44, 18,   0.3 ],
  ['M0,240 C240,100 480,300 760,140 S1080,40  1440,220',  31, 22,   0.45],
  ['M0,820 C280,660 560,840 880,680 S1200,560 1440,800',  48, 28,   0.2 ],
] as const
</script>

<template>
  <!--
    Absolute within the home page's relative min-h-screen root.
    Avoids fixed-layer compositing which breaks CSS variable cascade.
  -->
  <div
    aria-hidden="true"
    class="pointer-events-none absolute inset-0 z-0 overflow-hidden"
  >
    <svg
      class="absolute inset-0 h-full w-full"
      viewBox="0 0 1440 900"
      preserveAspectRatio="xMidYMid slice"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <!-- Travelling segment gradient: transparent → blue → transparent -->
        <linearGradient id="beam-grad-a" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%"   stop-color="hsl(217 91% 55%)" stop-opacity="0" />
          <stop offset="30%"  stop-color="hsl(217 91% 55%)" stop-opacity="1" />
          <stop offset="70%"  stop-color="hsl(230 80% 65%)" stop-opacity="1" />
          <stop offset="100%" stop-color="hsl(230 80% 65%)" stop-opacity="0" />
        </linearGradient>

        <!-- Clip: mask for each beam so gradient travels with it -->
        <linearGradient id="beam-grad-b" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%"   stop-color="hsl(217 91% 60%)" stop-opacity="0" />
          <stop offset="40%"  stop-color="hsl(217 91% 60%)" stop-opacity="1" />
          <stop offset="80%"  stop-color="hsl(200 85% 65%)" stop-opacity="0.6" />
          <stop offset="100%" stop-color="hsl(200 85% 65%)" stop-opacity="0" />
        </linearGradient>
      </defs>

      <g class="beams-group">
        <path
          v-for="([d, dur, delay, opacity], i) in beams"
          :key="i"
          :d="d"
          fill="none"
          :stroke="i % 2 === 0 ? 'url(#beam-grad-a)' : 'url(#beam-grad-b)'"
          stroke-width="1.5"
          pathLength="1"
          :stroke-dasharray="`0.35 0.65`"
          stroke-dashoffset="1"
          :style="{
            opacity,
            animationDuration: `${dur}s`,
            animationDelay: `${delay}s`,
          }"
          class="beam"
        />
      </g>
    </svg>
  </div>
</template>

<style scoped>
.beam {
  animation-name: beam-travel;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
  animation-fill-mode: both;
}

@keyframes beam-travel {
  from {
    stroke-dashoffset: 1;
  }
  to {
    stroke-dashoffset: -1;
  }
}

/* Light mode: very faint — nearly invisible, just alive */
.beams-group {
  opacity: 0.045;
}

/* Dark mode: can breathe more, contrast handles it */
:global(html.dark) .beams-group {
  opacity: 0.09;
}

/* Respect reduced-motion — off completely */
@media (prefers-reduced-motion: reduce) {
  .beam {
    animation: none;
  }
}
</style>
