const router = require("express").Router();
const ReceivedHumanitaryUnit = require("../models/receivedHumanitaryUnit");
const HumanitaryUnit = require("../models/humanitaryUnit");

router.post("/create", async (req, res) => {
  try {
    const receivedHumanitaryUnits = new ReceivedHumanitaryUnit({ ...req.body });

    if (receivedHumanitaryUnits?.humanitaryUnits) {
      for (const humanitary of receivedHumanitaryUnits?.humanitaryUnits) {
        const content = await HumanitaryUnit.updateOne(
          { _id: humanitary.humanitaryUnitId },
          { count: humanitary.count }
        );

        console.log(content);
      }
    }

    await receivedHumanitaryUnits.save();
    return res
      .status(200)
      .json({ message: "Created successfully!", receivedHumanitaryUnits });
  } catch (e) {
    console.log(e);
    return res
      .status(500)
      .json({ message: "Something went wrong, try again", error: e });
  }
});

// router.get("/", async (req, res) => {
//   try {
//     const places = await Place.find();
//     if (!places) {
//       return res.status(400).json({ message: "places not found, try again" });
//     }
//     return res.status(200).json({ places });
//   } catch (e) {
//     console.log(e);
//     return res
//       .status(500)
//       .json({ message: "Something went wrong, try again", error: e });
//   }
// });

// router.put("/update", async (req, res) => {
//   try {
//     const query = { _id: req.body._id };

//     Place.findOneAndUpdate(
//       query,
//       req.body.data,
//       { upsert: true },
//       function (err, doc) {
//         if (err) return res.send(500, { error: err });
//         return res.status(200).json({ message: "Updated!" });
//       }
//     );

//   } catch (e) {
//     console.log(e);
//     return res.status(500).json({ message: "Something went wrong, try again" });
//   }
// });

// router.delete("/delete", async (req, res) => {
//   try {
//     await Place.findByIdAndRemove(req.body._id);
//     return await res.status(200).json({ message: "Ok" });
//   } catch (e) {
//     console.log(e);
//     return res
//       .status(500)
//       .json({ message: "Something went wrong, try again", error: e });
//   }
// });

module.exports = router;
