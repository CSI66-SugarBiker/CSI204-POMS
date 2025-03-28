const express = require("express");
const router = express.Router();
const fs = require("fs");
const path = require("path");

const dbPath = path.join(__dirname, "./dummy.json");

const getData = () => {
  const rawData = fs.readFileSync(dbPath);
  return JSON.parse(rawData);
};

function unread(){
  const db = getData();
  if (typeof db.r !== "object") db.r = {};
  Object.assign(db.r, db.ur);
  db.ur ={}
  writeData(db)
  return db;
}



router.put("/", (req, res) => {
console.log(unread());

res.status(200).json({ message: "Notification marked as read" });
});


const writeData = (data) => {
  fs.writeFileSync(dbPath, JSON.stringify(data, null, 2));
};











router.get("/", (req, res) => {
  try {
    const db = getData();
    res.status(200).json(db.notifications);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// router.put("/:id", (req, res) => {
//   try {
//     const db = getData();
//     // const notifications = db.notifications.findIndex(
//     //   (n) => n.notificationId === parseInt(req.params.id)
//     // );
//     // console.log(db[req.params.id][0]);
//     // console.log(req.params.id);
    
    
//     if (notifications === -1)
//       return res.status(404).json({ message: "Notification not found" });

//     db.notifications[notifications].read = true;
//     writeData(db);
//     res.status(200).json({ message: "Notification marked as read" });
    
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });


module.exports = router;
