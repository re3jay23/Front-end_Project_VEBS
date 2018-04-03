var fs = require('fs');
var url = require('url');

function renderHTML(request,response){
  fs.readFile(request,null,(error,data)=>{
    if(error){
      response.writeHead(404);
      response.write('File not found');
    }
    else{
      response.write(data);
    }
    response.end();
  })
}

var handleRequest = function(req,res){
  res.writeHead(200,{'Content-Type':'text/html'});
  var path = url.parse(req.url).pathname;
  console.log('path is:', path);
  switch(path){
    case '/':
      renderHTML('./trialpage.html',res);
      break;
    case '/2':
      renderHTML('./trialpage2.html',res);
      break;
    default:
      res.writeHead(404);
      res.write('Route not defined.');
      res.end();
  }
};

module.exports={handleRequest};
