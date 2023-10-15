import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import ServiceCard from './ServiceCard';

/**
 * CardsProps defines the props for the Cards Component.
 *
 * @property items - services items
 * @property onServiceSelect - a handler that is called when a service is selected
 */
interface CardsProps {
  items: {
    name: string;
    icon: string;
    label: string;
  }[];
  onServiceSelect: (name: string) => void;
};

/**
 * A component the services cards
 *
 * @param {CardsProps} props - The props for the Cards component.
 */
const Cards: React.FC<CardsProps> = (props: CardsProps) => (
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