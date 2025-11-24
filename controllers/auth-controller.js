const User = require("../models/user-modle");
const bcrypt = require("bcryptjs");

const home = async (req, res) => {
  try {
    res.status(200).send("Home From Controller");
  } catch (err) {
    next(err);
  }
};

const register = async (req, res, next) => {
  try {
    const { name, email, phone, password } = req.body;

    const emailExists = await User.findOne({ email });
    if (emailExists) {
      res.status(400).send({ state: false, message: `user exists` });
    } 
    else {
      const userData = await User.create({ name, phone, password, email });

      res.status(200).send({
        status: true,
        message: "Register From Controller",
        data: userData,
        token: await userData.generateToken(),
        userId: userData._id.toString(),
      });
    }
  } 
  catch (error) {
    next(error);
  }
};

const login = async (req, res,next) => {
  try {
    const { email, password } = req.body;

    const existEmail = await User.findOne({ email });

    if (!existEmail) {
      return res
        .status(400)
        .json({ state: false, msg: `user is not registered` });
    } else {
      const isPassword = await bcrypt.compare(password, existEmail.password);
      if (isPassword) {
        
        return res.status(200).json({
          state: true,
          msg: `Login Successful`,
          token: await existEmail.generateToken(),
          userId: existEmail._id,
        });
      } else {
        return res
          .status(400)
          .json({ 
            state: false,
            msg: `Password is not correct`,
          });
      }
    }
  } catch (error) {
    next(error);
  }
};

const getUser = async (req, res, next) => {
  try {
    const user = req.user
    res.status(200).json({
      state: true,
      msg: `User fetched successfully...`,
      data: user,
    });
  } catch (err) {
    next(err);
  }
}


module.exports = { home, register,  login,getUser};