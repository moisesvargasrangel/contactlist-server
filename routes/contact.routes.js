const router = require("express").Router();
const Contact = require("../models/Contact.model");
const User = require("../models/User.model");

//localhost:5005/api/contacts
//GET
router.get("/", (req, res) =>{
  Contact.find()
  .then(allContacts =>{
    res.json(allContacts)
  }).catch(console.log)
})

router.get("/:id",(req, res) =>{
  Contact.findById(req.params.id)
  .then(allContacts =>{
    res.json(allContacts)
  }).catch(console.log)
})

//DELETE
router.delete("/:id",(req, res) =>{
  const {id} = req.params
  Contact.findByIdAndDelete(id)
  .then(allContacts =>{
    res.json(allContacts)
  }).catch(console.log)
})

//EDIT
router.put("/:id", (req, res) => {
  const {id} = req.params
  const  {firstName, lastName, phone} = req.body
  Contact.findByIdAndUpdate(id, {firstName, lastName, phone},{new:true})
  .then(contactUpdated =>{
    res.json(contactUpdated)
  }).catch(console.log)
})

//POST 
router.post("/", (req,res,next) =>{
  Contact.create(req.body, (error, data) =>{
    if (error) {
      return next(error)
      } else {
        res.json(data)
      }
  })
});






module.exports = router