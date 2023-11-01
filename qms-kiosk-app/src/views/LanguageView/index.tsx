import * as React from 'react';
import { RadioButton } from 'react-native-paper';
import { useTranslation } from 'react-i18next';
import { AppView } from '../../common/components';


/**
 * LanguageViewViewProps defines the props for the LanguageView View Component.
 */
interface LanguageViewViewProps {}

/**
 * A component for the LanguageView view
 *
 * @param {LanguageViewViewProps} props - The props for the LanguageView View component.
 */
const LanguageViewView: React.FC<LanguageViewViewProps> = (props: LanguageViewViewProps) => {
  const { t, i18n } = useTranslation();
  return (
    <AppView headerMessage={t('translation:languageMessage')}>
      <RadioButton.Group
        onValueChange={newLanguage => i18n.changeLanguage(newLanguage)}
        value={i18n.language}
      >
        <RadioButton.Item label={t('translation:spanish')} value="es" />
        <RadioButton.Item label={t('translation:english')} value="en" />
      </RadioButton.Group>
    </AppView>
  );
};


export default LanguageViewView;