
import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { goToPath } from '../../common/helpers';
import { AppView } from '../../common/components';
import { getMessageKey } from './helpers';
import CustomerDataForm from './CustomerDataForm';


/**
 * CustomerDataFormViewProps defines the props for the Customer Data Form View Component.
 */
interface CustomerDataFormViewProps {}

/**
 * A component for the connect view
 *
 * @param {CustomerDataFormViewProps} props - The props for the Customer Data Form View component.
 */
const CustomerDataFormView: React.FC<CustomerDataFormViewProps> = (props: CustomerDataFormViewProps) => {
  const { t } = useTranslation();
  return (
    <AppView headerMessage={t('translation:customerDataFormMessage')}>
      <CustomerDataForm
        onSubmit={(customerName) => {
          goToPath('/categories', { customerName });
        }}
      />
    </AppView>
  );
};

export default CustomerDataFormView;