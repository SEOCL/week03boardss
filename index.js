//게시판은 server - express, front - ejs(views폴더 경로.), db- mongodb로 진행(추후에 ec2연결하면 admin으로 연결을 변경해야 함.)
//설치 패키지.
// 1. npm init -y // package.json

// 2. npm install express // express

// 3. npm install ejs // ejs >> front의 보이기를 담당.

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
//자바스크립트에서 데이터를 주고받고 읽을 때는 객체 형태를 띄고, 실제로 데이터를 주고 받을 때도 객체 형태를 선호한다.
//body-parser 모듈을 사용할 때, 해당 모듈을 사용하고자 한다면 urlncoded 옵션을 사용해야 한다.
//urlencoded({extended : })는 extended 옵션인데 true일 경우, 객체 형태로 전달된 데이터내에서 또다른 중첩된 객체를 허용한다는 뜻이며, 
//false인 경우에는 허용하지 않는다는 의미다.(따라서 여러 과정을 거쳐 파싱을 거쳐야 하는 것. JSON을 사용하는 것처럼)


//router 
app.use("/api", [boardRouter]);

// ejs setting 
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs')
//__dirname 은 현재 실행하는 파일의 절대 경로를 말해주는 역할을 한다.
// views 폴더는 front를 담당하는 파일이 있다.
//app.set('view engine', 'ejs') 은 ejs를 사용하기 위해서 express의 view engine에 ejs를 set하는 코드다.

app.get('/', (req, res)=> {
    res.render('main')
})
//ejs 파일을 사용하기 위해서 res.render 함수를 사용해야 함. 첫 번째 파라미터로 ejs의 이름+ 두 번째 파라미터로 ejs에서 사용될 object를 전달한다.
//res.render 함수는 ejs를 /views 폴더에서 찾기 때문에 views 폴더의 이름은 변경되면 안된다.
//각 폴더에 front와 ajax를 사용한다.

app.get('/search', (req, res)=> {
    res.render('search')
})

app.get('/detail', (req, res)=>{
    res.render('detail')
})


app.listen(port, ()=>{
    console.log(`listening at http://localhost:${port}`)
})
// const express = require('express')
// const app = express()
// const port = 3000

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

// app.listen(port, () => {
//   console.log(`Example app listening at http://localhost:${port}`)
// })
//API서버를 만들 때의 함수. 포트를 설정하고, 실행할 함수를 정의할 수 있다.
// 로컬 서버 실행이 완료되면 위 문장을 출력한다.