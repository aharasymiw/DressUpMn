// Schema, dictates how clients are saved into mongo
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var clientSchema = new Schema(
  {
   clientFirstName: string,
   clientLastName: string,
clientStreetL1: string,
clientStreetL1: string,
      clientCity: string,
      clientState: string,
      clientZip: number,
      clientHomePh: number,
      clientCellPh: number,
      clientEmail: string,
      altContactName: string ,
      altContactPh: number,
      altContactRelationship: string,
      clientAge: number,
      clientHeight: string,
      clientTopSize: string,
      clientBottomSize: string,
      clientShoeSize: string,
      clientRestrictions: string,
      interviewStartDate: date,
      employementStartDate: date,
      company: string,
      jobTitle: string,
      schedulingRestrictions: string

  }
);

module.exports = mongoose.model('Client', clientSchema);

/* Cool things you can do with Schemas
{
  username: {type:String, required: true, index: {unique:true}}
  lastlogin: {type: Date, default: Date.now}
}
*/
