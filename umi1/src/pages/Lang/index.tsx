import { PageContainer } from '@ant-design/pro-components';
import styles from './index.less';
import { useIntl, FormattedMessage } from '@umijs/max';

const LangPage: React.FC = () => {
  const intl = useIntl();
  const msg = intl.formatMessage({
    id: 'welcome2',
  });

  return (
    <PageContainer ghost>
      <div className={styles.container}>
        <FormattedMessage id="welcome" values={{ name: '张三' }} />
        {msg}
      </div>
    </PageContainer>
  );
};

export default LangPage;
