import { Watermark } from 'antd';
import { createRoot } from 'react-dom/client';
let oldval: string = '';
const creatWatermark = (content: string) => {
  console.log(oldval, content);
  if (oldval && oldval === content) return;
  const opt = {
    content: content,
    fontColor: 'red',
    fontStyle: 'normal',
    fontSize: 23,
    gapX: [30, 30],
    rotate: 10,
  };
  oldval = content;
  // 选择需要观察变动的节点
  const targetNode = document.createElement('div');
  // 解析AST&挂载(是异步,所以后续需要监听节点变化再做处理)
  createRoot(targetNode).render(<Watermark {...opt} />);
  // 观察器的配置（需要观察什么变动, childList只能向下观察到一级, subtree可多级 ）
  const config = { childList: true, subtree: true };
  // 当观察到变动时执行的回调函数
  const callback = (
    mutationsList: MutationRecord[],
    observer: MutationObserver,
  ) => {
    for (let mutation of mutationsList) {
      if (mutation.type === 'childList') {
        const rootMaster = document.getElementById(
          'root-master',
        ) as HTMLElement;
        const newDom = targetNode?.childNodes[0]?.childNodes[0] as HTMLElement;
        if (newDom) {
          document.getElementById('watermark')?.remove();
          newDom.id = 'watermark';
          rootMaster.appendChild(newDom);
          observer.disconnect(); // 注销
        }
      }
    }
  };
  // 创建一个观察器实例并传入回调函数 MutationObserver的回调是微任务
  const observer = new MutationObserver(callback);
  // 以上述配置开始观察目标节点
  observer.observe(targetNode, config);
  // 方案二: 用动画帧刷新也可以(弃用)
  // const getFormRefLoop = () => {
  //   window.requestAnimationFrame(() => {
  //     const rootMaster = document.getElementById('root-master') as HTMLElement;
  //     const w = root?.childNodes[0]?.childNodes[0] as HTMLElement;
  //     if (rootMaster && w) {
  //       const old = document.getElementById('root');
  //       if (old) old.remove();
  //       w.id = 'root';
  //       rootMaster.appendChild(w);
  //     } else {
  //       getFormRefLoop();
  //     }
  //   });
  // };
  // getFormRefLoop();
};

export default creatWatermark;
