import { List } from 'react-native-paper';
import { useTranslation } from 'react-i18next';
import useDeviceId from '../../hooks/useDeviceId';
import { AppView } from '../../common/components';


const InformationView = () => {
  const { t } = useTranslation();
  const { data, loading, error } = useDeviceId();
  return (
    <AppView
      headerMessage={t('translation:information')}
      loading={loading}
      error={error}
    >
      {data?.deviceId && (
        <List.Accordion
          title={t('translation:details')}
          left={props => <List.Icon {...props} icon="information" />}>
          <List.Item
            title={t('translation:id')}
            description={data.deviceId}
          />
        </List.Accordion>
      )}
    </AppView>
  );
};

export default InformationView;