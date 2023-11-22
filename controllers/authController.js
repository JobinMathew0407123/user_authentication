import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

import User from "../models/userModel.js";

import { handleServerError} from "../utils/functions.js";

const register = async (req, res) => {
  try {
    const { email, name, password } = req.body;

    if (!email || !name || !password) {
      return res.status(400).json({ message: "Incomplete data." });
    }

    const userExists = await User.findOne({ email });

    if (userExists) {
      return res.status(400).json({ message: "User already exists." });
    }

    const salt = await bcrypt.genSalt();

    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = await User.create({
      name,
      email,
      password: hashedPassword,
    });

    res.status(201).json({
      _id: newUser._id,
      name: newUser.name,
      email: newUser.email,
    });
  } catch (error) {
    handleServerError(res, error);
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: "Incomplete data." });
    }

    const user = await User.findOne({ email });

    if (user) {
      const passwordsMatch = await bcrypt.compare(password, user.password);

      if (!passwordsMatch) {
        return res.status(401).json({ message: "Invalid email or password" });
      }
      const access_token = jwt.sign({ userId: user._id }, "Mathew0407", {
        expiresIn: "1d",
      });

      res.status(200).send({
        access_token: access_token
        
      });
    } else {
      return res.status(401).json({ message: "Invalid email or password" });
    }
  } catch (error) {
    handleServerError(res, error);
  }
};

export { register, login};
