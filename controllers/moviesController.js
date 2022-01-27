
// Here place all the route handlers
const fs = require("fs");

const jsonData = JSON.parse(fs.readFileSync(`${__dirname}/../dev-data/data.json`));  

// ======= param MW =======
// for verifying the ID
exports.checkID = (req, res, next, val) => {
    console.log(`Movie ID is: ${val}`);
    if (req.params.id * 1 > jsonData.length) {
        return res.status(404).json({
            status: 'fail',
            message: 'Invalid ID'
        });
    }
    next();
}

exports.checkBody = (req, res, next) => {
    console.log(req.body);
    if (!req.body.name) {
        return res.status(400).json({   // bad req
            status: 'fail',
            message: 'Missing name'
        });
    }
    next();
}

exports.getAllMovies = (req, res) => {
    res.status(200).json({
        status: 'success', 
        length: jsonData.length,
        data: {
            jsonData
        } 
    });
}

exports.createMovie = (req, res) => {
    const lastID = jsonData[jsonData.length-1].id;
    const newID = lastID + 1;
    // console.log(typeof lastID + "  " + typeof newID);

    const newObj = req.body;
    newObj.id = newID;    

    jsonData.push(newObj);
    // console.log(jsonData);

    fs.writeFile(`${__dirname}/dev-data/data.json`, JSON.stringify(jsonData), err => {
        console.log("written successfully");
    })

    res.status(201).json({
        status: 'success',
        message: "added new item"
    });
} 

// ********** 
// for route params
exports.getMovie = (req, res) => {
    const id = req.params.id*1;

    // id's varification will be handled by the "param MW"

    const foundItem = jsonData.find(el => el.id === id);

    res.status(200).json({
        status: 'success',
            foundItem
    });
}

exports.updateMovie = (req, res) => {
    const id = req.params.id*1;

    // id's varification will be handled by the "param MW"
    
    res.status(200).json({
        status: 'success',
        message: 'updated successfully'
    });
}

exports.deleteMovie = (req, res) => {
    const id = req.params.id*1;
   
    // id's varification will be handled by the "param MW"      
    
    res.status(204).json({
        status: 'success',
        message: 'deleted successfully'
    })
}













































