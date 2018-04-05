const Email = require('../models/Email.js')
const express = require('express');

const router  = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', {savedEmail: undefined});
});

router.post('/sendEmail', (req, res, next) => {
  const { email } = req.body
  const newEmail = new Email({email: email})
  newEmail.save()
    .then((savedEmail) => {
      res.render('index', { savedEmail })
    })
    .catch(e => {console.log(e)})
})

module.exports = router;
