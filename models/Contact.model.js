const { Schema, model } = require("mongoose");

const contactSchema = new Schema(
  {
    firstName: {
      type: String,
      required: true,
      minLength: 3,
      trim: true
    },
    lastName: {
      type: String,
      required: true,
      minLength: 3,
      trim: true
    },
    phone: {
      type: String,
      required: true,
      minLength: 3,
      trim: true
    },
  },

  {
    timestamps: true,
  },

);

const Contact = model("Contact", contactSchema);

module.exports = Contact;