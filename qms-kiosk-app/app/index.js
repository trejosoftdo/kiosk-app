import * as React from 'react';
import { Stack } from 'expo-router';
import { ChooseServicesView } from '../src/views';

export default function Main() {
  return (
    <React.Fragment>
        <Stack.Screen
          options={{ title: 'Servicios' }}
        />
      <ChooseServicesView />
    </React.Fragment>
  );
}
