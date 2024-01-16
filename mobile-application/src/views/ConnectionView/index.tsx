
import * as React from 'react';
import { useTranslation } from 'react-i18next';
import useConnection from '../../hooks/useConnection';
import { goToPath } from '../../common/helpers';
import {
  ActionButton,
  AppView,
  ConditionalContainer,
  Value,
} from '../../common/components';
import { getMessageKey } from './helpers';
import ConnectForm from './ConnectForm';
import VerificationQRCode from './VerificationQRCode';


/**
 * ConnectionViewProps defines the props for the Connect Virw Component.
 */
interface ConnectionViewProps {}

/**
 * A component for the connect view
 *
 * @param {ConnectionViewProps} props - The props for the Connect View component.
 */
const ConnectionView: React.FC<ConnectionViewProps> = (props: ConnectionViewProps) => {
  const { t } = useTranslation();
  const {
    data,
    error,
    loading,
    connect,
    clear,
    connectionDetails,
  } = useConnection();
  const messageKey = getMessageKey(data, connectionDetails);
  return (
    <AppView
      headerMessage={t(messageKey)}
      loading={loading}
      error={error}
    >
      <ConditionalContainer display={connectionDetails.deviceCode}>
        <ActionButton
          icon="connection"
          message={t('translation:reconnect')}
          onPress={() => {
            clear();
          }}
        />
      </ConditionalContainer>
      <ConditionalContainer display={!data?.userCode && !connectionDetails.deviceCode}>
        <ConnectForm
          onSubmit={(applicationId) => {
            connect(applicationId);
          }}
        />
      </ConditionalContainer>
      <ConditionalContainer display={data?.userCode && data?.verificationURI && !data?.tokens?.accessToken}>
        <VerificationQRCode verificationURI={data?.verificationURI} />
        <Value
          value={data?.userCode}
          icon="lock"
        />
      </ConditionalContainer>
      <ConditionalContainer display={data?.tokens?.accessToken}>
        <ActionButton
          icon="arrow-left-top"
          message={t('translation:return')}
          onPress={() => {
            goToPath('/');
          }}
        />
      </ConditionalContainer>
    </AppView>
  );
};

export default ConnectionView;