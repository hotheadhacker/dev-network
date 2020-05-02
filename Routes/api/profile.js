const express = require('express');
const router = express.Router();

//@rout     GET api/Profile
//@desc     Test Rout
//@access   Public
router.get('/', (req, res) => res.send('Profile Roure'));

module.exports = router;
