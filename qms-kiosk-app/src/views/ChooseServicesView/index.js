import { StatusBar } from 'expo-status-bar';
import { router } from 'expo-router';
import { StyleSheet, View } from 'react-native';
import Header from '../../common/components/Header';
import Cards from './Cards';


const ChooseServicesView = () => (
  <View style={styles.container}>
    <Header message="Por favor, elija un servicio" />
    <Cards
      onServiceSelect={(service) => {
        console.log({ service });
        router.push('/ticket-details');
      }}
    />
    <StatusBar style="auto" />
  </View>
);

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