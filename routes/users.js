var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json([
    {id: 1, userName: 'Micheal'},
    {id: 2, userName: 'caitlynn'}
  ]);
});

module.exports = router;
