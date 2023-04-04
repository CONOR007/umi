import Guide from '@/components/Guide';
import { trim } from '@/utils/format';
import { PageContainer } from '@ant-design/pro-components';
import { useModel } from '@umijs/max';
import styles from './index.less';
import { MicroAppLink } from 'umi';
import { Button } from 'antd';

const HomePage: React.FC = () => {
  const { name } = useModel('global');
  const data = useModel('@@qiankunStateFromMaster');
  return (
    <PageContainer ghost>
      <div className={styles.container}>
        这是子应用1
        <Guide name={trim(name)} />
      </div>
      {/* 跳转链接为 /app2/home */}
      <MicroAppLink name="app2" to="/home">
        去微应用2
      </MicroAppLink>
      <br />
      <br />
      {/* 跳转链接为 /table */}
      <MicroAppLink isMaster to="/access">
        去父应用
      </MicroAppLink>
      <br />
      <br />
      {/* 子应用获取主应用的数据 /table */}
      <div>{data.globalState.slogan}</div>
      <br />
      <br />
      <Button
        onClick={() =>
          data.setGlobalState2({
            slogan: 'setGlobalState2可以修改' + Math.random(),
          })
        }
      >
        修改主应用数据
      </Button>
    </PageContainer>
  );
};

export default HomePage;
