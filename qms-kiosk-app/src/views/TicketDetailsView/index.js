import { StatusBar } from 'expo-status-bar';
import { router } from 'expo-router';
import { StyleSheet, View } from 'react-native';
import Header from '../../common/components/Header';
import Ticket from './Ticket';
import UsersInQueue from './UsersInQueue';
import PrintButton from './PrintButton';


const TicketDetailsView = () => {
  return (
    <View style={styles.container}>
      <Header message="Bienvenido, tu numero de turno es:" />
      <Ticket value="GX1234" />
      <UsersInQueue total={5} />
      <PrintButton
        onPress={() => {
          router.push('/');
        }}
      />
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
