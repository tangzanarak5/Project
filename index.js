var app = require('express')();
var registerUsers = require('./registerUsers');
var users = require('./users');

var bodyParser = require('body-parser');

var port = process.env.PORT || 7777;

// parse application/json
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

let test = [	{
		"hn": 500,
		"id": "1250100322359",
		"name": "Amorrut",
		"sex": "Female"
	}];


let addUser = [];

app.get('/', function (req, res) {
    res.send('<h1>Hello Node.js</h1>');
});

app.get('/index', function (req, res) {
    res.send('<h1>This is index page</h1>');
});

app.get('/dataRegisterUsers', function (req, res) {
    addUser = registerUsers.findAll();
    //res.send(tang);
    res.send(registerUsers.findAll());
});

app.get('/user', function (req, res) {
    res.json(users.findAll());
});

app.get('/registerUsers', function (req, res) {
  addUser = registerUsers.findAll();
  res.json(registerUsers.findAll());
});

app.get('/user/:id', function (req, res) {
    var id = req.params.id;
    res.json(users.findById(id));
});

app.post('/newUser', function (req, res) {
    var json = req.body;
    addUser.push(json);
    res.send('Add new ' + json.name + ' Completed!');
});

app.listen(port, function() {
    console.log('Starting node.js on port ' + port);
});
