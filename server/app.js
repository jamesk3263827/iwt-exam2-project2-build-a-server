const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());
app.use(express.static(__dirname + '/client'));

app.get("/api/img", (req, res) => {
  const category = req.query.category;

    switch (category) {
        case 'ireland':
	          res.json({"message": [
		          "img/ireland/ireland-01.jpg",
		          "img/ireland/ireland-02.jpg",
		          "img/ireland/ireland-03.jpg"
	            ],
              
              "status": "success"});
            break;

        case 'southwest-us':
	          res.json({"message": [
		          "img/southwest-us/southwest-us-01.jpg",
		          "img/southwest-us/southwest-us-02.jpg",
		          "img/southwest-us/southwest-us-03.jpg"
	            ],
              
              "status": "success"});
            break;

        case 'newyorkcity':
	          res.json({"message": [
		          "img/newyorkcity/newyorkcity-01.jpg",
		          "img/newyorkcity/newyorkcity-02.jpg",
		          "img/newyorkcity/newyorkcity-03.jpg"
	            ],
              
              "status": "success"});
            break;

        default:
            return res.status(400).json({ error: 'Unknown category' });
    }

});

app.listen(3000, () => console.log(`Server running on port 3000`));