var events = require('events');
const { prependOnceListener } = require('process');
var util = require('util');

var Person = function(name) {
    this.name = name;
};

util.inherits(Person, events.EventEmitter);

var vijay = new Person('vijay');

var lekh = new Person('lekh');

var pibu = new Person('pibu');

var names = ['vijay', 'lekh', 'pibu'];

names.forEach(function(Person) {
    Person.on('speak', function(msg) {

        console.log(Person.name + 'said: ' + msg);
    });

});


vijay.emit('speak', 'hey folkkks')