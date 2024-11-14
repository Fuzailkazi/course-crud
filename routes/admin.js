const { Router } = require('express');
const adminRouter = Router();
const { adminModel } = require('../db');
const jwt = require('jsonwebtoken');
const { JWT_ADMIN_PASSWORD } = require('../config');

adminRouter.post('/signup', async function (req, res) {
  const { email, password, firstName, lastName } = req.body;

  try {
    await adminModel.create({
      email: email,
      password: password,
      firstName: firstName,
      lastName: lastName,
    });
  } catch (error) {
    console.log(error);
  }
  res.json({
    message: 'signup endpoint',
  });
});

adminRouter.post('/signin', async function (req, res) {
  const { email, password } = req.body;

  const admin = await adminModel.findOne({
    email: email,
    password: password,
  });

  if (admin) {
    const token = jwt.sign(
      {
        id: admin._id,
      },
      JWT_ADMIN_PASSWORD
    );

    res.json({
      token: token,
    });
  } else {
    res.status(403).json({
      message: 'Incorrect Credentials',
    });
  }
});

adminRouter.post('/course', function (req, res) {
  const adminId = req.userId;

  const {title, description, }

  res.json({
    message: 'signup endpoint',
  });
});

adminRouter.put('/course', function (req, res) {
  res.json({
    message: 'signup endpoint',
  });
});

adminRouter.get('/course', function (req, res) {
  res.json({
    message: 'signup endpoint',
  });
});

adminRouter.get('/course/bulk', function (req, res) {
  res.json({
    message: 'signup endpoint',
  });
});

module.exports = {
  adminRouter: adminRouter,
};
