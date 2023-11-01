import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { ChooseCategoriesView } from '../src/views';
import AppLightTheme from '../src/common/theme';
import AppHeader from '../src/common/components/AppHeader';


/**
 * Categories Screen Route
 */
const Categories = () => {
  const { t } = useTranslation();
  return (
    <React.Fragment>
      <AppHeader title={t('translation:categories')} />
      <ChooseCategoriesView />
    </React.Fragment>
  );
};

export default Categories;