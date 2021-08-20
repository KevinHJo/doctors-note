const express = require("express");
const bcrypt = require('bcryptjs');
const Patient = require('../../models/Patient');
const jwt = require('jsonwebtoken');
const keys = require('../../config/keys');
const passport = require('passport');
const router = express.Router();
// const validateRegisterInput = require('../../validation/register');
const validatePatientLoginInput = require('../../validation/patient_login');

router.get('/:patientId', (req, res) => {
	Patient.findOne({_id: req.params.patientId})
		.then(patient => res.json(patient))
		.catch(err => res.json(err));
})

router.get('/:doctorId/patients', (req, res) => {
	Patient.find({doctorId: req.params.doctorId})
		.then(patients => res.json(patients))
		.catch(err => res.json(err));
})

router.patch('/update/:patientId', (req, res) => {
	const patientId = req.params.patientId
	const fname = req.body.fname;
	const lname = req.body.lname;
	const username = req.body.username;
	const password = req.body.password;
	const role = req.body.role;
	const address = req.body.address;
	const dateOfBirth = req.body.dateOfBirth;
	const sex = req.body.sex;
	const phone = req.body.phone;
	const email = req.body.email;
	const doctorId = req.body.doctorId;
	const diagnoses = req.body.diagnoses;
	const medications = req.body.medications;
	const allergies = req.body.allergies;

	Patient.findByIdAndUpdate({_id: patientId }, {
    fname,
		lname,
		username,
		password,
		role,
		address,
		dateOfBirth,
		sex,
		phone,
		email,
		doctorId,
		diagnoses,
		medications,
		allergies
  }, { new: true })
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
			
			res.json(patient)
		})
    .catch(err => res.json(err));
});

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
    diagnoses: body.diagnoses || [],
    medications: body.medications || [],
    allergies: body.allergies || [],
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
						const payload = { 
							id: patient.id, 
							username: patient.username,
							fname: patient.fname,
							lname: patient.lname,
							role: patient.role,
							dateOfBirth: patient.dateOfBirth,
							sex: patient.sex,
							email: patient.email,
							phone: patient.phone,
							address: patient.address,
							doctorId: patient.doctorId,
							diagnoses: patient.diagnoses,
							medications: patient.medications,
							allergies: patient.allergies,
							visits: patient.visits,
						};

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