import { StyleSheet, View } from 'react-native';
import { Avatar, Text } from 'react-native-paper';

const Ticket = (props) => (
  <View style={styles.container}>
    <Avatar.Icon style={styles.icon} icon="ticket-confirmation" /> 
    <Text style={styles.number} variant="headlineLarge">
      {props.value}
    </Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
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
  icon: {
    backgroundColor: '#3c3744',
  },
  number: {
    color: '#00bf63',
    fontWeight: 600,
    paddingTop: 12,
  },
});

export default Ticket;
