import * as React from 'react';
import { Stack } from 'expo-router/stack';
import { PaperProvider } from 'react-native-paper';
import '../i18n';

/**
 * Screens layout
 *
 */
const Layout = () => (
  <PaperProvider>
    <Stack />
  </PaperProvider>
);

export default Layout;
