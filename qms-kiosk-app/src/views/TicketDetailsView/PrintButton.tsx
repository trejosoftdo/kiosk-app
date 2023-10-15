import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import ActionButton from '../../common/components/ActionButton';

type Props = {
  onPress: () => void;
};

const PrintButton: FC<Props> = (props: Props) => {
  const { t } = useTranslation();
  return (
    <ActionButton
      icon="printer"
      onPress={props.onPress}
      message={t('translation:printTicket')}
    />
  );
};

export default PrintButton;
