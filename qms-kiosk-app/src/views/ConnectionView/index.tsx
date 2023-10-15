
import { router } from 'expo-router';
import { useTranslation } from 'react-i18next';
import useConnection from '../../hooks/useConnection';
import {
  ActionButton,
  AppView,
  Value,
} from '../../common/components';
import ConnectForm from './ConnectForm';
import { getMessageKey } from './helpers';


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
            router.push({
              pathname: '/',
            });
          }}
        />
      )}
    </AppView>
  );
};

export default ConnectionView;