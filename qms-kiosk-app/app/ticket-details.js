import * as React from 'react';
import { Stack } from 'expo-router';
import TicketDetails from '../src/TicketDetails';

export default function Main() {
  return (
    <React.Fragment>
        <Stack.Screen
          options={{
            title: 'Detalles de turno',
          }}
        />
      <TicketDetails />
    </React.Fragment>
  )
}
