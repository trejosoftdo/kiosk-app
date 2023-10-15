import * as React from 'react';
import { useTranslation } from 'react-i18next';
import useServices from '../../hooks/useServices';
import { AppView, ConditionalContainer } from '../../common/components';
import { goToPath } from '../../common/helpers';
import Cards from './Cards';


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
  const {
    loading,
    data,
    error,
  } = useServices();
  const { t } = useTranslation();
  const messageKey = loading ? 'translation:waitMessage' : 'translation:chooseServiceMessage';
  return (
    <AppView
      headerMessage={t(messageKey)}
      loading={loading}
      error={error}
    >
      <ConditionalContainer display={!loading && data}>
        <Cards
          items={data?.items}
          onServiceSelect={(service) => {
            goToPath('/ticket-details', { service });
          }}
        />
      </ConditionalContainer>
    </AppView>
  );
};

export default ChooseServicesView;