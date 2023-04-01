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
      redirect: '/home',
    },
    {
      name: '首页',
      path: '/home',
      component: './Home',
    },
    {
      name: '权限演示',
      path: '/access',
      component: './Access',
    },
    {
      name: '多语言演示',
      path: '/lang',
      component: './Lang',
      title: 'about.title',
    },
    {
      name: ' CRUD 示例',
      path: '/table',
      component: './Table',
    },
    {
      name: '微应用1',
      path: '/app1/*',
      microApp: 'app1',
    },
    {
      name: '微应用2',
      path: '/app2/*',
      microApp: 'app2',
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
    master: {
      apps: [
        {
          name: 'app1',
          entry: '//localhost:8002',
        },
        {
          name: 'app2',
          entry: '//localhost:8003',
        },
      ],
    },
  },
});
