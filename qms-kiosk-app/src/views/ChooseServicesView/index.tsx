import { StatusBar } from 'expo-status-bar';
import { router } from 'expo-router';
import { StyleSheet, View } from 'react-native';
import { useTranslation } from 'react-i18next';
import Header from '../../common/components/Header';
import Cards from './Cards';
import useServices from '../../hooks/useServices';
import LoadingIndicator from '../../common/components/LoadingIndicator';
import ErrorMessage from '../../common/components/ErrorMessage';


const ChooseServicesView = () => {
  const {
    loading,
    data,
    error,
  } = useServices();
  const { t } = useTranslation();
  const messageKey = loading ? 'translation:waitMessage' : 'translation:chooseServiceMessage';
  return (
    <View style={styles.container}>
      <Header message={t(messageKey)} />
      <LoadingIndicator loading={loading} />
      {!loading && data && (
        <Cards
          items={data.items}
          onServiceSelect={(service) => {
            router.push({
              pathname: '/ticket-details',
              params: { service },
            });
          }}
        />
      )}
      {error && <ErrorMessage />}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    display: 'flex',
  },
});

export default ChooseServicesView;