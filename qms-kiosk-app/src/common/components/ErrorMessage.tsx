import { useTranslation } from 'react-i18next';
import { StyleSheet } from 'react-native';
import { Text } from 'react-native-paper';

const ErrorMessage = () => {
  const { t } = useTranslation();
  return (
    <Text style={styles.message} variant="titleMedium">
      {t('translation:defaultErrorMessage')}
    </Text>
);
}

const styles = StyleSheet.create({
  message: {
    color: '#cc426a',
    padding: 16,
    paddingBottom: 32,
    borderWidth: 1,
    borderColor: '#d6a2b1',
    backgroundColor: '#feeef4',
    margin: 8,
    borderRadius: 5,
  },
});

export default ErrorMessage;
