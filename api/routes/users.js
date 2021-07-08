var express = require("express");
var router = express.Router();
var { getData, insert, update, deleteData } = require("../CRUD");

router.get("/", async function (req, res) {
  try {
    const data = await getData();
    data.length
      ? res.send({
          status: "success",
          data: data,
        })
      : res.status(400).json({ status: "error", message: "get data error." });
  } catch (error) {
    console.error(error);
    // throw error
    res.status(400).json({ error: error.toString() });
  }
});

router.post("/insert", async function (req, res) {
  const { email, name } = req.body;
  try {
    const data = await insert(email, name);
    const getDataEmployee = await getData();
    data.hasOwnProperty("n") && data.n === 1
      ? res.send({
          status: "success",
          message: "insert sucessfully.",
          data: getDataEmployee
        })
      : res.status(400).json({ status: "error", message: "insert error." });
  } catch (error) {
    console.error(error);
    // throw error
    res.status(400).json({ error: error.toString() });
  }
});

router.put("/update", async function (req, res) {
  const { id, email, name } = req.body;
  try {
    const data = await update(id, email, name);
    data.hasOwnProperty("nModified") && data.nModified === 1
      ? res.send({
          status: "success",
          message: "update sucessfully.",
        })
      : res.status(400).json({ status: "error", message: "update error." });
  } catch (error) {
    // console.error(error);
    res.status(400).json({ error: error.toString() });
  }
});

router.delete("/delete/:id", async function (req, res) {
  const { id } = req.params;
  try {
    const data = await deleteData(id);
    data.hasOwnProperty("n") && data.n === 1
      ? res.send({
          status: "success",
          message: "delete sucessfully.",
        })
      : res.status(400).json({ status: "error", message: "delete error." });
  } catch (error) {
    // console.error(error);
    res.status(400).json({ error: error.toString() });
  }
});

module.exports = router;
