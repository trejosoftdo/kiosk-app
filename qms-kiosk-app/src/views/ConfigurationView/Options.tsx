
import { List } from 'react-native-paper';
import { useTranslation } from 'react-i18next';
import Option from './Option';

type Props = {
  onOptionSelect: (name: string) => void;
};

const Options = (props: Props) => {
  const { t } = useTranslation();
  return (
    <List.Section>
      <List.Subheader>{t('translation:options')}</List.Subheader>
      <Option
        title={t('translation:information')}
        icon="information"
        onPress={() => props.onOptionSelect('information')}
      />
      <Option
        title={t('translation:connection')}
        icon="connection"
        onPress={() => props.onOptionSelect('connection')}
      />
    </List.Section>
  );
}

export default Options;