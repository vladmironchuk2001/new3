const express = require('express');
const router = express.Router();

const jsf = require('json-schema-faker');
const util = require('util')
const chance = require('chance')
const faker = require('faker')
jsf.extend('chance', () => new chance.Chance());
jsf.extend('faker', () => faker);

var recentDays = 5;

var schema = {
"type": "array",
"minItems": 20,
"maxItems": 40,
"items": {
"type": "object",
"properties": {
"name": {
"type": "string",
"faker": "name.findName"
},
"date": {
"type": "string",
"faker": "date.recent"
},
"rank" : {
"type": "integer",
"minimum": 6,
"maximum": 10
},
"part": {
"type": "string",
"pattern": "Code | Design | Idea"
},
"email": {
"type": "string",
"faker": "internet.email"
},
"feed": {
"type": "string",
"pattern": "Fine |Super | Amaizing | It is very useful | Try to fix it |"
}
},
"required": [
"name",
"date",
"rank",
"part",
"email",
"feed"
]
}
};

/* GET home page. */
router.get('/', (req, res) => {

jsf.resolve(schema).then(sample => {
console.log(util.inspect(sample,
{showHidden: false, depth: null}));

res.render('feedback',
{ opinions: sample });
});


});

module.exports = router;