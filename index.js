//게시판은 server - express, front - ejs(views폴더 경로.), db- mongodb로 진행(추후에 ec2연결하면 admin으로 연결을 변경해야 함.)
//설치 패키지.
// 1. npm init -y // package.json

// 2. npm install express // express

// 3. npm install ejs // ejs 

// 4. npm install mongoose // mongodb

//localhost 3000에 파일들을 연결 및 사용 가능하게 하는 세팅. express를 이용, port 연결 3000으로 세팅. 
const express = require('express')
const app = express()
const port = 3000

//mongoDB를 이용하기 위한 schemas와의 연결
const connect = require('./schemas')
connect();

//파일 구성할 때 routers > board에 연결하는 코드.
const boardRouter = require("./routers/board");

//body
app.use(express.json())
app.use(express.urlencoded({extended:false}))

//router 
app.use("/api", [boardRouter]);

// ejs setting 
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs')

app.get('/', (req, res)=> {
    res.render('main')
})

app.get('/search', (req, res)=> {
    res.render('search')
})

app.get('/detail', (req, res)=>{
    res.render('detail')
})


app.listen(port, ()=>{
    console.log(`listening at http://localhost:${port}`)
})