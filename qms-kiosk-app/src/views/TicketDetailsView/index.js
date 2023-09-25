import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { useTranslation } from 'react-i18next';
import { router, useLocalSearchParams } from 'expo-router';
import { StyleSheet, View } from 'react-native';
import Header from '../../common/components/Header';
import LoadingIndicator from '../../common/components/LoadingIndicator';
import useTicketDetails from '../../hooks/useTicketDetails';
import Ticket from './Ticket';
import UsersInQueue from './UsersInQueue';
import PrintButton from './PrintButton';
import ErrorMessage from '../../common/components/ErrorMessage';


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
    <View style={styles.container}>
      <Header message={t(messageKey)} />
      <LoadingIndicator loading={loading} />
      {!loading && data && (
        <>
          <Ticket value={data.details.value} />
          <UsersInQueue total={data.usersInQueue} />
          <PrintButton
            onPress={() => {
              router.push('/');
            }}
          />
        </>
      )}
      {error && <ErrorMessage />}
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  }
});

export default TicketDetailsView;
