---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "No Fusion 使用说明"
  tagline: "No Fusion 是一款简洁高效，并且功能强大的 iPhone 专业相机 App。"
  image:
    src: /icon.png
    alt: "No Fusion"
  actions:
    - theme: brand
      text: 查看教程
      link: /zh/focus&exposure
    - theme: alt
      text: 常见问题
      link: /zh/faq
    - theme: alt
      text: 下载
      link: https://apps.apple.com/sg/app/no-fusion-a-simple-pro-cam/id6444706244

features:
  - icon: 
      src: /photol.svg
    title: 去除锐化
    details: 通过独创的RAW管线，去除 iPhone 的过度锐化效果。
    link: /zh/introduction#remove-sharpening
  - icon:
      src: /livephoto.svg
    title: Live Photo
    details: 支持在任何格式和任何分辨率下拍摄Live Photo，不错过任何精彩瞬间。
    link: /zh/introduction#live-photo
  - icon:
      src: /color.svg
    title: 色彩
    details: 强大风格化系统，内置多款胶片配方。支持参数调整，Lut导入。
    link: /zh/introduction#color
  - title: UI
    icon:
      src: /ui.svg
    details: 简洁易用，并且强大的UI设计，功能一触即达。
    link: /zh/introduction#color
---


<!-- <script setup>
import { VPTeamMembers } from 'vitepress/theme'

const members = [
  {
    avatar: '/src/avatar.jpg',
    name: '王培屹',
    title: '开发者',
    links: [
      { icon: 'twitter', link: 'https://x.com/Wangpeiyi23' }
    ]
  }
]
</script>


  <div style = "display:flex;justify-content: center; margin-top:100px">
    <VPTeamMembers size="medium" :members="members"/>
  </div>


<style scoped>
.team-members-wrapper {
  margin-top: 20px; /* 增加与上方的间距 */
  margin-bottom: 20px; /* 增加与下方的间距 */
}
</style> -->