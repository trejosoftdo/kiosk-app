export const getMessageKey = (data) => {
  if (data?.tokens) {
    return 'translation:successConnectionMessage';
  }

  return data?.userCode ? 'translation:toConnectMessage' : 'translation:connection';
};
