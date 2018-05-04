(function() {
    var app, cluster, express, http, i, numCPUs, path, routes, settings,os,_i,ipaddress;
    express = require('express');
    routes = require('./routes/routes');
    http = require('http');
    path = require('path');
    cluster = require('cluster');
    settings = require('./settings.js');
    numCPUs = 1;//require('os').cpus().length;

    var session = require('express-session');
    var RedisStore = require('connect-redis')(session);
    settings.excelDir = path.join(__dirname, 'web/excel/');
    settings.picDir = path.join(__dirname, 'web/upload/');

    if (cluster.isMaster) {
        console.log('master');
        for (i = _i = 0; 0 <= numCPUs ? _i < numCPUs : _i > numCPUs; i = 0 <= numCPUs ? ++_i : --_i) {
            cluster.fork();
        }
        cluster.on('exit', function(worker) {
            console.log('Worker ' + worker.id + ' died :(');
            return cluster.fork();
        });
    } else {
        app = express();
        app.set('port',settings.serverPort);
        app.set('views', __dirname + '/views');
        app.set('view engine', 'html');

        var bodyParser = require('body-parser');
        var cookieParser = require('cookie-parser');

        

        app.use(bodyParser.json({limit:'50mb'}));
        app.use(bodyParser.urlencoded({limit:'50mb',extended: false }));
        app.use(cookieParser('sessiontest'));
        app.use(session({
            store: new RedisStore({
                host: "192.168.1.69",
                port: "6379",
                ttl: 60 * 60 * 24 * 30, //Session的有效期为30天
            }),
            secret: 'sessiontest',
            resave: true,
            saveUninitialized: true
        }));



        app.use(express["static"](path.join(__dirname, 'web')));

        routes(app);

        http.createServer(app).listen(app.get('port'), function() {
            var consoleDay = new Date();
            var consoleDayStr = consoleDay.getFullYear()+'-'+(consoleDay.getMonth()+1) + '-' +
                consoleDay.getDate() + ' ' + consoleDay.getHours() + ":" +
                consoleDay.getMinutes() + ":" + consoleDay.getSeconds();
            return console.log('服务器启动 - 端口:[' + app.get('port') + '] 时间:[' + consoleDayStr +']');
        });
    }
}).call(this);

