
import * as React from 'react';
import { StyleSheet } from 'react-native';
import { List } from 'react-native-paper';
import { useTranslation } from 'react-i18next';
import Option from './Option';


/**
 * OptionsProps defines the props for the Options Component.
 *
 * @property onOptionSelect - option selection handler
 */
interface OptionsProps {
  onOptionSelect: (name: string) => void;
};

/**
 * A component a configuration options
 *
 * @param {OptionsProps} props - The props for the Options component.
 */
const Options: React.FC<OptionsProps> = (props: OptionsProps) => {
  const { t } = useTranslation();
  return (
    <List.Section style={styles.container}>
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
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    maxWidth: 500,
  },
});

export default Options;