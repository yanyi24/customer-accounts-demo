import { Banner, Page, reactExtension, useApi, BlockStack, TextBlock, Link } from '@shopify/ui-extensions-react/customer-account';

export default reactExtension(
  "customer-account.order-status.block.render",
  () => <PromotionBanner />
);

function PromotionBanner() {
  const { i18n } = useApi();

  return (
    <Page title={i18n.translate('fullPageTitle')}>
      <Banner>
        <BlockStack inlineAlignment="center">
          <TextBlock>
            {`🎉 You've earned 1,000 points from this order. You've been upgraded to Platinum tier. `}
          </TextBlock>
          <Link>View rewards</Link>
        </BlockStack>
      </Banner>
    </Page>
  )
}
