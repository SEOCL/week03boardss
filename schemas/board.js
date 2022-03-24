//schemas>board.js를 생성
// board.js에 역할은 mongodb에 table및 column을 만드는 역할을 함으로
//  name, password, title, date, memo colomn을 생성하고 boardId에 역할은 내용을 추가하거나 선택할 때 또는 
// 상세페이지 이동할 때 boardId를 가져와서 사용할 것임으로 required: true, unique: true로 진행해서 중복되지 않게 한다. 

const mongoose = require("mongoose");

const {Schema} = mongoose;
const boardSchema = new Schema({
    boardId:{
        type : Number,
        required : true,
        unique : true
    },
    title : {
        type: String, 
    },
    date : {
        type: Number
    },
    memo : {
        type: String
    },
    name :{
        type: String,
    },
    password : {
        type: String,
    },
    date : {
        type: Date
    }
})

module.exports = mongoose.model("Boards", boardSchema)