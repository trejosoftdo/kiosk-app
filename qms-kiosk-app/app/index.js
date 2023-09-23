import * as React from 'react';
import { Stack } from 'expo-router';
import { View } from 'react-native';
import App from '../src/App';

export default function Main() {
  return (
    <React.Fragment>
        <Stack.Screen
          options={{
            title: 'Servicios',
          }}
        />
      <App />
    </React.Fragment>
  );
}
