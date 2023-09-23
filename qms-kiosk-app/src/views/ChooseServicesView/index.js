import { StatusBar } from 'expo-status-bar';
import { router } from 'expo-router';
import { StyleSheet, View } from 'react-native';
import Header from '../../common/components/Header';
import Cards from './Cards';
import useServices from '../../hooks/useServices';
import LoadingIndicator from '../../common/components/LoadingIndicator';


const ChooseServicesView = () => {
  const {
    loading,
    data,
    error,
  } = useServices();

  const message = loading ? 'Por favor, espere ...' : 'Por favor, elija un servicio';

  return (
    <View style={styles.container}>
      <Header message={message} />
      <LoadingIndicator loading={loading} />
      {!loading && data && (
        <Cards
          items={data.items}
          onServiceSelect={(service) => {
            router.push({
              pathname: '/ticket-details',
              params: { service },
            });
          }}
        />
      )}
      {error && (
        <View>Error!</View>
      )}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    display: 'flex',
  },
});

export default ChooseServicesView;