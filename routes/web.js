const express = require("express");
const {table,add,deleteMessage,tableJson} = require("../controllers/messages");
const router = express.Router();

router.get("/", table);
router.get("/tableJson", tableJson);
router.post("/add", add);
router.delete("/delete", deleteMessage);

module.exports = router;