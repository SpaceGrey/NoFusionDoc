import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    // nav: [
    //   { text: '主页', link: '/' },
    //   { text: '核心功能介绍', link: '/introduction' },
    //   { text: '教程', link: '/tutorial' }
    // ],

    // sidebar: [
    //   {
    //     text: 'Examples',
    //     items: [
    //       { text: 'Markdown Examples', link: '/markdown-examples' },
    //       { text: 'Runtime API Examples', link: '/api-examples' }
    //     ]
    //   },
    //   {
    //     text: '教程',
    //     items: [
    //       { text: '快速开始', link: '/guide' },
    //       { text: '深入', link: '/deep' }
    //     ]
    //   }
    // ],
    

    // socialLinks: [
    //   { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    // ]
  },
  locales: {
    // root: {
    //   label: 'English',
    //   lang: 'en',
    //   title: "No Fusion Document",
    //   description: "The document of No Fusion camera app.",
    //   themeConfig: {
    //     nav: [
    //       { text: 'Home', link: '/en/index' },
    //       { text: 'Features', link: '/introduction' },
    //       { text: 'Tutorial', link: '/tutorial' }
    //     ],
    //     sidebar: [
    //       {
    //         text: 'Examples',
    //         items: [
    //           { text: 'Markdown Examples', link: '/markdown-examples' },
    //           { text: 'Runtime API Examples', link: '/api-examples' }
    //         ]
    //       },
    //       {
    //         text: 'Tutorial',
    //         items: [
    //           { text: 'Quick Start', link: '/guide' },
    //           { text: 'In-depth', link: '/deep' }
    //         ]
    //       }
    //     ]
    //   }
    // },
    zh: {
      label: '简体中文',
      lang: 'zh-CN',
      title: "No Fusion 相机文档",
      description: "No Fusion 相机App的简介、教程、以及帮助。",
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
