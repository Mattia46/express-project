let express = require('express');

let app = express();

app.get('/', function(req, res) {
    res.send('hello world');
})

var server = app.listen(4000, function(){
    console.log('Your server is running at port 4000');
});
