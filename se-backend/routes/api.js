const express = require("express");
const router = express.Router();
const { CheckAvailability } = require("../controllers/CheckAvailability");
const { Checkout } = require("../controllers/Checkout");
const { GetPnrStatus } = require("../controllers/GetPnrStatus");
const { GetTrainSchedule } = require("../controllers/GetTrainSchedule");

router.route("/checkavailability").post(CheckAvailability);

router.route("/checkout").post(Checkout);

router.route("/getpnrstatus").post(GetPnrStatus);

router.route("/gettrainschedule").post(GetTrainSchedule);

module.exports = router;
