const express = require("express");
const bodyParser = require("body-parser");


const db = require("./db");


const app = express();


app.use(bodyParser.json());

db.pool.query("CREATE TABLE LISTS11 (ID INTEGER AUTO_INCREMENT, VALUE TEXT, PRIMARY KEY (ID))", (err, results, field) => {
    


    console.log("result", results);
    console.log("err", err);
    console.log("field", field);
    console.log("field", field);
});


// DB lists 테이블에 있는 모든데이터 프론트 서버에 보내주기
app.get("/api/values", function(req, res){
    db.pool.query("SELECT * FROM LISTS", (err, results, field) => {
        if(err)
            return res.status(500).send(err);
        else
            return res.json(results);
    });
});


app.post("/api/value", function(req, res, next){
    db.pool.query(`INSERT INTO LISTS (VALUE) VALUES ("${req.body.value}")`, (err, results, field) => {
        if(err)
            return res.status(500).send(err);
        else
            return res.json({success: true, VALUE: req.body.value, aaa : "test11122"});
    });
});



app.listen(5000, ()=>{
    console.log("어플리케이션이 5000번 포트에서 시작되었습니다.");
});

