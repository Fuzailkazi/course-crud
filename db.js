const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = mongoose.ObjectId;

mongoose.connect(
  'mongodb+srv://mohdfuzailkazi14:1234567890@cluster0.mpqlw.mongodb.net/coursera-app'
);

const userSchema = new Schema({
  email: { type: String, unique: true },
  password: String,
  firstName: String,
  lastName: String,
});

const adminSchema = new Schema({
  email: { type: String, unique: true },
  password: String,
  firstName: String,
  lastName: String,
});

const courseSchema = new Schema({
  title: String,
  description: String,
  price: Number,
  imageUrl: String,
  creatorId: ObjectId,
});

const purchaseSchema = new Schema({
  userId: ObjectId,
  courseId: ObjectId,
});

// .model() is used to create a new collection
const userModal = mongoose.model('user', userSchema);
const adminModal = mongoose.model('admin', userSchema);
const courseModal = mongoose.model('course', userSchema);
const purchaseModal = mongoose.model('purchase', userSchema);

module.exports = {
  userModal,
  adminModal,
  courseModal,
  purchaseModal,
};
