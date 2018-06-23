var app = require('express')();
var registerUsers = require('./registerUsers');
var users = require('./users');

var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false })
var port = process.env.PORT || 8080;

let multer = require('multer');
let upload = multer();
var https = require('https');

var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "12345678",
  database: "appointment"
});

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


let addUser ;
let appoint ;
let department ;
let docter ;
let working ;
let docterworking ;
app.get('/', async function (req, res) {
    res.send('<h1>Hello Node.js</h1>');
    // let datetimee = new Date()
    // let day = datetimee.getDay()
    // console.log(day);
    // await res.send(datetimee);
});

app.get('/appointment', async function (req, res) {
    con.connect(function(err) {
      console.log("Connected!");
    })

    sql = "select * from appointment,department,docter WHERE appointment.department_id = department.department_id && appointment.docter_id = docter.docter_id";

    con.query(sql,async function (err, result) {
      console.log(result);
      appoint = result ;
    });
    await res.send(appoint);
});
app.get('/docterworking', async function (req, res) {
    con.connect(function(err) {
      console.log("Connected!");
    })

    sql = "select * from docterworking";

    con.query(sql,async function (err, result) {
      console.log(result);
      docterworking = result ;
    });
    await res.send(docterworking);
});

app.get('/department', async function (req, res) {
    con.connect(function(err) {
      console.log("Connected!");
    })

    sql = "select * from department";

    con.query(sql,async function (err, result) {
      console.log(result);
      department = result ;
    });
    await res.send(department);
});

app.get('/docter', async function (req, res) {
    con.connect(function(err) {
      console.log("Connected!");
    })

    sql = "select * from docter";

    con.query(sql,async function (err, result) {
      console.log(result);
      docter = result ;
    });
    await res.send(docter);
});

app.get('/working', async function (req, res) {
    con.connect(function(err) {
      console.log("Connected!");
    })

    sql = "select * from working";

    con.query(sql,async function (err, result) {
      console.log(result);
      working = result ;
    });
    await res.send(working);
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
app.post('/postAppoint', function (req, res) {
    console.log(req.body.timeShow);
    con.connect(function(err) {
    console.log("Connected!");
    })
    sql = "update appointment set appoint_day='"+ req.body.docterWorkingDay + "',appoint_time='" + req.body.timeShow + "'  where  appoint_id='" + req.body.appoint_id + "'";
    con.query(sql,async function (err, result) {});

    if(req.body.timeShow == "10.00 น."){
    sql2 = "update docterworking set docterWorking_1000_1030='1' where  docterWorking_id='" + req.body.docterWorkingTime + "'";

      if(req.body.appoint_time == "10.00 น."){
        sqlSet = "update docterworking set docterWorking_1000_1030='0' where  docterWorking_day='" + req.body.appoint_day + "'";
        con.query(sqlSet,async function (err, result) {});
      }
      else if (req.body.appoint_time == "10.30 น.") {
        sqlSet = "update docterworking set docterWorking_1030_1100='0' where  docterWorking_day='" + req.body.appoint_day + "'";
        con.query(sqlSet,async function (err, result) {});
      }
      else if (req.body.appoint_time == "11.00 น.") {
        sqlSet = "update docterworking set docterWorking_1100_1130='0' where  docterWorking_day='" + req.body.appoint_day + "'";
        con.query(sqlSet,async function (err, result) {});
      }
      else if (req.body.appoint_time == "11.30 น.") {
        sqlSet = "update docterworking set docterWorking_1130_1200='0' where  docterWorking_day='" + req.body.appoint_day + "'";
        con.query(sqlSet,async function (err, result) {});
      }
    }

    else if(req.body.timeShow == "10.30 น."){
    sql2 = "update docterworking set docterWorking_1030_1100='1' where  docterWorking_id='" + req.body.docterWorkingTime + "'";

      if(req.body.appoint_time == "10.00 น."){
        sqlSet = "update docterworking set docterWorking_1000_1030='0' where  docterWorking_day='" + req.body.appoint_day + "'";
        con.query(sqlSet,async function (err, result) {});
      }
      else if (req.body.appoint_time == "10.30 น.") {
        sqlSet = "update docterworking set docterWorking_1030_1100='0' where  docterWorking_day='" + req.body.appoint_day + "'";
        con.query(sqlSet,async function (err, result) {});
      }
      else if (req.body.appoint_time == "11.00 น.") {
        sqlSet = "update docterworking set docterWorking_1100_1130='0' where  docterWorking_day='" + req.body.appoint_day + "'";
        con.query(sqlSet,async function (err, result) {});
      }
      else if (req.body.appoint_time == "11.30 น.") {
        sqlSet = "update docterworking set docterWorking_1130_1200='0' where  docterWorking_day='" + req.body.appoint_day + "'";
        con.query(sqlSet,async function (err, result) {});
      }
    }

    else if(req.body.timeShow == "11.00 น."){
    sql2 = "update docterworking set docterWorking_1100_1130='1' where  docterWorking_id='" + req.body.docterWorkingTime + "'";

      if(req.body.appoint_time == "10.00 น."){
        sqlSet = "update docterworking set docterWorking_1000_1030='0' where  docterWorking_day='" + req.body.appoint_day + "'";
        con.query(sqlSet,async function (err, result) {});
      }
      else if (req.body.appoint_time == "10.30 น.") {
        sqlSet = "update docterworking set docterWorking_1030_1100='0' where  docterWorking_day='" + req.body.appoint_day + "'";
        con.query(sqlSet,async function (err, result) {});
      }
      else if (req.body.appoint_time == "11.00 น.") {
        sqlSet = "update docterworking set docterWorking_1100_1130='0' where  docterWorking_day='" + req.body.appoint_day + "'";
        con.query(sqlSet,async function (err, result) {});
      }
      else if (req.body.appoint_time == "11.30 น.") {
        sqlSet = "update docterworking set docterWorking_1130_1200='0' where  docterWorking_day='" + req.body.appoint_day + "'";
        con.query(sqlSet,async function (err, result) {});
      }
    }

    else if(req.body.timeShow == "11.30 น."){
    sql2 = "update docterworking set docterWorking_1130_1200='1' where  docterWorking_id='" + req.body.docterWorkingTime + "'";

      if(req.body.appoint_time == "10.00 น."){
        sqlSet = "update docterworking set docterWorking_1000_1030='0' where  docterWorking_day='" + req.body.appoint_day + "'";
        con.query(sqlSet,async function (err, result) {});
      }
      else if (req.body.appoint_time == "10.30 น.") {
        sqlSet = "update docterworking set docterWorking_1030_1100='0' where  docterWorking_day='" + req.body.appoint_day + "'";
        con.query(sqlSet,async function (err, result) {});
      }
      else if (req.body.appoint_time == "11.00 น.") {
        sqlSet = "update docterworking set docterWorking_1100_1130='0' where  docterWorking_day='" + req.body.appoint_day + "'";
        con.query(sqlSet,async function (err, result) {});
      }
      else if (req.body.appoint_time == "11.30 น.") {
        sqlSet = "update docterworking set docterWorking_1130_1200='0' where  docterWorking_day='" + req.body.appoint_day + "'";
        con.query(sqlSet,async function (err, result) {});
      }
    }
      console.log(req.body.timeShow);
      console.log(req.body.appoint_id);
      console.log(sql);
      console.log(sql2);
      con.query(sql2,async function (err, result) {});
})

app.post('/send', urlencodedParser, function (req, res) {
  console.log(req.body);
  res.send(JSON.stringify(req.body));
})

app.listen(port, function() {
    console.log('Starting node.js on port ' + port);
});
