const express = require("express");
const router = express.Router();
const User = require("../models/UserModel");
const { v4: uuidv4 } = require("uuid");

router.post("/register", async (req, res) => {
  let emailExists = await User.findOne({ email: req.body.email });

  if (!emailExists) {
    let user = new User();
    user.name = req.body.name;
    user.surname = req.body.surname;
    user.dob = req.body.dob;
    user.oib = req.body.oib;
    user.email = req.body.email;
    user.phone = req.body.phone;
    user.address = req.body.address;
    user.drivingLicenseNumber = req.body.drivingLicenseNumber;
    user.password = req.body.password; // you should hash this

    await user.save();  
    return res.status(200).json({ message: "Registration successful" });
  } else {
    return res
      .status(406)
      .json({ message: "Email already exists" });
  }
});

router.post("/login", async (req, res) => {
  let user = await User.findOne({ name: req.body.name });
  if (!user) return res.status(401).json({ message: "Unauthorized" });

  if (req.body.password == user.password) { // you should compare hashed password
    user.loginToken = uuidv4();

    await user.save();

    return res
      .cookie("loginToken", user.loginToken, { sameSite: "none", secure: true })
      .cookie("name", user.name, { sameSite: "none", secure: true })
      .cookie("surname", user.surname, { sameSite: "none", secure: true })
      .status(200)
      .json({
        message: "OK",
        cookies: {
          loginToken: user.loginToken,
          name: user.name,
          surname: user.surname,
        },
      });

  } else {
    return res.status(401).json({ message: "Unauthorized" });
  }
});


module.exports = router;
