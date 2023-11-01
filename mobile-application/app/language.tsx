import * as React from 'react';
import { Stack } from 'expo-router';
import { useTranslation } from 'react-i18next';
import { LanguageView } from '../src/views';
import AppHeader from '../src/common/components/AppHeader';


/**
 * Language Screen Route
 */
const Language = () => {
  const { t } = useTranslation();
  return (
    <React.Fragment>
      <AppHeader title={t('translation:language')} />
      <LanguageView />
    </React.Fragment>
  );
};

export default Language;
