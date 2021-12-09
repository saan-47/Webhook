var express = require('express');
var router = express.Router();

/* GET home page. */
router.post('/', function (req, res, next) {
  console.log(req.body);
  var webhookResponse = {
    fulfillmentText: "hello world",
    fulfillmentMessages: [
      {
        text : {
          text: [
            "This is so deep inside",
            "This is so deep inside",
            "This is so deep inside"
          ]
        }
      }
    ],
    source: "webhookFunction",
    payload: {
      sampleKey: "SampleValue",
    },
    outputContexts: [],
    followupEventInput: {
      name: "call",
      parameters: {},
      languageCode: "en-US",
    },
    sessionEntityTypes: [],
  };
  return res.json(webhookResponse);
});
router.get('/', function (req, res, next) {
  return res.json("hello world")
});

module.exports = router;
