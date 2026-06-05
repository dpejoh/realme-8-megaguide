import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Realme 8 4G',
  description: 'Complete guide for unlocking, rooting, and installing custom ROMs on the Realme 8 (RMX3085)',
  base: '/',

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
})
