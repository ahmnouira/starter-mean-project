const express = require('express'),
 routes = require('../routes/index'),
 env = require('./env/env'),
 morgan = require('morgan'),                            // morgan HTTP request logger Middleware
 bodyParser = require('body-parser'),
 compress = require('compression'),
 methodOverrride = require('method-override');


module.exports = (app) => {
    env(app);

    if(app.get('env') == 'development') {
        app.use(morgan('dev'));

    } else if (app.get('env') === 'production'){
        app.use(compress());
    }

    app.set('views', './app/views');
    
    app.use(bodyParser.urlencoded({extended: true}));
    app.use(methodOverrride());
    
    routes.home(app);
    routes.users(app);
    
    //express.static : to server static files such as images css, js
    app.use(express.static('./app/public'));
    return app;
}