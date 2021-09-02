const express = require("express");
const Appointment = require('../../models/Appointment');
const router = express.Router();

router.post('/new', (req, res) => {
	const newAppointment = new Appointment({
		doctorId: req.body.doctorId,
		patientId: req.body.patientId,
		date: new Date(req.body.date),
		purpose: req.body.purpose
	})

  newAppointment.save()
    .then(appointment => res.json(appointment))
    .catch(err => res.json(err));
})

router.get('/:doctorId', (req, res) => {
	Appointment.find({doctorId: req.params.doctorId})
		.then(appointments => res.json(appointments))
		.catch(err => res.json(err))
})

router.get('/patient/:patientId', (req, res) => {
	Appointment.find({patientId: req.params.patientId})
		.then(appointments => res.json(appointments))
		.catch(err => res.json(err))
})

router.delete('/:appointmentId', (req, res) => {
	Appointment.deleteOne({_id: req.params.appointmentId})
		.then(appointment => res.json(appointment))
		.catch(err => res.json(err))
})

router.patch('/:appointmentId', (req, res) => {
	const data = {
		doctorId: req.body.doctorId,
		patientId: req.body.patientId,
		date: new Date(req.body.date),
		purpose: req.body.purpose
	}

	Appointment.findByIdAndUpdate(req.params.appointmentId, data, {new: true})
		.then(appointment => res.json(appointment))
		.catch(err => res.json(err))
})

module.exports = router;