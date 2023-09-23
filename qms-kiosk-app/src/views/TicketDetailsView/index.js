import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { router, useLocalSearchParams } from 'expo-router';
import { StyleSheet, View } from 'react-native';
import Header from '../../common/components/Header';
import Ticket from './Ticket';
import UsersInQueue from './UsersInQueue';
import PrintButton from './PrintButton';
import useTicketDetails from '../../hooks/useTicketDetails';
import LoadingIndicator from '../../common/components/LoadingIndicator';


const TicketDetailsView = () => {
  const params = useLocalSearchParams();
  const {
    loading,
    data,
    error,
  } = useTicketDetails(params.service);

  const message = loading ? 'Por favor, espere ...' : 'Bienvenido, tu numero de turno es:';

  console.log(data);
  return (
    <View style={styles.container}>
      <Header message={message} />
      <LoadingIndicator loading={loading} />
      {!loading && data && (
        <React.Fragment>
          <Ticket value={data.details.value} />
          <UsersInQueue total={data.usersInQueue} />
          <PrintButton
            onPress={() => {
              router.push('/');
            }}
          />
        </React.Fragment>
      )}
      {error && (
        <View>Error!</View>
      )}
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
