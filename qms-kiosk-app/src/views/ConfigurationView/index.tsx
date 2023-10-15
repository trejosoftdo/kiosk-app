import { StatusBar } from 'expo-status-bar';
import { router } from 'expo-router';
import { StyleSheet, View } from 'react-native';
import { useTranslation } from 'react-i18next';
import Header from '../../common/components/Header';
import Options from './Options';


const ConfigurationView = () => {
  const { t } = useTranslation();
  return (
    <View style={styles.container}>
      <Header message={t('translation:configuration')} />
      <Options
        onOptionSelect={(option) => {
          router.push({ pathname: `/${option}` });
        }}
      />
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

export default ConfigurationView;