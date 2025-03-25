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
    const { purchaseOrderId, receivedDate, referenceNumber, items } = req.body;
    const db = getData();
    const newAssetReceipt = {
      receiptId: db.assetReceipts.length + 1,
      purchaseOrderId,
      receivedDate,
      referenceNumber,
      createdAt: new Date(),
      updatedAt: null,
      items
    };
    db.assetReceipts.push(newAssetReceipt);
    writeData(db);
    res.status(201).json({ receiptId: newAssetReceipt.receiptId });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get('/', (req, res) => {
  try {
    const db = getData();
    res.status(200).json(db.assetReceipts);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get('/:id', (req, res) => {
  try {
    const db = getData();
    const assetReceipt = db.assetReceipts.find(ar => ar.receiptId === parseInt(req.params.id));
    if (!assetReceipt) return res.status(404).json({ message: 'Asset Receipt not found' });
    res.status(200).json(assetReceipt);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.put('/:id', (req, res) => {
  try {
    const db = getData();
    const assetReceipt = db.assetReceipts.find(ar => ar.receiptId === parseInt(req.params.id));
    if (!assetReceipt) return res.status(404).json({ message: 'Asset Receipt not found' });
    
    Object.assign(assetReceipt, req.body);
    assetReceipt.updatedAt = new Date();
    writeData(db);
    res.status(200).json({ message: 'Asset receipt updated', assetReceipt });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.delete('/:id', (req, res) => {
  try {
    const db = getData();
    const index = db.assetReceipts.findIndex(ar => ar.receiptId === parseInt(req.params.id));
    if (index === -1) return res.status(404).json({ message: 'Asset Receipt not found' });

    db.assetReceipts.splice(index, 1);
    writeData(db);
    res.status(200).json({ message: 'Asset receipt deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;

