const Contact = require("../models/contact-schema");
const Service = require("../models/service-model");
const User = require("../models/user-modle");

const allUsers = async (req, res, next) => {
  try {
    const users = await User.find();
    if (!users) {
      return res.status(400).json({
        state: false,
        msg: `No users found`,
      });
    }
    return res.status(200).json({
      state: true,
      msg: `All users are fetched succesfully`,
      data: users,
    });
  } catch (error) {
    next(error);
  }
};

const allServices = async (req, res, next) => {
  try {
    const services = await Service.find();
    if (!services) {
      return res.status(400).json({
        state: false,
        msg: `No services found`,
      });
    }
    return res.status(200).json({
      state: true,
      msg: `All services are fetched succesfully`,
      data: services,
    });
  } catch (error) {
    next(error);
  }
};

const allContacts = async (req, res, next) => {
  try {
    const contacts = await Contact.find();
    if (!contacts) {
      return res.status(400).json({
        state: false,
        msg: `No contacts found`,
      });
    }
    return res.status(200).json({
      state: true,
      msg: `All contacts are fetched succesfully`,
      data: contacts,
    });
  } catch (error) {
    next(error);
  }
};

const deleteUserById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const user = await User.findByIdAndDelete(id);
    if (!user) {
      return res.status(400).json({
        state: false,
        msg: `No user found with this id`,
      });
    }
    return res.status(200).json({
      state: true,
      msg: `User deleted successfully`,
      data: user,
    });
  } catch (err) {
    next(err);
  }
};

const deleteContactById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const contact = await Contact.findByIdAndDelete(id);
    if (!contact) {
      return res.status(400).json({
        state: false,
        msg: `No contact found with this id`,
      });
    }
    return res.status(200).json({
      state: true,
      msg: `Contact deleted successfully`,
      data: contact,
    });
  } catch (err) {
    next(err);
  }
};
const deleteServiceById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const service = await Service.findByIdAndDelete(id);
    if (!service) {
      return res.status(400).json({
        state: false,
        msg: `No service found with this id`,
      });
    }
    return res.status(200).json({
      state: true,
      msg: `Service deleted successfully`,
      data: service,
    });
  } catch (err) {
    next(err);
  }
};

const updateUserById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const user = await User.findByIdAndUpdate(id, req.body, { new: true });
    if (!user) {
      return res.status(400).json({
        state: false,
        msg: `No user found with this id`,
      });
    }
    return res.status(200).json({
      state: true,
      msg: `User updated successfully`,
      data: user,
    });
  } catch (err) {
    next(err);
  }
};

const updateServiceById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const service = await Service.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!service) {
      return res.status(400).json({
        state: false,
        msg: `No service found with this id`,
      });
    }
    return res.status(200).json({
      state: true,
      msg: `Service updated successfully`,
      data: service,
    });
  } catch (err) {
    next(err);
  }
};

const getUserById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id, { password: 0 });
    if (!user) {
      return res.status(400).json({
        state: false,
        msg: `No user found with this id`,
      });
    }
    return res.status(200).json({
      state: true,
      msg: `User fetched successfully...`,
      data: user,
    });
  }
  catch (err) {
    next(err);
  }
}

const getServiceById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const service = await Service.findById(id);
    if (!service) {
      return res.status(400).json({
        state: false,
        msg: `No service found with this id`,
      });
    }
    return res.status(200).json({
      state: true,
      msg: `Service fetched successfully...`,
      data: service,
    });
  }
  catch (err) {
    next(err);
  }
}

const addUser = async (req, res, next) => {
  try {
      const { name, email, phone, password } = req.body;
      const userExist = await User.find({ email });
      if (userExist.length > 0) {
          return res.status(400).json({
              state: false,
              msg: `User already exist with this email`,
          });
      }
      if(!name || !email || !phone || !password) {
          return res.status(400).json({
              state: false,
              msg: `All fields are required`,
          });
      }
      const user = new User({ name, email, phone, password });
      await user.save();
      return res.status(200).json({
          state: true,
          msg: `User added successfully`,
          data: user,
      });
  } catch (err) {
    next(err);
  }
}

const addService = async (req, res, next) => {
  try {
    const { title,image , description, price, category } = req.body;
    const service = new Service({ title, description, image,price, category });
    await service.save();
    return res.status(200).json({
      state: true,
      msg: `Service added successfully`,
      data: service
    });

  } catch (err) {
    next(err);
  }
}

module.exports = {
  allUsers,
  allServices,
  allContacts,
  deleteUserById,
  deleteContactById,
  deleteServiceById,
  updateUserById,
  updateServiceById,
  getUserById,
  getServiceById,
  addUser,
  addService,
};
