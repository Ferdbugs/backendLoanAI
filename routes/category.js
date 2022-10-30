const express = require("express");
const axios = require("axios");

const router = express.Router();

var entryData = [];

router.get("/", (req, res) => {
  res.send("All Categories");
});

//Using router.route here as it allows for chaining different request types for same route
//Ideally would be used if we also perform delete/put etc on the same route

router.route("/:category").get(getOnCategory, (req, res) => {
  res.status(200).json(req.api);
});

//Middleware for getting category

async function getOnCategory(req, res, next) {
  await axios.get("https://api.publicapis.org/entries").then((response) => {
    let count = 0;
    req.api = response.data.entries.filter((entry) => {
      if (
        entry.Category == req.params.category &&
        count < parseInt(req.query.limit)
      ) {
        count++;
        return entry;
      }
    });
  });
  if (req.api.length) {
    next();
  } else {
    //Usage of status code 204 would be sufficient here, but res.json was used for more clarity.
    res.json({
      message:
        "No data found for this category, you can try a different category.",
    });
  }
}

module.exports = router;
