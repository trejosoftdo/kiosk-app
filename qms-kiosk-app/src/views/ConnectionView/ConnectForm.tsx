import { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Card, TextInput } from 'react-native-paper';
import { useTranslation } from 'react-i18next';
import ActionButton from '../../common/components/ActionButton';


type Props = {
  onSubmit: (applicationId: string) => void;
};

const ConnectForm = (props: Props) => {
  const { t } = useTranslation();
  const [applicationId, setApplicationId] = useState('');
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