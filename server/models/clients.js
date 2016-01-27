// Schema, dictates how clients are saved into mongo
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var clientSchema = new Schema(
  {
    clientFirstName: String,
    clientLastName: String,
    clientStreetL1: String,
    clientStreetL2: String,
    clientCity: String,
    clientState: String,
    clientZip: Number,
    clientHomePh: Number,
    clientCellPh: Number,
    clientEmail: String,
    altContactName: String,
    altContactPh: Number,
    altContactRelationship: String,
    clientAge: Number,
    clientHeight: String,
    clientTopSize: String,
    clientBottomSize: String,
    clientShoeSize: String,
    clientRestrictions: String,
    interviewStartDate: Date,
    employementStartDate: Date,
    company: String,
    jobTitle: String,
    schedulingRestrictions: String






    /*    clientZip: ,
        clientAge: ,
        clientTopSize: ,
        clientBottomSize: ,
        clientShoeSize: ,
        clientPrimaryPhone: ,
        clientSecondaryPhone: ,
        clientEmail: ,
        alternateName: ,
        alternatePhone: ,
        height: ,
        interviewDate: ,
        employmentDate: ,
        hiringCompany: ,
        client: ,
        client: ,
        client: ,
        client: ,
        client:
*/
  }
);

module.exports = mongoose.model('Client', clientSchema);

/* Cool things you can do with Schemas
{
  username: {type:String, required: true, index: {unique:true}}
  lastlogin: {type: Date, default: Date.now}
}
*/
