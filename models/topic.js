var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//modelo comments
var CommentsSchema = Schema({
    content : String,
    date : {type:Date, default : Date.now()},
    user : {type: Schema.ObjectID, ref: 'User'}
});

var Comment = mongoose.model('Comments',CommentsSchema);

//modelo topic
var TopicSchema = Schema({
   title : String,
   content : String,
   code : String,
   lang : String,
   date : {type:Date, default : Date.now()},
   user : {type: Schema.ObjectID, ref: 'User'},
   comments : [CommentsSchema]
});

module.exports = mongoose.model('Topic', TopicSchema);