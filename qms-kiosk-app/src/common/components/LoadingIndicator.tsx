import * as React from 'react';
import { StyleSheet } from 'react-native';
import { ActivityIndicator, MD2Colors } from 'react-native-paper';

type Props = {
  loading?: boolean;
};

const LoadingIndicator: React.FC<Props> = (props: Props) => (
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
