import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { IconButton } from 'react-native-paper';
import { goToPath } from '../src/common/helpers';
import { CustomerDataFormView } from '../src/views';
import AppLightTheme from '../src/common/theme';
import AppHeader from '../src/common/components/AppHeader';

/**
 * Home Screen Route
 */
const Home = () => {
  const { t } = useTranslation();
  return (
    <React.Fragment>
        <AppHeader
          title={t('translation:customerData')}
          headerRight={() => (
            <IconButton
              icon="cog"
              iconColor={AppLightTheme.colors.background}
              size={20}
              onPress={() => {
                goToPath('/configuration');
              }}
            />          
          )}
        />
      <CustomerDataFormView />
    </React.Fragment>
  );
};

export default Home;