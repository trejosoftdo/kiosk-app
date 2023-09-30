import * as React from 'react';
import { Stack } from 'expo-router';
import { useTranslation } from 'react-i18next';
import { TicketDetailsView } from '../src/views';

export default function TicketDetails() {
  const { t } = useTranslation();
  return (
    <React.Fragment>
        <Stack.Screen
          options={{
            title: t('translation:turnDetails'),
          }}
        />
      <TicketDetailsView />
    </React.Fragment>
  )
}
