const sidebar = [{
  title: 'shell命令',
  collapsable: false, // 是否折叠
  children: [
    '/Shell/basic',
    '/Shell/file'
  ]
}, {
  title: 'Vue',
  collapsable: false, // 是否折叠
  children: [
    '/Vue/basic',
    '/Vue/Vuex',
    '/Vue/vue-router',
    '/Vue/vuepress'
  ]
}, {
  title: 'Git',
  collapsable: false, // 是否折叠
  children: [
    '/Git/basic',
    '/Git/ssh'
  ]
}]
module.exports = {
  title: '一米 陽光',
  description: '前端学习博客',
  base: '/', // 基路径
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }]
  ],
  host: '127.0.0.1',
  port: '8080',
  // 指定 vuepress build 的输出目录。
	dest: '.vuepress/dist',
  themeConfig: {
    sidebarDepth: 1, //侧边栏深度
    displayAllHeaders: false, // 显示所有页面的标题链接
    activeHeaderLinks: true, // 是否禁用滚动中的标题链接和url中hash值的更新
    sidebar
  }
}