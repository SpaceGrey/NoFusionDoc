import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config

export default defineConfig({
  sitemap: {
    hostname: 'https://nofusion.app'
  },
  locales: {
    en:{
      label: 'English',
      lang: 'en',
      title: "No Fusion Camera",
      description: "Introduction, tutorials, and help for No Fusion Camera App.",
      themeConfig: {
        nav: [
          { text: 'Home', link: '/en/' },
          { text: 'Introduction', link: '/en/introduction' },
          { text: 'Tutorials', link: '/en/focus&exposure' },
          { text: 'FAQ', link: '/en/faq' }
        ],
        sidebar: [
          {
            text:"Introduction",
            link: '/en/introduction'
          },
          {
            text: 'Tutorials',
            items: [
              { text: 'Focus & Exposure', link: '/en/focus&exposure' },
              { text: 'Exposure Compensation', link: '/en/exposure' },
              { text: 'Manual Mode', link: '/en/manual' },
              { text: 'White Balance', link: '/en/wb' },
              { text: 'Lens Switching', link: '/en/lens' },
              { text: 'LUT Import', link: '/en/lut' },
            ]
          },
          {
            text:'FAQ',
            link: '/en/faq'
          }
        ]
      }
    },
    zh: {
      label: '简体中文',
      lang: 'zh-CN',
      title: "No Fusion 相机文档",
      description: "No Fusion 相机的简介、教程、以及帮助。",
      themeConfig: {
        nav: [
          { text: '主页', link: '/zh/' },
          { text: '核心功能介绍', link: '/zh/introduction' },
          { text: '教程', link: '/zh/focus&exposure' },
          { text: '常见问题', link: '/zh/faq' }

        ],
        sidebar: [
          {
            text:"核心功能介绍",
            link: '/zh/introduction'
          },
          {
            text: '教程',
            items: [
              { text: '对焦和测光', link: '/zh/focus&exposure' },
              { text: '曝光补偿', link: '/zh/exposure' },
              { text: '手动模式', link: '/zh/manual' },
              { text: '白平衡', link: '/zh/wb' },
              { text: '镜头切换', link: '/zh/lens' },
              { text: 'LUT 导入', link: '/zh/lut' },
            ]
          },
          {
            text:'常见问题',
            link: '/zh/faq'
          }
        ]
      }
    }
    
  }
})
