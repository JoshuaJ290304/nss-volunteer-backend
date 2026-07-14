const mongoose = require("mongoose");

const VolunteerSchema = new mongoose.Schema({

    volunteerId:String,
    volunteerName:String,
    gender:String,
    department:String,
    semester:String,
    phone:String,
    email:String,
    bloodGroup:String,
    activityName:String,
    activityDate:String,
    hoursCompleted:String,
    coordinatorName:String,
    certificateStatus:String

});

module.exports = mongoose.model("volunteers",VolunteerSchema);