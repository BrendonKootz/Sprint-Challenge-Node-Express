const EXP = require('express');
const server = EXP();
const projectDB = require('./data/helpers/projectModel');
const actionDB = require('./data/helpers/actionModel');
const projectRouter = require('./routers/projectRouter');
const actionRouter = require('./routers/actionRouter');


console.log("Starting up that server...");
const PORT = 4000;
server.get('/',(req,res) => {
	res
		.status(200)
		.send("Server is live!!!")
});


server.use('/routers',actionRouter);

// Listen
server.listen(PORT, () => {
	console.log("Listening on port:\t",PORT);
});
