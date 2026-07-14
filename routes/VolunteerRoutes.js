const express = require("express");
const VolunteerModel = require("../models/VolunteerModel");

const router = express.Router();


// ADD VOLUNTEER

router.post("/add-volunteer", async (req, res) => {

    try {

        const volunteer = new VolunteerModel(req.body);

        await volunteer.save();

        res.json({
            status: "success",
            message: "Volunteer Added Successfully"
        });

    }

    catch (error) {

        res.json({
            status: "error",
            message: error.message
        });

    }

});


// VIEW ALL VOLUNTEERS

router.post("/view-volunteer", async (req, res) => {

    try {

        const volunteers = await VolunteerModel.find();

        res.json(volunteers);

    }

    catch (error) {

        res.json({
            status: "error",
            message: error.message
        });

    }

});

module.exports = router;