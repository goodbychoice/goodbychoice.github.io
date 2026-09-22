// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/sitemap', '@nuxtjs/robots'],

  site: {
    url: 'https://www.goodbychoice.co.jp',
    name: 'GBC（Good By Choice）'
  },

  robots: {
    disallow: [],
  },

  experimental: {
    prerenderErrorPages: true,
  },

  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ['/robots.txt', '/sitemap.xml'],
    },
  },

  app: {
    head: {
      htmlAttrs: {
        lang: 'ja',
        class: 'scroll-smooth motion-reduce:scroll-auto',
      },
      title: 'GBC（Good By Choice）',
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      ],
    },
  },
})
