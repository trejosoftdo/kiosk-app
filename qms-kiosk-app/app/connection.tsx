import * as React from 'react';
import { Stack } from 'expo-router';
import { useTranslation } from 'react-i18next';
import { ConnectionView } from '../src/views';
import AppHeader from '../src/common/components/AppHeader';

/**
 * Connection Screen Route
 */
const Connection = () => {
  const { t } = useTranslation();
  return (
    <React.Fragment>
        <AppHeader title={t('translation:connection')} />
      <ConnectionView />
    </React.Fragment>
  );
};

export default Connection;
