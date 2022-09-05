const models = require('../models');
const Validator = require('fastest-validator');
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');

function save(req, res) {
  // console.log(req.body);

  models.user
    .findOne({ where: { email: req.body.email } })
    .then((result) => {
      if (result) {
        res.status(409).json({
          message: 'Email already exists',
          error: error,
        });
      } else {
        bcryptjs.genSalt(10, function (err, salt) {
          bcryptjs.hash(req.body.password, salt, (err, hash) => {
            const user = {
              first_name: req.body.first_name,
              last_name: req.body.last_name,
              password: hash,
              email: req.body.email,
              date_of_birth: req.body.date_of_birth,
              sex: req.body.sex,
              phone_no: req.body.phone_no,
              city: req.body.city,
              sub_city: req.body.sub_city,
              wereda: req.body.wereda,
              house_no: req.body.house_no,
              role_type: req.body.role_type,
              activation: req.body.activation
            };

            //validate the user
            const schema = {
                first_name: {type:"string"},
                last_name: {type:"string"},
                password: {type:"string"},
                email: {type:"string"},
                date_of_birth: {type:"date"},
                sex: {type:"string"},
                phone_no: {type: "string"},
                city: {type:"string"},
                sub_city: {type:"string"},
                wereda: {type:"string"},
                house_no: {type:"string"},
                role_type:{type:"string"},
                activation:{type:"boolean"}
            
            }
        

            //to create a user
            models.user
              .create(user)
              .then((result) => {
                res.status(201).json({
                  message: 'User created successfully',
                  post: result,
                });
              })
              .catch((error) => {
                res.status(500).json({
                  message: 'Something went wrong',
                  error: error,
                });
              });
          });
        });
      }
    })
    .catch((error) => {});
}

//to get a single user
function show(req, res) {
  const id = req.params.id;

  models.user
    .findByPk(id)
    .then((result) => {
      if (result) {
        res.status(200).json({
          message: 'User found successfully',
          post: result,
        });
      } else {
        res.status(404).json({
          message: 'User not found',
        });
      }
    })
    .catch((error) => {
      res.status(500).json({
        message: 'Something went wrong',
        error: error,
      });
    });
}

//to get all users
function index(req, res) {
  models.user
    .findAll()
    .then((result) => {
      res.status(200).json({
        message: 'Users found successfully',
        post: result,
      });
    })
    .catch((error) => {
      res.status(500).json({
        message: 'Something went wrong',
        error: error,
      });
    });
}

//to update a user
function update(req, res) {
  const id = req.params.id;
  const updatedUser = {
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    user_name: req.body.user_name,
    password: req.body.password,
    email: req.body.email,
    date_of_birth: req.body.date_of_birth,
    sex: req.body.sex,
    phone_no: req.body.phone_no,
    city: req.body.city,
    wereda: req.body.wereda,
    house_no: req.body.house_no,
    role_type: req.body.role_type,
    activation: req.body.activation
  };

  const userId = req.params.id;

  models.user
    .update(updatedUser, { where: { id: id } })
    .then((result) => {
      res.status(200).json({
        message: 'User updated successfully',
        post: updatedUser,
      });
    })
    .catch((error) => {
      res.status(500).json({
        message: 'Something went wrong',
        error: error,
      });
    });
}

//delete user
function destroy(req, res) {
  const id = req.params.id;
  models.user
    .destroy({ where: { id: id } })
    .then((result) => {
      res.status(200).json({
        message: 'User deleted successfully',
      });
    })
    .catch((error) => {
      res.status(500).json({
        message: 'Something went wrong',
        error: error,
      });
    });
}

//log in
function login(req, res) {
  models.user
    .findOne({ where: { email: req.body.email } })
    .then((user) => {
      if (user === null) {
        res.status(401).json({
          message: 'Invalid Credentials',
        });
      } else {
        bcryptjs.compare(
          req.body.password,
          user.password,
          function (err, result) {
            if (result) {
              const token = jwt.sign(
                {
                  email: user.email,
                  userId: user.id,
                },
                'secret',
                function (err, token) {
                  res.status(200).json({
                    message: 'Authentication Successful',
                    token: token,
                    userId: user.id,
                    role_type: user.role_type,
                  });
                }
              );
            } else {
              res.status(401).json({
                message: 'Invalid Credentials',
                token: token,
              });
            }
          }
        );
      }
    })
    .catch((error) => {});
}

module.exports = {
  save: save,
  show: show,
  index: index,
  update: update,
  destroy: destroy,
  login: login,
};
