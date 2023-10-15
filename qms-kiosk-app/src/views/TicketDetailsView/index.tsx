import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { router, useLocalSearchParams } from 'expo-router';
import { AppView, Value } from '../../common/components';
import useTicketDetails from '../../hooks/useTicketDetails';
import UsersInQueue from './UsersInQueue';
import PrintButton from './PrintButton';


const TicketDetailsView = () => {
  const params = useLocalSearchParams();
  const {
    loading,
    data,
    error,
  } = useTicketDetails(params.service);
  const { t } = useTranslation();
  const messageKey = loading ? 'translation:waitMessage' : 'translation:welcomeTurn';
  return (
    <AppView
      headerMessage={t('translation:information')}
      loading={loading}
      error={error}
    >
      {!loading && data && (
        <>
          <Value
            value={data.details.value}
            icon="ticket-confirmation"
          />
          <UsersInQueue total={data.usersInQueue} />
          <PrintButton
            onPress={() => {
              router.push('/');
            }}
          />
        </>
      )}
    </AppView>
  );
};

export default TicketDetailsView;
