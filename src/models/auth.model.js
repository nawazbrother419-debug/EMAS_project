import mongoose from "mongoose";

const authSchema = new mongoose.Schema({
  name: String,

  email: {
    type: String,
    unique: true,
  },
  password: String,
  role: {
    type: String,
    enum: ["employee", "admin"],
    default: "employee",
  },
});

const Auth = mongoose.model("Auth", authSchema);

export default Auth;
