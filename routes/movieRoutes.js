

const express = require("express");

const router = express.Router();

const movieContoller = require('./../controllers/moviesController');

// using the param MW
router.param('id', movieContoller.checkID);

// add a param MW which will check that the ID is valid or not
// router.param('')

// router for movies
router
    .route('/')
    .get(movieContoller.getAllMovies)
    .post(movieContoller.checkBody, movieContoller.createMovie);

// router for route param 
router
    .route('/:id')
    .get(movieContoller.getMovie)
    .patch(movieContoller.updateMovie)
    .delete(movieContoller.deleteMovie);   

// export the router  
module.exports = router;































