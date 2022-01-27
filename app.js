
const { json } = require("body-parser");
const express = require("express");
const fs = require("fs");

const app = express();

app.use(express.json());
 
// requiring the router
const moviesRouter = require('./routes/movieRoutes');
// console.log(moviesRouter); 
app.use('/api/v1/movies', moviesRouter);

const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
 
// module.exports = app;





