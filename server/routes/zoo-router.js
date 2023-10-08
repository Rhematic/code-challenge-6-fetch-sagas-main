const express = require("express");
const pool = require("../db/pool.js");

const router = express.Router();

router.get("/", (req, res) => {
  const queryText = `
  SELECT "species".species_name, "class".class_name
  FROM "species"
  JOIN "class" ON "class".id = "species".class_id
  ORDER BY "species".species_name ASC;
  `;
  pool
    .query(queryText)
    .then((result) => {
      res.send(result.rows);
    })
    .catch((error) => {
      console.log("Error making GET request", error);
      res.sendStatus(500);
    });
});

module.exports = router;
