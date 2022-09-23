const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the user model to whatever makes sense in this case
const userSchema = new Schema(
  {
    username: {
      type: String,
      unique: true 
    },
    password:{
      type: String,
      required: true,
      trim: true,
      minLength: 8
    }, 
    email: String,
    
    contacts:[{
      type: Schema.Types.ObjectId,
      ref: "Contact"
    }],
  },

  {
    // this second object adds extra properties: `createdAt` and `updatedAt`
    timestamps: true,
  },

);

const User = model("User", userSchema);

module.exports = User;
