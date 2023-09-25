import * as React from 'react';
import { Stack } from 'expo-router/stack';
import { PaperProvider } from 'react-native-paper';
import '../i18n';

export default function Layout() {
  return (
    <PaperProvider>
      <Stack />
    </PaperProvider>
  );
}
