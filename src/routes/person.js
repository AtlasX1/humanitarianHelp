const Person = require("../models/person");
const router = require("express").Router();

router.post("/create", async (req, res) => {
  try {
    const person = new Person({ ...req.body });
    await person.save();
    return res
      .status(200)
      .json({ message: "Created successfully!", refugee: person });
  } catch (e) {
    console.log(e);
    return res
      .status(500)
      .json({ message: "Something went wrong, try again", error: e });
  }
});

router.get("/", async (req, res) => {
  try {
    const persons = await Person.find();
    if (!persons) {
      return res.status(400).json({ message: "persons not found, try again" });
    }
    persons.reverse();
    return res.status(200).json({ refugees: persons });
  } catch (e) {
    console.log(e);
    return res
      .status(500)
      .json({ message: "Something went wrong, try again", error: e });
  }
});

router.put("/update", async (req, res) => {
  try {
    const query = { _id: req.body._id };

    Person.findOneAndUpdate(
      query,
      req.body.data,
      { upsert: true },
      function (err, doc) {
        if (err) return res.send(500, { error: err });
        return res.status(200).json({ message: "Updated!" });
      }
    );
  } catch (e) {
    console.log(e);
    return res.status(500).json({ message: "Something went wrong, try again" });
  }
});

router.delete("/delete", async (req, res) => {
  try {
    await Person.findByIdAndRemove(req.body._id);
    return await res.status(200).json({ message: "Ok" });
  } catch (e) {
    console.log(e);
    return res
      .status(500)
      .json({ message: "Something went wrong, try again", error: e });
  }
});

module.exports = router;
