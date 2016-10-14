var express = require('express');
var five = require('johnny-five');
var path = require('path');
var app = express();
var pathPublic = path.resolve(__dirname, 'public');
app.use(express.static(pathPublic));
var arduino = new five.Board({port:'COM5'});
var led;
arduino.on('ready',function(){
    led =new five.Led(13);
    console.log('arduino listo...');
    app.get('/',function(req,res){
        res.send(index.html)
    });
    app.get('/encender',function(req,res){
        if(arduino.isReady){
            led.on();
        }
        res.redirect('/');
    });
    app.get('/apagar',function(req,res){
        if(arduino.isReady){
            led.off();
        }
        res.redirect('/');
    });

});



app.listen(3333);