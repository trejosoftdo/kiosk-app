import { useTranslation } from 'react-i18next';
import useServices from '../../hooks/useServices';
import { AppView, ConditionalContainer } from '../../common/components';
import { goToPath } from '../../common/helpers';
import Cards from './Cards';


const ChooseServicesView = () => {
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