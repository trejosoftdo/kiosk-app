import { useState } from 'react';
import { View } from 'react-native';
import { Divider, TextInput } from 'react-native-paper';
import { useTranslation } from 'react-i18next';
import ActionButton from '../../common/components/ActionButton';


type Props = {
  onSubmit: (applicationId: string) => void;
};

const ConnectForm = (props: Props) => {
  const { t } = useTranslation();
  const [applicationId, setApplicationId] = useState('');
  return (
    <View>
      <TextInput
        label={t('translation:application')}
        value={applicationId}
        onChangeText={text => setApplicationId(text)}
        type="outlined"
      />
      <Divider />
      <ActionButton
        icon="connection"
        message={t('translation:connect')}
        onPress={() => {
          props.onSubmit(applicationId);
        }}
      />
    </View>
  );
};

export default ConnectForm;