const router = require("express").Router();
const StudentData = require("./model");

router.post("/", async (req, res) => {
  try {
    const addingData = new StudentData(req.body);
    const insertData = await addingData.save();
    res.send(insertData);
  } catch (e) {
    res.send(e);
  }
});

router.get("/", async (req, res) => {
  try {
    const getStudent = await StudentData.find({});
    res.send(getStudent);
  } catch (e) {}
});

router.get("/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const getStudent = await StudentData.findById({ _id });
    res.send(getStudent);
  } catch (e) {}
});

router.patch("/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const getStudent = await StudentData.findByIdAndUpdate(_id, req.body);
    res.send(getStudent);
  } catch (e) {}
});

router.delete("/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const getStudent = await StudentData.findByIdAndDelete(_id);
    res.send(getStudent);
  } catch (e) {}
});

module.exports = router;
