import { Button, reactExtension, useApi } from '@shopify/ui-extensions-react/customer-account';

export default reactExtension(
  "customer-account.order.action.menu-item.render",
  () => <MenuActionExtension />
);

async function MenuActionExtension() {
  const {orderId} = useApi()
  let hasFulfillment = false;

  try {
    const orderQuery = {
      query: `query {
        order(id: "${orderId}") {
            fulfillments(first: 1) {
              nodes {
                latestShipmentStatus
              }
            }
          }
      }`
    };
    const result = await fetch(
      "shopify://customer-account/api/latest/graphql.json",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(orderQuery),
      }
    );
    const { data } = await result.json();
    hasFulfillment = data.order.fulfillments.nodes.length !== 0;

  } catch (e) {
    console.log(e);
    hasFulfillment = false;
  }

  if (!hasFulfillment) {
    return null;
  }

  return (<Button>Report a problem</Button>)
}
