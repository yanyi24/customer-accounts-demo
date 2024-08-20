
## 在订单列表中增加一个按钮，点击按钮后弹出一个对话框，让用户输入信息

```javascript
// 判断登陆账户是不是公司类型

function MenuActionModalExtension() {
  const {authenticatedAccount } = useApi();
	const isB2BCustomer = authenticatedAccount.purchasingCompany.current !== null;
}
```
https://shopify.dev/docs/apps/build/customer-accounts/order-action-extensions/build-for-order-action-menus?extension=react
