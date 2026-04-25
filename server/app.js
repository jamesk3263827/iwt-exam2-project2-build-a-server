//Install the express and CORS libraries
//Import dotenv package and call config() function, which reads .env file and loads all secret values into process.env, making them available throughout your app. NOTE: no const needed as this never again needs to be referenced.

const express = require("express");
const cors = require("cors");
require("dotenv").config();

//Create the web server. Call express() and assign it to object app.

const app = express();

//app.use() is how you attach middleware in Express
//app.use(cors()) tells server to use CORS middleware on every incoming request, in essence allowing requests from other servers.
//app.use(express.json()) tells Express to parse incoming request bodies that are in JSON format. Any JSON sent in the request body is available as req.body.

app.use(cors());
app.use(express.json());

// Hello world test route
// This defines your first route. Breaking it down further:
// app.get means this route responds to GET requests (the kind your browser makes when you visit a URL)
// "/" is the path — this fires when someone visits the root of your server, i.e. http://localhost:3000/
// (req, res) => {} is a function that runs when the route is hit. req contains everything about the incoming request, and res is what you use to send a response back
// res.json(...) sends a JSON response back to whoever made the request — in this case just a simple message confirming the server is running

app.get("/", (req, res) => {
  res.json({ message: "Testing new server is running" });
});

//Set the port number the server listens on, meaning this file is looking for requests that come in through the port number you assign, in this case, 3000.
//It creates an object, PORT.
//The || means it will assign either the value to the left or the value to the right of ||.
//First it looks in your .env file where you would normally store this information.
//If it is not there, it uses 3000.

const PORT = process.env.PORT || 3000;

//app.list() activates the server and start listening at PORT, which was set up in the line above.
//The second argument, () is called a callback function. When the server is up and running, it posts this message inside terminal, so you know the server is running.

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});