let http = require( 'http' ),
express = require('express'),
bodyParser = require("body-parser"),
app = express(),
server = http.createServer(app),
jsonParse = bodyParser.json(),
arr = ['qwe','123']

app.use( express.static( __dirname + '/dist' ) );
app.get( '/', function ( request, response ) { 
response.redirect( '/' );
}); 
app.post('/login',jsonParse, function( request,response){
      let str = request.body.name + request.body.pass
      let login = request.body.name,
            pass = request.body.pass
      console.log(arr ,str)
      setTimeout(()=>{
            if(login==arr[0]&&pass==arr[1])response.json(JSON.stringify({answer:true}))
                  else response.json(JSON.stringify({answer:false}))
      },1500)

})
let port = process.env.PORT || 5000;
server.listen(port);
console.log('Express-сервер прослушивает порт %d в режиме %s',
      server.address().port, app.settings.env);
