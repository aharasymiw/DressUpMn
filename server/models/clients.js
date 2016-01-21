// Schema, dictates how clients are saved into mongo
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var clientSchema = new Schema(
  {
    clientName: String,
    clientAddress: String,
    clientCity: String,
    clientState: String
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
