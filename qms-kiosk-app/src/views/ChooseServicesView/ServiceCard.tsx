import { FC } from 'react';
import { StyleSheet } from 'react-native';
import { Avatar, Card, Text } from 'react-native-paper';

type Props = {
  icon: string;
  title: string
  onPress: () => void;
};

const ServiceCard: FC<Props> = (props: Props) => (
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
    backgroundColor: '#b4c5e4',
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