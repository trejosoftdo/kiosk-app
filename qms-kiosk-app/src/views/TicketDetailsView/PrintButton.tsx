import * as React from 'react';
import { useTranslation } from 'react-i18next';
import ActionButton from '../../common/components/ActionButton';

/**
 * PrintButtonProps defines the props for the Printing Form Component.
 *
 * @property onPress - on press handler
 */
interface PrintButtonProps {
  onPress: () => void;
}

/**
 * A component that represents a button for printing ticket details
 *
 * @param {PrintButtonProps} props - The props for the Print Button component.
 */
const PrintButton: React.FC<PrintButtonProps> = (props: PrintButtonProps) => {
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
