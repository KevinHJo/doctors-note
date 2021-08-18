const express = require("express");
const bcrypt = require('bcryptjs');
const Patient = require('../../models/Patient');
const jwt = require('jsonwebtoken');
const keys = require('../../config/keys');
const passport = require('passport');
const router = express.Router();
// const validateRegisterInput = require('../../validation/register');
const validateLoginInput = require('../../validation/login');

router.post('/register', (req, res) => {
	// const { errors, isValid } = validateRegisterInput(req.body)

	// if(!isValid) {
	// 	return res.status(400).json(errors)
	// }

    // Check to make sure nobody has already registered with a duplicate email
	Patient.findOne({ email: req.body.email })
		.then(patient => {
			if (patient) {
				// Throw a 400 error if the email address already exists
				return res.status(400).json({email: "A patient has already registered with this address"})
			}});
	
	Patient.findOne({ username: req.body.username })
		.then(patient => {
			if (patient) {
				// Throw a 400 error if the username already exists
				return res.status(400).json({username: "A patient has already registered with this username"})
			}});

	// Otherwise create a new user
	const newPatient = new Patient({
		username: req.body.username,
		email: req.body.email,
		password: req.body.password,
		fname: req.body.fname,
		lname: req.body.lname,
    address: req.body.address,
    dateOfBirth: req.body.dateOfBirth,
    sex: req.body.sex,
    phone: req.body.phone,
    email: req.body.email,
    doctorId: req.body.doctorId
	})

	bcrypt.genSalt(10, (err, salt) => {
		bcrypt.hash(newPatient.password, salt, (err, hash) => {
			if (err) throw err;
			newPatient.password = hash;
			newPatient.save()
				.then(patient => res.json(patient))
				.catch(err => console.log(err));
		})
	})
})

router.post('/new', (req, res) => {
  const { body } = req;
  const generateRandomString = (length=8)=>Math.random().toString(20).substr(2, length)
  let randomUsername = generateRandomString()
  while (User.findOne({username: randomUsername})) {
    randomUsername = generateRandomString();
  }
  const newPatient = new Patient({
		username: randomUsername,
		email: body.patient.email,
		password: 'password', // might need to hash this?
    role: 'patient',
		fname: body.patient.fname,
		lname: body.patient.lname,
    address: body.patient.address,
    dateOfBirth: body.patient.dateOfBirth,
    sex: body.patient.sex,
    phone: body.patient.phone,
    doctorId: body.patient.doctorId
	})

  newPatient.save()
    .then(patient => res.json(patient))
    .catch(err => console.log(err))
})

// router.post('/login', (req, res) => {
// 	const { errors, isValid } = validateLoginInput(req.body);

//   if (!isValid) {
//     return res.status(400).json(errors);
//   }

// 	const email = req.body.email;
// 	const password = req.body.password;

// 	User.findOne({email})
// 		.then(user => {
// 			if (!user) {
// 				return res.status(404).json({email: 'This user does not exist'});
// 			}

// 			bcrypt.compare(password, user.password)
// 				.then(isMatch => {
// 					if (isMatch) {
// 						const payload = {id: user.id, email: user.email}; // revisit this

// 						jwt.sign(
// 							payload,
// 							keys.secretOrKey,
// 							// Tell the key to expire in one hour
// 							{expiresIn: 3600},
// 							(err, token) => {
// 								res.json({
// 									success: true,
// 									token: 'Bearer ' + token
// 								});
// 							});
// 					} else {
// 						return res.status(400).json({password: 'Incorrect password'});
// 					}
// 				})
// 		})
// })

module.exports = router;