const express = require('express');
const bodyParser = require('body-parser');
const purchaseRequestsRoute = require('./api/PurchaseRequest');
const purchaseOrdersRoute = require('./api/PurchaseOrder');
const assetReceiptsRoute = require('./api/AssetReceipt');

const app = express();
app.use(bodyParser.json());


app.use('/api/purchase-requests', purchaseRequestsRoute);
app.use('/api/purchase-orders', purchaseOrdersRoute);
app.use('/api/asset-receipts', assetReceiptsRoute);
//
const port = 3000;
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
