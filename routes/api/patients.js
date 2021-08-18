const express = require("express");
const bcrypt = require('bcryptjs');
const Patient = require('../../models/Patient');
const jwt = require('jsonwebtoken');
const keys = require('../../config/keys');
const passport = require('passport');
const router = express.Router();
// const validateRegisterInput = require('../../validation/register');
const validateLoginInput = require('../../validation/login');

router.post('/new', (req, res) => {
	const { body } = req;
	const generatePassword = (length = 8) => Math.random().toString(20).substr(2, length);
	const digits = Math.floor(1000 + Math.random() * 9000);
	let randomUsername = `${body.fname}${body.lname}${digits}`;
	let oldPw = generatePassword();

	Patient.findOne({ email: body.email })
		.then(patient => {
			if (patient) {
				// Throw a 400 error if the email address already exists
				return res.status(400).json({ email: "A patient has already registered with this address" });
			}
		});

	const newPatient = new Patient({
		username: randomUsername,
		email: body.email,
		password: oldPw,
		role: 'patient',
		fname: body.fname,
		lname: body.lname,
		address: body.address,
		dateOfBirth: body.dateOfBirth,
		sex: body.sex,
		phone: body.phone,
		doctorId: body.doctorId,
	});
	
	newPatient.visits = new Object();

	bcrypt.genSalt(10, (err, salt) => {
		bcrypt.hash(newPatient.password, salt, (err, hash) => {
			if (err) throw err;
			newPatient.password = hash;
			newPatient.save()
				.then(patient => {
          User.findOne({ _id: patient.doctorId })
          .then(user => {
            if (user) {
              let patients = user.patients;
              patients[patient._id] = patient;
              User.updateOne({ _id: user._id }, {
                patients
              })
                .catch(err => res.json(err));
            } else {
              return res.status(404).json({ user: 'This doctor does not exist' });
            }
          })
          .catch(err => res.json(err))
          res.json(Object.assign({}, { pw: oldPw }, patient._doc))
        })
				.catch(err => res.json(err));
		});
	});
});

// router.patch('/update/:id', (req, res) => {
// 	const patient = Patient.findOne({ _id: req.params.id });
// 	const user = User.findOne({ _id: patient.doctorId });
// 	if (!patient) return res.status(404).json({ user: 'This patient does not exist' });
// 	if (!user) return res.status(404).json({ user: 'This doctor does not exist' });
// 	const patients = Object.assign({}, user.patients);
// 	console.log('patient', req.body.patient);
// 	console.log('body', req.body);
// 	patients[req.body.patient.id] = req.body.patient;

// 	User.updateOne({ _id: req.params.id }, {
// 		// add other user params
// 		patients
// 	})
// 		.then(user => res.json(user))
// 		.catch(err => console.log(err));
// });

module.exports = router;