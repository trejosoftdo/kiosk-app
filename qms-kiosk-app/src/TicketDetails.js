import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Image } from 'react-native';
import { router } from 'expo-router';
import { Avatar, Button, Card, Text, Divider } from 'react-native-paper';
import icon from '../assets/icon.png';

export default function App() {
  return (
    <View style={styles.container}>
      <Image source={icon} style={{width: 300 , height: 300 }}/>
      <Text style={styles.heading} variant="titleLarge">
        Bienvenido, tu numero de turno es:
      </Text>
      <View style={styles.ticket}>
        <Avatar.Icon style={styles.ticketIcon} icon="ticket-confirmation" /> 
        <Text style={styles.ticketNumber} variant="headlineLarge">
          GX1234
        </Text>
      </View>
      
      <Text style={styles.inQueueMessage} variant="titleMedium">
        Hay 5 usuarios en espera.
      </Text>
      <Button
        labelStyle={styles.printButtonLabel}
        buttonColor='#b4c5e4'
        icon="printer"
        mode="contained-tonal"
        onPress={() => {
          router.push('/');
        }}
      >
        Imprimir ticket
      </Button>
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
  },
  heading: {
    color: '#3c3744',
    paddingBottom: 32,
  },
  inQueueMessage: {
    color: '#3c3744',
    paddingBottom: 32,
  },
  printButtonLabel: {
    fontSize: 18,
    color: '#3c3744',
  },
  ticket: {
    display: 'flex',
    flex: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 16,
    borderRadius: 8,
    marginBottom: 32,
  },
  ticketIcon: {
    backgroundColor: '#3c3744',
  },
  ticketNumber: {
    color: '#00bf63',
    fontWeight: 600,
    paddingTop: 12,
  },
});
