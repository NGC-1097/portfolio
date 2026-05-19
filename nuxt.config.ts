// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: {
    enabled: true,

    timeline: {
      enabled: true,
    },
  },

  modules: [
    '@nuxt/content',
    '@nuxtjs/color-mode',
    '@nuxtjs/tailwindcss',
    '@tresjs/nuxt',
    '@nuxtjs/google-fonts',
    '@vueuse/motion/nuxt',
    'shadcn-nuxt',
  ],

  shadcn: {
    prefix: '',
    componentDir: './app/components/ui',
  },

  colorMode: {
    classSuffix: '',
    preference: 'system',
    fallback: 'light',
    dataValue: 'theme',
  },

  googleFonts: {
    families: {
      Inter: [300, 400, 500, 600, 700],
      'DM Mono': [300, 400, 500],
    },
    display: 'swap',
    preload: true,
  },

  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      title: 'Robert Lazar — Industrial Designer',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content:
            'Portfolio of Robert Lazar, Industrial Design student at TU/e. Bridging technology and aesthetics.',
        },
      ],
      link: [{ rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }],
    },
  },

  content: {
    build: {
      markdown: {
        toc: { depth: 3 },
        highlight: {
          theme: {
            default: 'github-light',
            dark: 'github-dark',
          },
        },
      },
    },
  },

  // Let @nuxtjs/tailwindcss own the CSS pipeline so our file is processed
  // as the Tailwind entry point (no double-loading of @tailwind directives).
  tailwindcss: {
    cssPath: '~/assets/css/main.css',
  },

  vite: {
    optimizeDeps: {
      include: ['three', '@tresjs/cientos'],
    },
  },
})