import * as React from 'react';
import { StyleSheet } from 'react-native';
import { ActivityIndicator, MD2Colors } from 'react-native-paper';

/**
 * LoadingIndicatorProps defines the props for the Loading Indicator Component.
 *
 * @property loading - to indicate it is loading
 */
interface LoadingIndicatorProps {
  loading?: boolean;
}


/**
 * A component that indicates the app is busy
 *
 * @param {LoadingIndicatorProps} props - The props for the Loading Indicator component.
 */
const LoadingIndicator: React.FC<LoadingIndicatorProps> = (props: LoadingIndicatorProps) => (
  <ActivityIndicator
    style={styles.container}
    animating={props.loading}
    size="large"
    color="#233dff"
  />
);

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    marginBottom: 10,
  },
});

export default LoadingIndicator;
