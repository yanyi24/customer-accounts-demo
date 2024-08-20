import { Button,CustomerAccountAction,Form, Select,Page, reactExtension, useApi } from '@shopify/ui-extensions-react/customer-account';
import {useState} from "react";

export default reactExtension(
  "customer-account.order.action.render",
  () => <MenuActionModalExtension />
);

async function MenuActionModalExtension() {
  const api = useApi();
  const { close, authenticatedAccount } = api;

  const [currentProblem, setCurrentProblem] = useState('1');
  const [isLoading, setIsLoading] = useState(false);

  const isB2BCustomer = authenticatedAccount.purchasingCompany.current !== null;
  const dtcOptions = [
    {value:"1" , label: "Package item is damaged"},
    {value:"2" , label: "Missing items"},
    {value:"3" , label: "Wrong item was sent"},
    {value:"4" , label: "Item arrived too late"},
    {value:"5" , label: "Never received item"}
  ]

  const b2bOptions = dtcOptions.concat([
    {value:"6" , label: "Package sent to the wrong company location"},
  ]);
  function onSubmit() {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      close();
    }, 1000);

    return (
      <CustomerAccountAction
        title="Report a problem"
        primaryAction={<Button onPress={onSubmit} loading={isLoading}>Report</Button>}
        secondaryAction={<Button onPress={close}>Cancel</Button>}
      >
        <Form onSubmit={onSubmit}>
          <Select
            options={isB2BCustomer ? b2bOptions : dtcOptions}
            value={currentProblem}
            onChange={(value) => setCurrentProblem(value)}
          ></Select>
        </Form>
      </CustomerAccountAction>
    )
  }
}
