const EXP = require('express');
const router = EXP.Router();
const ADB = require("../data/helpers/actionModel.js");

// Get action id's
router.get("/action:id",(req,res) => {
	ADB
		.get()
		.then(action => {
			res
				.status(200)
				.json(action)
		})
		.catch(err => {
			res.status(500)
			.json({message:"Error getting action id's"})
	 })
});

module.exports = router;
