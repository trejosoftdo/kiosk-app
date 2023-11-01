import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { ChooseServicesView } from '../src/views';
import AppLightTheme from '../src/common/theme';
import AppHeader from '../src/common/components/AppHeader';

/**
 * Services Screen Route
 */
const Services = () => {
  const { t } = useTranslation();
  return (
    <React.Fragment>
        <AppHeader title={t('translation:services')} />
      <ChooseServicesView />
    </React.Fragment>
  );
};

export default Services;