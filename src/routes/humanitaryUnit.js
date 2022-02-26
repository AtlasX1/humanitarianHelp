const HumanitaryUnit = require("../models/humanitaryUnit");
const router = require("express").Router();

router.post("/create", async (req, res) => {
  try {
    const humanitaryUnit = new HumanitaryUnit({ ...req.body });
    await humanitaryUnit.save();
    return res
      .status(200)
      .json({ message: "Created successfully!", humanitaryUnit });
  } catch (e) {
    console.log(e);
    return res
      .status(500)
      .json({ message: "Something went wrong, try again", error: e });
  }
});

router.get("/", async (req, res) => {
  try {
    const humanitaryUnits = await HumanitaryUnit.find();
    if (!humanitaryUnits) {
      return res.status(400).json({ message: "humanitaryUnits not found, try again" });
    }
    return res.status(200).json({ humanitaryUnits });
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

    HumanitaryUnit.findOneAndUpdate(
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
    await HumanitaryUnit.findByIdAndRemove(req.body._id);
    return await res.status(200).json({ message: "Ok" });
  } catch (e) {
    console.log(e);
    return res
      .status(500)
      .json({ message: "Something went wrong, try again", error: e });
  }
});

module.exports = router;
