import * as React from 'react';
import { StyleSheet } from 'react-native';
import { Card, TextInput } from 'react-native-paper';
import { useTranslation } from 'react-i18next';
import ActionButton from '../../common/components/ActionButton';
import AppLightTheme from '../../common/theme';


/**
 * CustomerDataForm Props defines the props for the Customer Data Form Component.
 *
 * @property onSubmit - form on submit handler
 */
interface CustomerDataFormProps {
  onSubmit: (name: string) => void;
}

/**
 * A component a customer data form
 *
 * @param {CustomerDataFormProps} props - The props for the Customer Data Form component.
 */
const CustomerDataForm: React.FC<CustomerDataFormProps> = (props: CustomerDataFormProps) => {
  const { t } = useTranslation();
  const [name, setName] = React.useState('');
  return (
    <Card style={styles.container} mode="outlined">
      <Card.Content>
        <TextInput
          style={styles.input}
          label={t('translation:name')}
          value={name}
          onChangeText={text => setName(text)}
          type="flat"
          left={<TextInput.Icon icon="account" />}
        />
      </Card.Content>
      <Card.Actions style={styles.action}>
        <ActionButton
          icon="page-next"
          message={t('translation:continue')}
          onPress={() => {
            props.onSubmit(name);
          }}
        />
      </Card.Actions>
    </Card>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    maxWidth: 500,
    backgroundColor: AppLightTheme.colors.background,
  },
  action: {
    marginBottom: 10,
    marginTop: 10,
    paddingRight: 16,
  },
  input: {
    backgroundColor: AppLightTheme.colors.background,
  }
});


export default CustomerDataForm;