const express = require("express");
const axios = require("axios");

const router = express.Router();

router.get("/", getApiDesc, (req, res) => {
  res.status(200).json(req.api);
});

async function getApiDesc(req, res, next) {
  await axios
    .get("https://api.publicapis.org/entries")
    .then((response) => {
      req.api = response.data.entries.sort((a, b) =>
        b.API.toLowerCase() > a.API.toLowerCase()
          ? 1
          : a.API.toLowerCase() > b.API.toLowerCase()
          ? -1
          : 0
      );
      next();
    })
    .catch((err) => {
      console.log(err);
    });
}

module.exports = router;
