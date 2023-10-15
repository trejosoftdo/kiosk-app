import { StyleSheet } from 'react-native';
import { List } from 'react-native-paper';
import { useTranslation } from 'react-i18next';
import useDeviceId from '../../hooks/useDeviceId';
import { AppView, ConditionalContainer } from '../../common/components';



const InformationView = () => {
  const { t } = useTranslation();
  const { data, loading, error } = useDeviceId();
  return (
    <AppView
      headerMessage={t('translation:information')}
      loading={loading}
      error={error}
    >
      <ConditionalContainer display={data?.deviceId}>
        <List.Accordion
          style={styles.container}
          title={t('translation:details')}
          left={props => <List.Icon {...props} icon="information" />}
        >
          <List.Item
            title={t('translation:id')}
            description={data?.deviceId}
          />
        </List.Accordion>
      </ConditionalContainer>
    </AppView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    maxWidth: 500,
  },
});

export default InformationView;