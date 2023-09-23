const delay = (timeout) => new Promise((resolve) => {
  setTimeout(() => {
    resolve();
  }, timeout);
});

export const loadServices = async () => {
  await delay(2000);
  return {
    total: 3,
    items: [
      {
        id: 'results-id',
        name: 'results',
        label: 'Resultados',
        icon: 'file-multiple',
      },
      {
        id: 'analysis-id',
        name: 'analysis',
        label: 'Analisis',
        icon: 'poll',
      },
      {
        id: 'information-id',
        name: 'information',
        label: 'Informacion',
        icon: 'information',
      }
    ],
  };
};

export const loadTicketDetails = async (service) => {
  await delay(2000);
  return {
    details: {
      id: 'ticket-id',
      service,
      value: `${service.slice(0, 2).toUpperCase()}${new Date().getTime()}`,
    },
    usersInQueue: 10,
  };
};