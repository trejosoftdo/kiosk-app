import * as React from 'react';
import { Stack } from 'expo-router';
import { useTranslation } from 'react-i18next';
import { ConnectionView } from '../src/views';


 const Connection = () => {
  const { t } = useTranslation();
  return (
    <React.Fragment>
        <Stack.Screen
          options={{
            title: t('translation:connection'),
          }}
        />
      <ConnectionView />
    </React.Fragment>
  );
};

export default Connection;
