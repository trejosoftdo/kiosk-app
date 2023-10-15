import * as React from 'react';
import { Stack } from 'expo-router';
import { useTranslation } from 'react-i18next';
import { InformationView } from '../src/views';


/**
 * Information Screen Route
 */
const Information = () => {
  const { t } = useTranslation();
  return (
    <React.Fragment>
        <Stack.Screen
          options={{
            title: t('translation:information'),
          }}
        />
      <InformationView />
    </React.Fragment>
  );
};

export default Information;
