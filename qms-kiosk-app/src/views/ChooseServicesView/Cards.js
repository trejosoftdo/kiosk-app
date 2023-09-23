import { StyleSheet, View } from 'react-native';
import ServiceCard from './ServiceCard';


const Cards = (props) => (
  <View style={styles.container}>
    <ServiceCard
      icon="file-multiple"
      title="Resultados"
      onPress={() => {
        props.onServiceSelect('results');
      }}
    />
    <ServiceCard
      icon="poll"
      title="Analisis"
      onPress={() => {
        props.onServiceSelect('analysis');
      }}
    />
    <ServiceCard
      icon="information"
      title="Informacion"
      onPress={() => {
        props.onServiceSelect('information');
      }}
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '80%',
    paddingBottomBottom: 32,
  },
});

export default Cards;