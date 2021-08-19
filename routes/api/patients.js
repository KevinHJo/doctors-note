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

	const newPatient = new Patient({
		fname: body.fname,
		lname: body.lname,
		dateOfBirth: body.dateOfBirth,
		sex: body.sex,
		email: body.email,
		phone: body.phone,
		address: body.address,
		doctorId: body.doctorId,
		role: 'patient',
		username: randomUsername,
		password: oldPw,
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

router.post('/login', (req, res) => {
	const { errors, isValid } = validatePatientLoginInput(req.body);

	if (!isValid) {
		return res.status(400).json(errors);
	}

	const username = req.body.username;
	const password = req.body.password;

	Patient.findOne({ username: username })
		.then(patient => {
			if (!patient) {
				return res.status(404).json({ username: 'This patient does not exist' });
			}

			bcrypt.compare(password, patient.password)
				.then(isMatch => {
					if (isMatch) {
						const payload = { id: patient.id, username: patient.username, role: patient.role }; // revisit this

						jwt.sign(
							payload,
							keys.secretOrKey,
							// Tell the key to expire in one hour
							{ expiresIn: 3600 },
							(err, token) => {
								res.json({
									success: true,
									token: 'Bearer ' + token
								});
							});
					} else {
						return res.status(400).json({ password: 'Incorrect password' });
					}
				});
		});
});

module.exports = router;