const router = require("express").Router();
const authRoutes = require("./auth.routes");
const contactsRoutes = require("./contact.routes");

/* GET home page */
router.get("/", (req, res, next) => {
  res.json("Contact List");
});

router.use("/auth", authRoutes);

//localhost:5005/api/contacts
router.use("/contacts", contactsRoutes);

module.exports = router;
