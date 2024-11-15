const { Router } = require('express');
const courseRouter = Router();

courseRouter.post('/purchases', function (req, res) {
  res.json({
    message: 'course purchase endpoint',
  });
});

courseRouter.get('/preview', function (req, res) {
  res.json({
    message: 'course preview endpoint',
  });
});

module.exports = {
  courseRouter: courseRouter,
};
