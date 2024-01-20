import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { useLocalSearchParams } from 'expo-router';
import { goToPath } from '../../common/helpers';
import { HOME_PATH } from '../../common/constants';
import { AppView, ConditionalContainer, Value } from '../../common/components';
import useTicketDetails from '../../hooks/useTicketDetails';
import UsersInQueue from './UsersInQueue';
import PrintButton from './PrintButton';

/**
 * TicketDetailsViewProps defines the props for the Ticket Details View Component.
 */
interface TicketDetailsViewProps {}

/**
 * A component for the Ticket Details view
 *
 * @param {TicketDetailsViewProps} props - The props for the Ticket Details View component.
 */
const TicketDetailsView: React.FC<TicketDetailsViewProps> = (props: TicketDetailsViewProps) => {
  const params = useLocalSearchParams();
  const {
    loading,
    data,
    error,
  } = useTicketDetails(params.serviceId.toString(), params.customerName.toString());
  const { t } = useTranslation();
  const messageKey = loading ? 'translation:waitMessage' : 'translation:welcomeTurn';
  return (
    <AppView
      headerMessage={t(messageKey, { service: params.serviceLabel.toString(), customer: params.customerName.toString() })}
      loading={loading}
      error={error}
    >
      <ConditionalContainer display={!loading && !!data}>
        <>
          <Value
            value={data?.details.value}
            icon="cards-outline"
          />
          <UsersInQueue total={data?.usersInQueue} />
          <PrintButton
            onPress={() => {
              goToPath(HOME_PATH);
            }}
          />
        </>
      </ConditionalContainer>
    </AppView>
  );
};

export default TicketDetailsView;
