const Member = require("../../models/committee/member-model");
const bcrypt = require("bcryptjs");
const { error } = require("../../util/responseStatus");

const login = async (req, res,next) => {
  try {
    const { password , username } = req.body;

    const existMember = await Member.findOne({ username });

    if (!existMember) {
        error(res, { status_code: 400, state: 'false', message: 'member doen not exist with this username' })
    } else {
      const isPassword = await bcrypt.compare(password, existMember.password);
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