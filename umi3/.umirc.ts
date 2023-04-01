import { defineConfig } from '@umijs/max';

export default defineConfig({
  antd: {},
  access: {},
  model: {},
  initialState: {},
  request: {},
  layout: {
    title: '@umijs/max',
  },
  routes: [
    {
      path: '/',
      redirect: '/home2',
    },
    {
      name: '首页',
      path: '/home2',
      component: './Home',
      // 不展示顶栏
      headerRender: false,
      // 不展示页脚
      footerRender: false,
      // 不展示菜单
      menuRender: false,
      // 不展示菜单顶栏
      menuHeaderRender: false,
    },
  ],
  npmClient: 'yarn',
  locale: {
    title: true,
    default: 'en-US',
    antd: true,
    // default true, when it is true, will use `navigator.language` overwrite default
    baseNavigator: true,
    baseSeparator: '-',
  },
  title: 'site.title',
  qiankun: {
    slave: {},
  },
});
