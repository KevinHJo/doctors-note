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
            let visits = Object.assign({}, patient.visits);
            visits[visit._id] = visit;
            patient.visits = visits
            patient.save()
              .then(pat => {
                User.findOne({ _id: pat.doctorId })
                  .then(user => {
                    if (user) {
                      let patients = Object.assign({}, user.patients);
                      patients[patient._id] = pat;
                      user.patients = patients
                      user.save()
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

	Visit.findByIdAndUpdate(visitId, {
    subjective,
    objective,
    assessment,
    plan,
    patientId
  }, {new: true})
    .then(visit => {
      Patient.findOne({_id: patientId})
      .then(patient => {
        if (patient) {
          let visits = Object.assign({}, patient.visits)
          visits[visitId] = visit
          patient.visits = visits
          patient.save()
            .then(pat => {
              User.findOne({_id: pat.doctorId})
                .then(user => {
                  if (user) {
                    let patients = Object.assign({}, user.patients)
                    patients[pat._id] = pat
                    user.patients = patients
                    user.save()
                  }
                })
            })
        }
    })
      res.json(visit)
    })
    .catch(err => res.json(err));
});

router.delete('/delete/:id', (req, res) => {
  Visit.deleteOne({_id: req.body._id})
    .then(vis => {
      if (vis.deletedCount === 1) {
        Patient.findOne({_id: req.body.patientId})
          .then(patient => {
            if (patient) {
              let visits = Object.assign({}, patient.visits)
              delete visits[req.body._id]
              patient.visits = visits
              patient.save()
                .then(pat => {
                  User.findOne({_id: pat.doctorId})
                    .then(user => {
                      if (user) {
                        let patients = Object.assign({}, user.patients)
                        patients[pat._id] = pat
                        user.patients = patients
                        user.save()
                      }
                    })
                })
            }
        })
      }
    })
    .catch(err => res.json(err))
  res.json(req.body)
})

module.exports = router;
