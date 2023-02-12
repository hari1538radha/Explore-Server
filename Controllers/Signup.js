import bcrypt from "bcrypt";
import { signupModel } from "../Schema/UserSchema.js";

export const signup = async (req, res) => {
  signupModel.findOne({ userEmail: req.body.userEmail }, async (err, data) => {
    if (err) {
      console.log(err);
    } else {
      if (data) {
        res.send(
          "The Email has been taken already!!! Please enter a new Email ID"
        );
      } else {
        const body = req.body;
        if (
          !(
            body.userFirstname &&
            body.userLastname &&
            body.userEmail &&
            body.userPassword &&
            body.userPhoneNumber
          )
        ) {
          return res.status(400).send({ error: "Data not formatted properly" });
        }
        const user = new signupModel(body);
        const salt = await bcrypt.genSalt(10);
        user.userPassword = await bcrypt.hash(user.userPassword, salt);
        user.save((err, data) => {
          if (err) {
            res.send(err);
          }
          res.status(200).send({
            message: "User's data have been added successfully!!!",
          });
        });
      }
    }
  });
};
