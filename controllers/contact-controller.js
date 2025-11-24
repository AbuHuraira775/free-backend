const Contact = require("../models/contact-schema");
const Service = require("../models/service-model");

const contact = async (req, res) => {
  try {
    const { name, email, message } = req.body;
    const response = { name, email, message };
    await Contact.create(response);
    return res
      .status(200)
      .json({ state: true, msg: `Your Message sent Successfully` });
  } catch (error) {
    return res.status(400).json({
      state: false,
      msg: `Your Message not sent due to : ${error}`,
      data: error,
    });
  }
};

const services = async (req, res, next) => {
  try {
    // const { title, description, image, price, category,features } = req.body;
    // if (!title || !description || !image || !price || !category) {
    //   return res
    //     .status(400)
    //     .json({ state: false, msg: `All fields are required` });
    // }
    // const newService = { title, description, price, image, category,features };
    const services = await Service.find();
    return res.status(200).json({
      state: true,
      msg: `Services are fetched succesfully`,
      data: services,
    });
  } catch (err) {
    next(err);
  }
};

module.exports = {
    contact,
  services,
};
