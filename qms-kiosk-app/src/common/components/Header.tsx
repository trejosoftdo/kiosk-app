import { StyleSheet, View, Image } from 'react-native';
import { Text } from 'react-native-paper';
// @ts-ignore
import icon from '../../../assets/icon.png';


const Header = (props) => (
  <View style={styles.container}>
    <Image source={icon} style={styles.icon}/>
    <Text style={styles.message} variant="titleMedium">
      {props.message}
    </Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    width: 200 ,
    height: 200,
  },
  message: {
    color: '#3c3744',
    paddingBottom: 32,
  },
});

export default Header;
