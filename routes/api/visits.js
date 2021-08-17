const express = require("express");
const Visit = require('../../models/Visit');
const router = express.Router();

router.post('/new', (req, res) => {
	const newVisit = new Visit({
		subjective: req.body.subjective,
		objective: req.body.objective,
		assessment: req.body.assessment,
		plan: req.body.plan
	})

  newVisit.save()
				.then(visit => res.json(visit))
				.catch(err => console.log(err));
});

router.post('/update', (req, res) => {
  const visitId = req.body.id;
	const subjective = req.body.subjective;
	const objective = req.body.objective;
  const assessment = req.body.assessment;
	const plan = req.body.plan;

	Visit.updateOne({ id: visitId }, {
    'subjective': subjective,
    'objective': objective,
    'assessment': assessment,
    'plan': plan
  })
    .then(visit => res.json(visit))
    .catch(err => console.log(err));
});

module.exports = router;