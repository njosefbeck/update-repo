const express = require('express');
const router = express.Router();
const c = require('./controllers');

router.get('/', c.send404);
router.get('/github', c.send404);

router.post('/github/:repo',
  c.isFromGitHub,
  c.isFromMe,
  c.updateRepo
);

module.exports = router;