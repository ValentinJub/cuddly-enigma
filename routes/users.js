var express = require('express')
var router = express.Router()

// simple logger for this router's requests
// all requests to this router will first hit this middleware
router.get('/', (req, res, next) => {
  console.log('%s %s %s', req.method, req.url, req.path)
  res.render('users/index');
  next();
})

// this will only be invoked if the path starts with /bar from the mount point (/foo)
router.get('/new', function (req, res, next) {
  // ... maybe some additional /bar logging ...
  res.render('users/new');
  next();
})

router.post('/', (req, res) => {
  res.send(("Created"));
})

module.exports = router
