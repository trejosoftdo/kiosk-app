import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { IconButton } from 'react-native-paper';
import { goToPath } from '../src/common/helpers';
import { ChooseCategoriesView } from '../src/views';
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
          title={t('translation:categories')}
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
      <ChooseCategoriesView />
    </React.Fragment>
  );
};

export default Home;