import { StyleSheet } from 'react-native';
import { Text } from 'react-native-paper';


const UsersInQueue = (props) => (
  <Text style={styles.container} variant="titleMedium">
    Hay {props.total} usuarios en espera.
  </Text>
);

const styles = StyleSheet.create({
  container: {
    color: '#3c3744',
    paddingBottom: 32,
  },
});

export default UsersInQueue;
