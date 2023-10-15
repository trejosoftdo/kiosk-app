import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';

type Props = {
  onPress: () => void;
  message: string;
  icon: string;
};


const ActionButton: FC<Props> = (props: Props) => {
  const { t } = useTranslation();
  return (
    <Button
      labelStyle={styles.label}
      buttonColor='#b4c5e4'
      mode="contained-tonal"
      onPress={props.onPress}
      icon={props.icon}
    >
      {props.message}
    </Button>
  );
};

const styles = StyleSheet.create({
  label: {
    fontSize: 14,
    color: '#3c3744',
  },
});

export default ActionButton;
