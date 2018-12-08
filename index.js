const EXP = require('express');
server = EXP();
console.log("Starting up that server...");
const PORT = 4000;

// Send some data
server.get('/',(req,res) => {
	res.send("Server is live!!!");
});

// Get Id's
server.get('/api:id',(req,res) => {
	const id = req.params.id;
	
});

// Listen
server.listen(PORT, () => {
	console.log("Listening on port:\t",PORT);
});
