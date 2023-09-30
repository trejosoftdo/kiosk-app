import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';

type Props = {
  onPress: () => void;
};


const PrintButton: FC<Props> = (props: Props) => {
  const { t } = useTranslation();
  return (
    <Button
      labelStyle={styles.label}
      buttonColor='#b4c5e4'
      icon="printer"
      mode="contained-tonal"
      onPress={props.onPress}
    >
      {t('translation:printTicket')}
    </Button>
  );
};

const styles = StyleSheet.create({
  label: {
    fontSize: 14,
    color: '#3c3744',
  },
});

export default PrintButton;
