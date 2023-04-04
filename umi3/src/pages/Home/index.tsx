import Guide from '@/components/Guide';
import { trim } from '@/utils/format';
import { PageContainer } from '@ant-design/pro-components';
import { useModel, connectMaster } from '@umijs/max';
import styles from './index.less';
import { MicroAppLink } from 'umi';
import { Button } from 'antd';

const HomePage: React.FC = (props: any) => {
  console.log('APP2 de props', props);
  const { name } = useModel('global');
  return (
    <PageContainer ghost>
      <div className={styles.container}>
        这是子应用2
        <Guide name={trim(name)} />
      </div>
      {/* 跳转链接为 /app2/home */}
      <MicroAppLink name="app1" to="/home">
        去微应用1
      </MicroAppLink>
      <br />
      <br />
      {/* 子应用获取主应用的数据 /table */}
      <div>{JSON.stringify(props.globalState.slogan)}</div>
      <br />
      <br />
      <Button
        onClick={() =>
          props.setGlobalState({
            slogan: '111',
          })
        }
      >
        修改主应用数据
      </Button>
    </PageContainer>
  );
};

export default connectMaster(HomePage);
