import * as React from 'react';
import { StyleSheet } from 'react-native';
import { Avatar, Card, MD3Colors, Text } from 'react-native-paper';

/**
 * ServiceCardProps defines the props for the Cards Component.
 *
 * @property icon - card icon
 * @property title - card title
 * @property onPress - on press card handler
 */
interface ServiceCardProps {
  icon: string;
  title: string
  onPress: () => void;
}

/**
 * A component for a service card
 *
 * @param {ServiceCardProps} props - The props for the Service Card component.
 */
const ServiceCard: React.FC<ServiceCardProps> = (props: ServiceCardProps) => (
  <Card
    mode="outlined"
    style={styles.container}
    onPress={props.onPress}
  >
    <Card.Content style={styles.content}>
      <Avatar.Icon style={styles.icon} size={64} icon={props.icon} />
      <Text variant="titleMedium" style={styles.title}>{props.title}</Text>
    </Card.Content>
  </Card>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    marginRight: 2,
    cursor: 'pointer',
    width: '100%',
    maxWidth: 320,
    paddingBottom: 16,
    borderColor: '#ccc'
  },
  icon: {
    backgroundColor: MD3Colors.primaryContainer,
  },
  content: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    color: '#3c3744',
    paddingTop: 10,
  },
});

export default ServiceCard;