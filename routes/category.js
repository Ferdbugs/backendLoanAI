const express = require("express");
const axios = require("axios");

const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    message:
      "Please pass a category to filter with. You can also add a limit as a query parameter.",
  });
});

//Using router.route here as it allows for chaining different request types for same route
//Ideally would be used if we also perform delete/put etc on the same route

router.route("/:category").get(getOnCategory, (req, res) => {
  res.status(200).json(req.apiData);
});

//Middleware for getting category

async function getOnCategory(req, res, next) {
  req.apiData = [];
  await axios
    .get("https://api.publicapis.org/entries")
    .then((response) => {
      let count = 0;
      req.apiData = response.data.entries.filter((entry) => {
        if (entry.Category == req.params.category) {
          if (req.query.limit ? count < parseInt(req.query.limit) : true) {
            count++;
            return entry;
          }
        }
      });
    })
    .catch((err) => {
      console.log(err);
    });
  if (req.apiData.length) {
    next();
  } else {
    //Usage of status code 204 would be sufficient here, but res.json was used for more clarity.
    res.json({
      message:
        "No results found for this category, you can try a different category.",
    });
  }
}

module.exports = router;
