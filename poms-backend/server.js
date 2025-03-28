const express = require('express');
const bodyParser = require('body-parser');
const purchaseRequestsRoute = require('./api/PurchaseRequest/purchaseRequests.js');
const purchaseOrdersRoute = require('./api/PurchaseOrder/purchaseOrders.js');
const assetReceiptsRoute = require('./api/AssetReceipt/assetReceipts.js');
const notificationsRoute = require('./api/Notification/notifications.js');


const app = express();
app.use(bodyParser.json());
app.use('/api/notifications', notificationsRoute);
app.use('/api/purchase-requests', purchaseRequestsRoute);
app.use('/api/purchase-orders', purchaseOrdersRoute);
app.use('/api/asset-receipts', assetReceiptsRoute);
//
const port = 3000;
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});