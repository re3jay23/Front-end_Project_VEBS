var express = require('express');
var mysql = require('mysql');
var app = express();
var con = mysql.createConnection({
  host:"localhost",
  user:"root",
  password:"",
  database:"sampleDB"
});
con.connect(function(err){
  //Callback
  if(!!err){
    console.log('Error');
  }else{
    console.log("connected");
  }

});

app.get('/',function(req, res){
  con.query("SELECT * FROM mySampleTable",function(err, rows, fields){
    if(!!err){
      console.log('Error in query');
    }
    else{
      console.log('Successful');
      console.log(rows);
    }
  })
});
app.listen(1337);
