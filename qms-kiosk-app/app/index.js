import * as React from 'react';
import { Stack } from 'expo-router';
import { useTranslation } from 'react-i18next';
import { ChooseServicesView } from '../src/views';


export default function Main() {
  const { t } = useTranslation();
  return (
    <React.Fragment>
        <Stack.Screen
          options={{ title: t('translation:services') }}
        />
      <ChooseServicesView />
    </React.Fragment>
  );
}
