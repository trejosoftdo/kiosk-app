import { StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';


const PrintButton = (props) => (
  <Button
    labelStyle={styles.label}
    buttonColor='#b4c5e4'
    icon="printer"
    mode="contained-tonal"
    onPress={props.onPress}
  >
    Imprimir ticket
  </Button>
);

const styles = StyleSheet.create({
  label: {
    fontSize: 14,
    color: '#3c3744',
  },
});

export default PrintButton;
