const router = require("express").Router();
const Contact = require("../models/Contact.model");
const User = require("../models/User.model");

//localhost:5005/api/contacts
//GET
router.get("/", async (req, res) => {
  try {
    const { userId } = req.query
    const contacts = await Contact.find({ creator: userId })
    res.json(contacts)
  }
  catch (error) {
    console.log(error)
  }

})

router.get("/:id", (req, res) => {
  Contact.findById(req.params.id)
    .then(allContacts => {
      res.json(allContacts)
    }).catch(console.log)
})

//DELETE
router.delete("/:id", (req, res) => {
  const { id } = req.params
  Contact.findByIdAndDelete(id)
    .then(allContacts => {
      res.json(allContacts)
    }).catch(console.log)
})

//EDIT
router.put("/:id", (req, res) => {
  const { id } = req.params
  const { firstName, lastName, phone } = req.body
  Contact.findByIdAndUpdate(id, { firstName, lastName, phone }, { new: true })
    .then(contactUpdated => {
      res.json(contactUpdated)
    }).catch(console.log)
})

//POST 
router.post("/", async (req, res, next) => {
  const { firstName, lastName, phone, userId } = req.body
  try {
    const newContact = await Contact.create({ firstName, lastName, phone, creator: userId })
    const user = await User.findByIdAndUpdate(userId, { $push: { contacts: newContact } }, { new: true })
    res.json(user)
  }
  catch (error) {
    console.log(error)
  }
});






module.exports = router