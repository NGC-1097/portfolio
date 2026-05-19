<script setup lang="ts">
const { data: featuredProjects } = await useAsyncData("featured-projects", () =>
    queryCollection("projects")
        .where("featured", "=", true)
        .order("order", "ASC")
        .limit(3)
        .all(),
);
</script>

<template>
    <div>
        <!-- Hero -->
        <section class="container pt-24 pb-20 md:pt-32 md:pb-28">
            <div class="max-w-2xl">
                <p class="label mb-6">Industrial Designer — TU/e</p>
                <h1
                    class="font-mono text-4xl md:text-6xl font-medium tracking-tight leading-[1.1] mb-8"
                >
                    Robert Lǎzar
                </h1>
                <p
                    class="text-lg text-muted-foreground leading-relaxed max-w-lg"
                >
                    Bridging technology and aesthetics. I design products that
                    are honest, functional, and built to last — from electronics
                    to human experience.
                </p>
                <div class="flex items-center gap-6 mt-10">
                    <NuxtLink
                        to="/projects"
                        class="font-mono text-sm font-medium text-primary hover:underline underline-offset-4"
                    >
                        View work →
                    </NuxtLink>
                    <NuxtLink
                        to="/piv"
                        class="font-mono text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                        About me
                    </NuxtLink>
                </div>
            </div>
        </section>

        <div class="section-divider container" />

        <!-- Featured Projects -->
        <section
            v-if="featuredProjects?.length"
            class="container py-16"
        >
            <p class="label mb-10">Selected work</p>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <ProjectCard
                    v-for="project in featuredProjects"
                    :key="project.path"
                    :project="project"
                />
            </div>
        </section>

        <div class="section-divider container" />

        <!-- Design philosophy strip -->
        <section class="container py-16 max-w-3xl">
            <p class="label mb-8">Philosophy</p>
            <blockquote
                class="font-mono text-2xl md:text-3xl font-light tracking-tight leading-snug text-foreground"
            >
                "Good design is as little design as possible."
            </blockquote>
            <p class="mt-4 label">— Dieter Rams</p>
        </section>
    </div>
</template>
