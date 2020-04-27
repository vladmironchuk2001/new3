const express = require('express');
const router = express.Router();

const util = require('util')
const chance = require('chance')
const faker = require('faker')
 

/* GET home page. */
router.get('/', (req, res) => {
	res.render('index', 
	  	{ team:  'FP', 
	  	  year: 2020,
	  	  version: "0.2.3"
	  	});

  
});

module.exports = router;
