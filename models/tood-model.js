const mongoose = require('mongoose');

const TodoSchema = mongoose.Schema({
    data:{
        type:String,
        require:true
    },
    done:{
      type:Boolean,
      default:false,
    },
    createdAt:{
        type:Date,
        default:Date.now,
    }
})

const TodoModel = mongoose.model("todo",TodoSchema);
module.exports=TodoModel;