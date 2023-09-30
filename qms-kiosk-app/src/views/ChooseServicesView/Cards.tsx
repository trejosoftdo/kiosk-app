import { StyleSheet, View } from 'react-native';
import ServiceCard from './ServiceCard';

type Props = {
  items: {
    name: string;
    icon: string;
    label: string;
  }[];
  onServiceSelect: (name: string) => void;
};

const Cards = (props: Props) => (
  <View style={styles.container}>
    {props.items.map(item => (
      <ServiceCard
        key={item.name}  
        icon={item.icon}
        title={item.label}
        onPress={() => {
          props.onServiceSelect(item.name);
        }}
      />
    ))}
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