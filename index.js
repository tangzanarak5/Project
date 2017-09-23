var app = require('express')();

var users = require('./users');

var bodyParser = require('body-parser');

var port = process.env.PORT || 7777;

// parse application/json
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

let test = [{
  name: 'tang',
  position: 'beginer'
}];

let tang = [];

app.get('/', function (req, res) {
    res.send('<h1>Hello Node.js</h1>');
});

app.get('/index', function (req, res) {
    res.send('<h1>This is index page</h1>');
});

app.get('/test', function (req, res) {
    tang = users.findAll();
    //res.send(tang);
    res.send(users.findAll());
});

app.get('/user', function (req, res) {
    res.json(users.findAll());
});

app.get('/user/:id', function (req, res) {
    var id = req.params.id;
    res.json(users.findById(id));
});

app.post('/newuser', function (req, res) {
    var json = req.body;
    tang.push(json);
    res.send('Add new ' + json.name + ' Completed!');
});

app.listen(port, function() {
    console.log('Starting node.js on port ' + port);
});
