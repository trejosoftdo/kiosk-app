
import { useTranslation } from 'react-i18next';
import useConnection from '../../hooks/useConnection';
import { goToPath } from '../../common/helpers';
import {
  ActionButton,
  AppView,
  Value,
} from '../../common/components';
import { getMessageKey } from './helpers';
import ConnectForm from './ConnectForm';


const ConnectionView = () => {
  const { t } = useTranslation();
  const {
    data,
    error,
    loading,
    connect,
  } = useConnection();
  const messageKey = getMessageKey(data);
  return (
    <AppView
      headerMessage={t(messageKey)}
      loading={loading}
      error={error}
    >
      {!data?.userCode && (
        <ConnectForm
          onSubmit={(applicationId) => {
            connect(applicationId);
          }}
        />
      )}
      {data?.userCode && !data?.tokens && (
        <Value
          value={data?.userCode}
          icon="lock"
        />
      )}
      {data?.tokens && (
        <ActionButton
          icon="arrow-left-top"
          message={t('translation:return')}
          onPress={() => {
            goToPath('/');
          }}
        />
      )}
    </AppView>
  );
};

export default ConnectionView;