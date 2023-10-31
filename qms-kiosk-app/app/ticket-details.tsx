import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { TicketDetailsView } from '../src/views';
import AppHeader from '../src/common/components/AppHeader';

/**
 * TicketDetails Screen Route
 */
const TicketDetails = () => {
  const { t } = useTranslation();
  return (
    <React.Fragment>
        <AppHeader
          title={t('translation:turnDetails')}
        />
      <TicketDetailsView />
    </React.Fragment>
  );
};

export default TicketDetails;
