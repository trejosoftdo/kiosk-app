import * as React from 'react';
import { Stack } from 'expo-router';
import { useTranslation } from 'react-i18next';
import { ConfigurationView } from '../src/views';


 const Configuration = () => {
  const { t } = useTranslation();
  return (
    <React.Fragment>
        <Stack.Screen
          options={{
            title: t('translation:configuration'),
          }}
        />
      <ConfigurationView />
    </React.Fragment>
  );
};

export default Configuration;
