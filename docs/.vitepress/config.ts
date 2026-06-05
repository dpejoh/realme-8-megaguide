import { withPwa } from '@vite-pwa/vitepress'
import { defineConfig } from 'vitepress'
import lightbox from 'vitepress-plugin-lightbox'
import { tabsMarkdownPlugin } from 'vitepress-plugin-tabs'

export default withPwa(defineConfig({
  title: 'Realme 8 4G',
  description: 'Complete guide for unlocking, rooting, and installing custom ROMs on the Realme 8 (RMX3085)',
  base: '/',

  markdown: {
    config: (md) => {
      md.use(lightbox)
      md.use(tabsMarkdownPlugin)
    },
  },

  pwa: {
    registerType: 'autoUpdate',
    manifest: {
      name: 'Realme 8 4G Guide',
      short_name: 'RM8 Guide',
      description: 'Complete guide for unlocking, rooting, and installing custom ROMs on the Realme 8 (RMX3085)',
      theme_color: '#2979ff',
      background_color: '#ffffff',
      display: 'standalone',
      icons: [
        { src: '/pwa-192x192.svg', sizes: '192x192', type: 'image/svg+xml' },
        { src: '/pwa-512x512.svg', sizes: '512x512', type: 'image/svg+xml' },
      ],
    },
    workbox: {
      globPatterns: ['**/*.{css,js,html,svg,png,ico,txt,woff2}'],
    },
  },

  themeConfig: {
    logo: false,

    search: {
      provider: 'local',
    },

    outline: 'deep',

    nav: [
      { text: 'Guides', link: '/guides/unlock' },
      { text: 'Reference', link: '/reference/recoveries' },
      { text: 'Archive', link: '/archive/deep-testing' },
    ],

    sidebar: {
      '/': [
        {
          text: 'Guides',
          collapsed: true,
          items: [
            { text: 'Backup', link: '/guides/backup' },
            { text: 'Unlock Bootloader', link: '/guides/unlock' },
            { text: 'Patch LK', link: '/guides/patching-lk' },
            { text: 'Flash Base Firmware', link: '/guides/base-firmware' },
            { text: 'Custom ROM & Recovery', link: '/guides/custom-rom' },
            { text: 'Rooting', link: '/guides/rooting' },
          ],
        },
        {
          text: 'Reference',
          collapsed: true,
          items: [
            { text: 'Recoveries', link: '/reference/recoveries' },
            { text: 'Kernels', link: '/reference/kernels' },
          ],
        },
        {
          text: 'Archive',
          collapsed: true,
          items: [
            { text: 'Deep Testing', link: '/archive/deep-testing' },
          ],
        },
      ],
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/driedpampas/realme-8-megaguide' },
    ],

    footer: {
      message: 'Licensed under CC BY-NC-SA 4.0',
    },
  },
}))
