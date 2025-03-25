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
    const { createdBy, description, status, totalPrice, requiredDate, items } = req.body;
    const db = getData();
    const newPurchaseRequest = {
      purchaseRequestId: db.purchaseRequests.length + 1,
      createdBy,
      description,
      status,
      totalPrice,
      requiredDate,
      items
    };
    db.purchaseRequests.push(newPurchaseRequest);
    writeData(db);
    res.status(201).json({ purchaseRequestId: newPurchaseRequest.purchaseRequestId });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get('/', (req, res) => {
  try {
    const db = getData();
    res.status(200).json(db.purchaseRequests);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get('/:id', (req, res) => {
  try {
    const db = getData();
    const purchaseRequest = db.purchaseRequests.find(req => req.purchaseRequestId === parseInt(req.params.id));
    if (!purchaseRequest) return res.status(404).json({ message: 'Purchase Request not found' });
    res.status(200).json(purchaseRequest);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.put('/:id', (req, res) => {
  try {
    const db = getData();
    const purchaseRequest = db.purchaseRequests.find(req => req.purchaseRequestId === parseInt(req.params.id));
    if (!purchaseRequest) return res.status(404).json({ message: 'Purchase Request not found' });
    
    Object.assign(purchaseRequest, req.body);
    writeData(db);
    res.status(200).json({ message: 'Purchase request updated', purchaseRequest });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.delete('/:id', (req, res) => {
  try {
    const db = getData();
    const index = db.purchaseRequests.findIndex(req => req.purchaseRequestId === parseInt(req.params.id));
    if (index === -1) return res.status(404).json({ message: 'Purchase Request not found' });

    db.purchaseRequests.splice(index, 1);
    writeData(db);
    res.status(200).json({ message: 'Purchase request deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;

