import { BlockStack,Button, CustomerAccountAction,Form, InlineStack, TextField,reactExtension, useApi } from '@shopify/ui-extensions-react/customer-account';
import {useState} from "react";

export default reactExtension(
  "customer-account.order.action.render",
  () => <MenuActionModalExtension />
);

function MenuActionModalExtension() {
  const api = useApi();
  const { i18n } = api;
  const [note, setNote] = useState('');
  return (
    <CustomerAccountAction title={i18n.translate('fullPageTitle')}>
      <Form onSubmit={() => {
        try {
          // api.order.note.set(note);
        } catch (e) {
          console.log(e)
        } finally {
          api.close();
        }
      }}>
        <BlockStack>
          <TextField value={note} onChange={(value) => setNote(value) } multiline={3} label="Note for the order"/>
          <InlineStack inlineAlignment="end">
            <Button onPress={() => api.close()} kind='secondary'>Cancel</Button>
            <Button onPress={() => api.close()} kind="primary" accessibilityRole="submit">Add note</Button>
          </InlineStack>
        </BlockStack>
      </Form>
    </CustomerAccountAction>
  )
}
