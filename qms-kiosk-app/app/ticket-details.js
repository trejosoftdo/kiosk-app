import * as React from 'react';
import { Stack } from 'expo-router';
import { TicketDetailsView } from '../src/views';

export default function Main() {
  return (
    <React.Fragment>
        <Stack.Screen
          options={{
            title: 'Detalles de turno',
          }}
        />
      <TicketDetailsView />
    </React.Fragment>
  )
}
