import * as React from 'react';
import { Stack } from 'expo-router/stack';
import { PaperProvider } from 'react-native-paper';

export default function Layout() {
  return (
    <PaperProvider>
      <Stack />
    </PaperProvider>
  );
}
