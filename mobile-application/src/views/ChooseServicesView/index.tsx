import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { useLocalSearchParams } from 'expo-router';
import { AppView, Cards, ConditionalContainer } from '../../common/components';
import { goToPath } from '../../common/helpers';
import useServices from '../../hooks/useServices';
import { TICKET_DETAILS_PATH } from '../../common/constants';


/**
 * ChooseServicesViewProps defines the props for the Choose Services View Component.
 */
interface ChooseServicesViewProps {}

/**
 * A component that represents the view for choosing services
 *
 * @param {ChooseServicesViewProps} props - The props for the Choose Services View component.
 */
const ChooseServicesView: React.FC<ChooseServicesViewProps> = (props: ChooseServicesViewProps) => {
  const params = useLocalSearchParams();
  const {
    loading,
    data,
    error,
  } = useServices(+params.categoryId.toString());
  const { t } = useTranslation();
  const messageKey = loading ? 'translation:waitMessage' : 'translation:chooseServiceMessage';
  return (
    <AppView
      headerMessage={t(messageKey, { category: params.categoryLabel })}
      loading={loading}
      error={error}
    >
      <ConditionalContainer display={!loading && !!data}>
        <Cards
          items={data?.items}
          onItemSelect={(item) => {
            goToPath(
              TICKET_DETAILS_PATH,
              {
                serviceId: item.id,
                serviceLabel: item.label,
                customerName: params.customerName,
              },
            );
          }}
        />
      </ConditionalContainer>
    </AppView>
  );
};

export default ChooseServicesView;