import { withPwa } from '@vite-pwa/vitepress'
import { defineConfig } from 'vitepress'
import lightbox from 'vitepress-plugin-lightbox'
import { tabsMarkdownPlugin } from 'vitepress-plugin-tabs'

export default withPwa(defineConfig({
  lang: 'en',
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

  locales: {
    root: {
      lang: 'en',
      label: 'English',
      themeConfig: {
        nav: [
          { text: 'Guides', link: '/guides/unlock' },
          { text: 'Reference', link: '/reference/recoveries' },
          { text: 'Archive', link: '/archive/deep-testing' },
        ],
        sidebar: [
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
              { text: 'Flash Tool', link: '/reference/flash-tool' },
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
    },
    es: {
      lang: 'es',
      label: 'Español',
      themeConfig: {
        nav: [
          { text: 'Guías', link: '/es/guides/unlock' },
          { text: 'Referencia', link: '/es/reference/recoveries' },
          { text: 'Archivo', link: '/es/archive/deep-testing' },
        ],
        sidebar: [
          {
            text: 'Guías',
            collapsed: true,
            items: [
              { text: 'Respaldo', link: '/es/guides/backup' },
              { text: 'Desbloquear Bootloader', link: '/es/guides/unlock' },
              { text: 'Parchear LK', link: '/es/guides/patching-lk' },
              { text: 'Firmware Base', link: '/es/guides/base-firmware' },
              { text: 'ROM personalizada', link: '/es/guides/custom-rom' },
              { text: 'Root', link: '/es/guides/rooting' },
            ],
          },
          {
            text: 'Referencia',
            collapsed: true,
            items: [
              { text: 'Recuperaciones', link: '/es/reference/recoveries' },
              { text: 'Kernels', link: '/es/reference/kernels' },
              { text: 'Flash Tool', link: '/es/reference/flash-tool' },
            ],
          },
          {
            text: 'Archivo',
            collapsed: true,
            items: [
              { text: 'Deep Testing', link: '/es/archive/deep-testing' },
            ],
          },
        ],
      },
    },
    'pt-BR': {
      lang: 'pt-BR',
      label: 'Português',
      themeConfig: {
        nav: [
          { text: 'Guias', link: '/pt-BR/guides/unlock' },
          { text: 'Referência', link: '/pt-BR/reference/recoveries' },
          { text: 'Arquivo', link: '/pt-BR/archive/deep-testing' },
        ],
        sidebar: [
          {
            text: 'Guias',
            collapsed: true,
            items: [
              { text: 'Backup', link: '/pt-BR/guides/backup' },
              { text: 'Desbloquear Bootloader', link: '/pt-BR/guides/unlock' },
              { text: 'Modificar LK', link: '/pt-BR/guides/patching-lk' },
              { text: 'Firmware Base', link: '/pt-BR/guides/base-firmware' },
              { text: 'ROM Personalizada', link: '/pt-BR/guides/custom-rom' },
              { text: 'Root', link: '/pt-BR/guides/rooting' },
            ],
          },
          {
            text: 'Referência',
            collapsed: true,
            items: [
              { text: 'Recuperações', link: '/pt-BR/reference/recoveries' },
              { text: 'Kernels', link: '/pt-BR/reference/kernels' },
              { text: 'Flash Tool', link: '/pt-BR/reference/flash-tool' },
            ],
          },
          {
            text: 'Arquivo',
            collapsed: true,
            items: [
              { text: 'Deep Testing', link: '/pt-BR/archive/deep-testing' },
            ],
          },
        ],
      },
    },
    hi: {
      lang: 'hi',
      label: 'हिन्दी',
      themeConfig: {
        nav: [
          { text: 'गाइड', link: '/hi/guides/unlock' },
          { text: 'संदर्भ', link: '/hi/reference/recoveries' },
          { text: 'संग्रह', link: '/hi/archive/deep-testing' },
        ],
        sidebar: [
          {
            text: 'गाइड',
            collapsed: true,
            items: [
              { text: 'बैकअप', link: '/hi/guides/backup' },
              { text: 'बूटलोडर अनलॉक करें', link: '/hi/guides/unlock' },
              { text: 'LK पैच करें', link: '/hi/guides/patching-lk' },
              { text: 'बेस फ़र्मवेयर', link: '/hi/guides/base-firmware' },
              { text: 'कस्टम ROM और रिकवरी', link: '/hi/guides/custom-rom' },
              { text: 'रूट', link: '/hi/guides/rooting' },
            ],
          },
          {
            text: 'संदर्भ',
            collapsed: true,
            items: [
              { text: 'रिकवरी', link: '/hi/reference/recoveries' },
              { text: 'कर्नेल', link: '/hi/reference/kernels' },
              { text: 'Flash Tool', link: '/hi/reference/flash-tool' },
            ],
          },
          {
            text: 'संग्रह',
            collapsed: true,
            items: [
              { text: 'डीप टेस्टिंग', link: '/hi/archive/deep-testing' },
            ],
          },
        ],
      },
    },
    'zh-CN': {
      lang: 'zh-CN',
      label: '简体中文',
      themeConfig: {
        nav: [
          { text: '指南', link: '/zh-CN/guides/unlock' },
          { text: '参考', link: '/zh-CN/reference/recoveries' },
          { text: '归档', link: '/zh-CN/archive/deep-testing' },
        ],
        sidebar: [
          {
            text: '指南',
            collapsed: true,
            items: [
              { text: '备份', link: '/zh-CN/guides/backup' },
              { text: '解锁 Bootloader', link: '/zh-CN/guides/unlock' },
              { text: '修补 LK', link: '/zh-CN/guides/patching-lk' },
              { text: '基础固件', link: '/zh-CN/guides/base-firmware' },
              { text: '自定义 ROM 和恢复', link: '/zh-CN/guides/custom-rom' },
              { text: 'Root', link: '/zh-CN/guides/rooting' },
            ],
          },
          {
            text: '参考',
            collapsed: true,
            items: [
              { text: '恢复', link: '/zh-CN/reference/recoveries' },
              { text: '内核', link: '/zh-CN/reference/kernels' },
              { text: 'Flash Tool', link: '/zh-CN/reference/flash-tool' },
            ],
          },
          {
            text: '归档',
            collapsed: true,
            items: [
              { text: '深度测试', link: '/zh-CN/archive/deep-testing' },
            ],
          },
        ],
      },
    },
    ar: {
      lang: 'ar',
      label: 'العربية',
      dir: 'rtl',

      themeConfig: {
        nav: [
          { text: 'الأدلة', link: '/ar/guides/unlock' },
          { text: 'المراجع', link: '/ar/reference/recoveries' },
          { text: 'الأرشيف', link: '/ar/archive/deep-testing' },
        ],
        sidebar: [
          {
            text: 'الأدلة',
            collapsed: true,
            items: [
              { text: 'النسخ الاحتياطي', link: '/ar/guides/backup' },
              { text: 'فتح Bootloader', link: '/ar/guides/unlock' },
              { text: 'تصحيح LK', link: '/ar/guides/patching-lk' },
              { text: 'البرامج الثابتة الأساسية', link: '/ar/guides/base-firmware' },
              { text: 'ROM مخصص', link: '/ar/guides/custom-rom' },
              { text: 'الروت', link: '/ar/guides/rooting' },
            ],
          },
          {
            text: 'المراجع',
            collapsed: true,
            items: [
              { text: 'الاسترداد', link: '/ar/reference/recoveries' },
              { text: 'النواة', link: '/ar/reference/kernels' },
              { text: 'Flash Tool', link: '/ar/reference/flash-tool' },
            ],
          },
          {
            text: 'الأرشيف',
            collapsed: true,
            items: [
              { text: 'الاختبار العميق', link: '/ar/archive/deep-testing' },
            ],
          },
        ],
      },
    },
  },

  themeConfig: {
    logo: false,
    search: {
      provider: 'local',
    },
    outline: 'deep',
    socialLinks: [
      { icon: 'github', link: 'https://github.com/driedpampas/realme-8-megaguide' },
    ],
    footer: {
      message: 'Licensed under CC BY-NC-SA 4.0',
    },
  },

}))
