import * as React from 'react';
import { ActivityIndicator, MD2Colors } from 'react-native-paper';


type Props = {
  display?: boolean;
  children: React.ReactNode;
};

const ConditionalContainer: React.FC<Props> = (props: Props) => {
  if (!props.display) {
    return null;
  }
  return props.children;
}

export default ConditionalContainer;
