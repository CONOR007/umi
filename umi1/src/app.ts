import creatWatermark from './watermark';
import './app.tsx';
// 运行时配置
let num: string = '1';
creatWatermark(num++);
setInterval(() => {
  creatWatermark(num++);
}, 1000000);
// 全局初始化数据配置，用于 Layout 用户信息和权限初始化
// 更多信息见文档：https://umijs.org/docs/api/runtime-config#getinitialstate
export async function getInitialState(): Promise<{ name: string }> {
  return { name: '@umijs/max' };
}

export const layout = () => {
  return {
    // waterMarkProps: {
    //   content: 'xxxx',
    //   fontColor: 'red',
    //   fontStyle: 'normal',
    //   fontSize: 23,
    //   className: 'class-xx-yy',
    //   gapX: 30,
    //   gapY: 30,
    //   // width: 200,
    //   rotate: 10,
    //   // image: cdnUrl + '/commons/images/logo/logo_icon_120x120.png',
    //   children: <div style={{ color: 'red' }}>水印</div>,
    // },
    title: 'xxx',
    logo: 'https://img.alicdn.com/tfs/TB1YHEpwUT1gK0jSZFhXXaAtVXa-28-27.svg',
    menu: {
      locale: false,
    },
  };
};

export const qiankun = {
  lifeCycles: {
    // 所有子应用在挂载完成时，打印 props 信息
    async afterMount(props: any) {
      console.log('propspropsprops', props);
    },
  },
};

import { useState } from 'react';
// 主应用透传数据
export function useQiankunStateForSlave() {
  const [globalState, setGlobalState] = useState<any>({
    slogan: '这是主应用的数据',
  });

  const setGlobalState2 = (a) => {
    setGlobalState(a);
  };
  return {
    globalState,
    setGlobalState,
    setGlobalState2,
  };
}
