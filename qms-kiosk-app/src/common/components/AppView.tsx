import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Header from './Header';
import LoadingIndicator from './LoadingIndicator';
import ErrorMessage from './ErrorMessage';


type Props = {
  headerMessage: string;
  children: any;
  loading?: boolean;
  error?: Error;
}

const AppView: React.FC<Props> = (props: Props) => (
  <View style={styles.container}>
    <Header message={props.headerMessage} />
    <LoadingIndicator loading={props.loading} />
    {props.children}
    {props.error && <ErrorMessage />}
    <StatusBar style="auto" />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    display: 'flex',
  },
});

export default AppView;