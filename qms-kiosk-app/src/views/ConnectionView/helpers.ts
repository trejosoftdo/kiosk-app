export const getMessageKey = (data): string => {
  if (data?.tokens) {
    return 'translation:successConnectionMessage';
  }

  return data?.userCode ? 'translation:toConnectMessage' : 'translation:initialConnetMessage';
};
