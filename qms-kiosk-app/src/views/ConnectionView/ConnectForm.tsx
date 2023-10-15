import * as React from 'react';
import { StyleSheet } from 'react-native';
import { Card, TextInput } from 'react-native-paper';
import { useTranslation } from 'react-i18next';
import ActionButton from '../../common/components/ActionButton';


/**
 * ConnectFormProps defines the props for the Connect Form Component.
 *
 * @property onSubmit - form on submit handler
 */
interface ConnectFormProps {
  onSubmit: (applicationId: string) => void;
}

/**
 * A component a connect form
 *
 * @param {ConnectFormProps} props - The props for the Connect Form component.
 */
const ConnectForm: React.FC<ConnectFormProps> = (props: ConnectFormProps) => {
  const { t } = useTranslation();
  const [applicationId, setApplicationId] = React.useState('');
  return (
    <Card style={styles.container}>
      <Card.Content>
        <TextInput
          label={t('translation:application')}
          value={applicationId}
          onChangeText={text => setApplicationId(text)}
          type="outlined"
          left={<TextInput.Icon icon="application-brackets-outline" />}
        />
      </Card.Content>
      <Card.Actions>
        <ActionButton
          icon="connection"
          message={t('translation:connect')}
          onPress={() => {
            props.onSubmit(applicationId);
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
  },
});


export default ConnectForm;