const express = require('express');
const router = express.Router();

//@rout     GET api/Auth
//@desc     Test Rout
//@access   Public
router.get('/', (req, res) => res.send('Auth Roure'));

module.exports = router;
