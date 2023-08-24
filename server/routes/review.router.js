const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');


// POST a new order
router.post('/', (req, res) => {
    let review = req.body;
    let queryText = `INSERT INTO "reviews" ("feeling", "understanding", "supported", "comments") 
    VALUES ($1, $2, $3, $4);`;
    pool.query(queryText, [review.feeling, review.understanding, review.supported, review.comments])
        .then(result => {
            res.sendStatus(200);
        }).catch((error) => {
            console.log('Error ', error);
            res.sendStatus(500);
        })
});


module.exports = router;