import * as React from 'react';
import { Stack } from 'expo-router';
import { useTranslation } from 'react-i18next';
import { IconButton } from 'react-native-paper';
import { goToPath } from '../src/common/helpers';
import { ChooseServicesView } from '../src/views';
import AppLightTheme from '../src/common/theme';

/**
 * Home Screen Route
 */
const Home = () => {
  const { t } = useTranslation();
  return (
    <React.Fragment>
        <Stack.Screen
          options={{
            title: t('translation:services'),
            headerRight: () => (
              <IconButton
                icon="cog"
                iconColor={AppLightTheme.colors.primary}
                size={20}
                onPress={() => {
                  goToPath('/configuration');
                }}
              />          
            ),
          }}
        />
      <ChooseServicesView />
    </React.Fragment>
  );
};

export default Home;