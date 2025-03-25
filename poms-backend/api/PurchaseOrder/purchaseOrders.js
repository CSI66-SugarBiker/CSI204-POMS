const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');

const dbPath = path.join(__dirname, '../data/database.json');

const getData = () => {
  const rawData = fs.readFileSync(dbPath);
  return JSON.parse(rawData);
};

const writeData = (data) => {
  fs.writeFileSync(dbPath, JSON.stringify(data, null, 2));
};

router.post('/', (req, res) => {
  try {
    const { purchaseRequestId, sellerName, sellerContact, description, requiredDate, totalPrice, paymentTerms, referenceNumber, items } = req.body;
    const db = getData();
    const newPurchaseOrder = {
      purchaseOrderId: db.purchaseOrders.length + 1,
      purchaseRequestId,
      createdAt: new Date(),
      sellerName,
      sellerContact,
      description,
      requiredDate,
      totalPrice,
      paymentTerms,
      referenceNumber,
      items
    };
    db.purchaseOrders.push(newPurchaseOrder);
    writeData(db);
    res.status(201).json({ purchaseOrderId: newPurchaseOrder.purchaseOrderId });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get('/', (req, res) => {
  try {
    const db = getData();
    res.status(200).json(db.purchaseOrders);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get('/:id', (req, res) => {
  try {
    const db = getData();
    const purchaseOrder = db.purchaseOrders.find(po => po.purchaseOrderId === parseInt(req.params.id));
    if (!purchaseOrder) return res.status(404).json({ message: 'Purchase Order not found' });
    res.status(200).json(purchaseOrder);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.put('/:id', (req, res) => {
  try {
    const db = getData();
    const purchaseOrder = db.purchaseOrders.find(po => po.purchaseOrderId === parseInt(req.params.id));
    if (!purchaseOrder) return res.status(404).json({ message: 'Purchase Order not found' });
    
    Object.assign(purchaseOrder, req.body);
    writeData(db);
    res.status(200).json({ message: 'Purchase order updated', purchaseOrder });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.delete('/:id', (req, res) => {
  try {
    const db = getData();
    const index = db.purchaseOrders.findIndex(po => po.purchaseOrderId === parseInt(req.params.id));
    if (index === -1) return res.status(404).json({ message: 'Purchase Order not found' });

    db.purchaseOrders.splice(index, 1);
    writeData(db);
    res.status(200).json({ message: 'Purchase order deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;

