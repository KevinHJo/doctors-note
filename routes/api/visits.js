const express = require("express");
const Visit = require('../../models/Visit');
const router = express.Router();

router.get('/:patientId', (req, res) => {
  Visit.find({ patientId: req.params.patientId })
    .then(visits => res.json(visits))
    .catch(err => res.json(err));
})

router.get('/patients/:visitId', (req, res) => {
  Visit.findOne({ _id: req.params.visitId })
    .then(visit => res.json(visit))
    .catch(err => res.json(err));
})

router.post('/new', (req, res) => {
	const newVisit = new Visit({
		subjective: req.body.subjective,
		objective: req.body.objective,
		assessment: req.body.assessment,
		plan: req.body.plan,
    patientId: req.body.patientId
    
	})

  newVisit.save()
				.then(visit => {
          Patient.findOne({_id: visit.patientId })
          .then(patient => {
              if (patient) {
                let visits = patient.visits;
                visits[visit._id] = visit;
                Patient.findByIdAndUpdate(patient._id, { visits }, { new: true, useFindAndModify: false })
                  .then(patient => {
                    User.findOne({ _id: patient.doctorId })
                      .then(user => {
                        if (user) {
                          let patients = Object.assign({}, user.patients);
                          patients[patient._id] = patient;
                          User.findByIdAndUpdate(user._id, { patients: {} }, { new: true })
                            .then(res2 => User.findByIdAndUpdate(res2._id, { patients: patients }, { new: true } ))
                        } else {
                          return res.status(404).json({user: 'This doctor does not exist'})
                        }
                      })
                      .catch(err => res.json(err));
                  })
                  .catch(err => res.json(err));
              } else {
                return res.status(404).json({patient: 'This patient does not exist' });
              }
            })
            .catch(err => res.json(err)); //THROWING WARNING (FIX LATER)
          res.json(visit)
        })
				.catch(err => res.json(err));
});

router.patch('/update/:id', (req, res) => {
  const visitId = req.params.id;
	const subjective = req.body.subjective;
	const objective = req.body.objective;
  const assessment = req.body.assessment;
	const plan = req.body.plan;
  const patientId = req.body.patientId;

	Visit.updateOne({_id: visitId }, {
    subjective,
    objective,
    assessment,
    plan,
    patientId
  })
    .then(visit => res.json(visit))
    .catch(err => res.json(err));
});

module.exports = router;