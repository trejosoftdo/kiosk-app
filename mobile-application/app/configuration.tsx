import * as React from 'react';
import { Stack } from 'expo-router';
import { useTranslation } from 'react-i18next';
import { ConfigurationView } from '../src/views';
import AppHeader from '../src/common/components/AppHeader';

/**
 * Configuration Screen Route
 */
const Configuration = () => {
  const { t } = useTranslation();
  return (
    <React.Fragment>
        <AppHeader title={t('translation:configuration')} />
      <ConfigurationView />
    </React.Fragment>
  );
};

export default Configuration;
