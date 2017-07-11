var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    var deviceAgent = req.headers["user-agent"].toLowerCase();
    var agentID = deviceAgent.match(/(iphone|ipod|ipad|android)/);
    var platform="pc";
    if(agentID){
      platform="mobile"
    }
    var vendorJs="/pc/dist/bundle-vendor.js";
    var mainJs="/pc/dist/bundle-app.js";
    var mainCss="/pc/dist/bundle-app.css";
    if(platform==='mobile'){

    }
  res.render('index', { title: 'huo',"platform":platform ,"vendorJs":vendorJs,"mainJs":mainJs,"mainCss":mainCss});
});

module.exports = router;
