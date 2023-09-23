import * as React from 'react';
import { ActivityIndicator, MD2Colors } from 'react-native-paper';

const LoadingIndicator = (props) => (
  <ActivityIndicator animating={props.loading} color="#233dff" />
);

export default LoadingIndicator;
