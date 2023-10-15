import { useTranslation } from 'react-i18next';
import { goToPath } from '../../common/helpers';
import { AppView } from '../../common/components';
import Options from './Options';


const ConfigurationView = () => {
  const { t } = useTranslation();
  return (
    <AppView loading={false} headerMessage={t('translation:configuration')} >
      <Options
        onOptionSelect={(option) => {
          goToPath(`/${option}`);
        }}
      />
    </AppView>
  );
};

export default ConfigurationView;