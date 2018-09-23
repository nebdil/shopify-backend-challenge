const express = require("express");
const router = express.Router();

router.get("/", function(req, res, next) {
  console.log("req: ", req);
  console.log("res: ", res);
  res.render("index");
});

module.exports = router;
