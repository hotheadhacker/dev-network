const express = require('express');
const router = express.Router();

//@rout     GET api/Post
//@desc     Test Rout
//@access   Public
router.get('/', (req, res) => res.send('Post Roure'));

module.exports = router;
