const EXP = require('express');
const router = EXP.Router();
const PDB = require("../data/helpers/projectModel");

// get projects
router.get('/project',(req,res) => {
	PDB
		.get()
		.then(project => {
			res
				.status(200)
				.json(project)
		})
		.catch(err =>
			res
				.status(500)
				.json({message:"Error with project get"})
		);
});

// get project id
router.get('/project:id',(req,res) => {
	const { id } = req.params;
	PDB
		.get(id)
		.then(project => {
			res
				.status(200)
				.json(project)
		});
});

// create project
router.post('/project',(req,res) => {
	PDB
		.insert(req.body)
		.then(projectData => {
			res
				.status(200)
				.json(projectData)
		})
		.catch(err => {
			res
				.status(500)
				.json({message : "Error creating project"})
		});
});

// update by id
router.put('/project:id',(req,res) => {
	const { id } = req.params;
	const projectUpdate = req.body;
	PDB
		.update(id, projectUpdate)
		.then(project => {
			res
				.status(200)
				.json({message : "Project updated"})
		})
		.catch(err => {
			res
				.status(500)
				.json({message : "Project failed to update"})
		});
});

// destroy a project from existance
router.delete('/project:id',(req,res) => {
	PDB
		.remove(req.params.id)
		.then(project => {
			res
				.status(200)
				.json({message : "Project destroyed"})
		});
});

module.exports = router;

