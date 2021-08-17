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

router.patch('/update/:id', (req, res) => {
  const visitId = req.params.id;
	const subjective = req.body.subjective;
	const objective = req.body.objective;
  const assessment = req.body.assessment;
	const plan = req.body.plan;

	Visit.updateOne({_id: visitId }, {
    subjective,
    objective,
    assessment,
    plan
  })
    .then(visit => res.json(visit))
    .catch(err => console.log(err));
});

module.exports = router;