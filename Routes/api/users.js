const express = require('express');
const router = express.Router();

//@rout     GET api/users
//@desc     Test Rout
//@access   Public
router.get('/', (req, res) => res.send('User Roure'));

module.exports = router;
