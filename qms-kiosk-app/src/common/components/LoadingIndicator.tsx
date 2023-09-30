import * as React from 'react';
import { ActivityIndicator, MD2Colors } from 'react-native-paper';

type Props = {
  loading?: boolean;
};

const LoadingIndicator: React.FC<Props> = (props: Props) => (
  <ActivityIndicator animating={props.loading} color="#233dff" />
);

export default LoadingIndicator;
