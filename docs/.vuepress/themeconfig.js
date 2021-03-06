/*
 * @LineStart: -------------------------------------------
 * @Copyright: © 2020, itclanCoder. All rights reserved.
 * @LineEnd: ----------------------------------------------
 * @Product:
 * @Mode Name:
 * @Autor: vxPublic:itclanCoder
 * @Date: 2020-06-01 21:07:05
 * @Version: xxx.v1.0
 * @LastEditors: 川川
 * @LastEditTime: 2020-06-11 17:19:38
 * @Description: 当前默认主题的一些配置参数,这些选项依赖于你正在使用的主题
 * 主入口在config.js中,本文件通过module.exports导出,在config.js中通过require的方式引入
 * 默认主题的一些配置参数选项,便于集中管理
 *
 * 文档:https://www.vuepress.cn/theme/default-theme-config.html
 */
const themeconfig = {
    logo: "/images/love.svg", // 左上角logo
    repo: 'https://github.com/itclanCode/vuepress-build-blog-demo/', // 链接的仓库
    repoLabel: 'GitHub', // 链接的名称
    editLinks: true, // 通过配置editLinks来设置是否出现编辑链接
    editLinkText: '在GitHub上编辑此页', // 指明编辑功能的文字内容
    smoothScroll: true, // 点击左侧侧边栏,页面滚动效果,smoothScroll 选项来启用页面滚动效果,true为启动,false禁用
    displayAllHeaders: false, // 默认情况下，侧边栏只会显示由当前活动页面的标题（headers）组成的链接, 设置为 true 来显示所有页面的标题链接
    sidebar: 'auto', // 侧边栏配置,自动生成仅包含当前页面的标题链接的侧边栏
    sidebarDepth: 0, // 默认深度是 1，它提取 h2 标题。将其设置为 0 将禁用标题链接，最大值为2，同时提取 h2 和 h3 标题
    nav: require('./nav'), // 头部导航栏配置,通过配置进行管理,nav.js后缀名可以省略
    sidebar: require('./sidebar') // 配置侧边栏,同上,.js后缀名可省略,统一方便管控
};

module.exports = themeconfig; // 导出默认主题配置
