var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var writeSchema = new Schema({
  title: {
    type:String
  },
  body: {
    type:String
  }
});

var write = mongoose.model('Write', writeSchema);
module.exports = write;