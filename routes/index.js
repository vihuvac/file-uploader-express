var express       = require("express");
    router        = express.Router();
    uploadManager = require("./uploadManager")(router)
;


/**
 * GET
 *
 * Home.
 */
router.get("/", function(req, res) {
  res.render("index", { title: "Express" });
});


module.exports = router;
