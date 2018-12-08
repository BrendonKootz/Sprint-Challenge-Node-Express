const EXP = require('express');
const router = EXP.Router();
const ADB = require("../data/helpers/actionModel.js");

// Get actions
router.get("/action",(req,res) => {
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

// Get those action id's
router.get("/action:id",(req,res) => {
	const { id } = req.params;
	ADB
		.get(id)
		.then(action => {
			res
				.status(200)
				.json(action)
		});
});

// Create a new action
router.post("/action",(req,res) => {
	ADB
		.insert(req.body)
		.then(actionData => {
			res
				.status(200)
				.json(actionData)
		})
		.catch(err => {
			res
				.status(500)
				.json({message : "Could not create action"})
		});
});

// update action 
router.put("/action:id",(req,res) => {
	const { id } = req.params;
	const actionUpdate = req.body;
	ADB
		.update(id, actionUpdate)
		.then(action => {
			res
				.status(200)
				.json({message : "Action updated"})
		})
		.catch(err => {
			res
				.status(500)
				.json({message : "Error updating action"})
		});
});

// destroy an action by id
router.delete("/action:id",(req,res) => {
	ADB
		.remove(req.parmas.id)
		.then(action => {
			res
				.status(200)
				.json({messsage : "Action destroyed"})
		});
});

module.exports = router;
