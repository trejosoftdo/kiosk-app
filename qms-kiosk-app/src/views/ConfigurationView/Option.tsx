
import { List } from 'react-native-paper';

type Props = {
  title: string;
  icon: string;
  onPress: () => void;
};

const Option = (props: Props) => (
  <List.Item
    title={props.title}
    left={() => <List.Icon icon={props.icon} />}
    right={() => <List.Icon icon="chevron-right" />}
    onPress={props.onPress}
  />
);

export default Option;