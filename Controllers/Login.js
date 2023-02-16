import { signupModel } from "../Schema/UserSchema.js";
import bcrypt from "bcrypt";

export const login = async (req, res) => {
  const data = req.body;
  console.log(req.body)
  const user = await signupModel.findOne({ userEmail: data.userEmail });
  console.log(user)
  if (user) {
    const validPassword = await bcrypt.compare(
      data.userPassword,
      user.userPassword
    );
    if (validPassword) {
      res.status(200).send({ message: "Valid password" , username:user.userFirstname});
    } else {
      res.status(400).send({ error: "Invalid Password" });
    }
  } else {
    res.status(401).send({ error: "User does not exist" });
  }
};
