import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { List } from 'react-native-paper';
import { useTranslation } from 'react-i18next';
import useDeviceId from '../../hooks/useDeviceId';
import { AppView, ConditionalContainer } from '../../common/components';


/**
 * InformationViewProps defines the props for the Information View Component.
 */
interface InformationViewProps {}

/**
 * A component for the Information view
 *
 * @param {InformationViewProps} props - The props for the Information View component.
 */
const InformationView: React.FC<InformationViewProps> = (props: InformationViewProps) => {
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
          left={props => (
            <View style={styles.title}>
              <List.Icon {...props} icon="information" />
              <Text style={styles.titleText}>{t('translation:details')}</Text>
            </View>
          )}
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
  title: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    width: '50%',
  },
  titleText: {
    paddingLeft: 10,
    fontSize: 16
  },
  container: {
    width: '100%',
    maxWidth: 500,
  },
});

export default InformationView;