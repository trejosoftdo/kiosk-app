import * as React from 'react';
import { Stack } from 'expo-router/stack';
import { PaperProvider } from 'react-native-paper';
import AppLightTheme from '../src/common/theme';
import '../i18n';


/**
 * Screens layout
 *
 */
const Layout = () => (
  <PaperProvider theme={AppLightTheme}>
    <Stack />
  </PaperProvider>
);

export default Layout;
