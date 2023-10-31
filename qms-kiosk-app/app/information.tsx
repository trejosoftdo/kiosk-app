import * as React from 'react';
import { Stack } from 'expo-router';
import { useTranslation } from 'react-i18next';
import { InformationView } from '../src/views';
import AppHeader from '../src/common/components/AppHeader';


/**
 * Information Screen Route
 */
const Information = () => {
  const { t } = useTranslation();
  return (
    <React.Fragment>
        <AppHeader title={t('translation:information')} />
      <InformationView />
    </React.Fragment>
  );
};

export default Information;
