// the observer pattern is a design pattern in which u define
//one to many dependency relationship from one object known as subject  to
//many other objects know as observers....
//these observers are just functions...which watch the subject and wait for some signal
//or trigger from the subject before they run....

function Subject() {
  this.observers = []; //array of observer functions..
}

Subject.prototype = {
  subscribe: function (fn) {
    this.observers.push(fn);
  },
  unsubscribe: function (fnToRemove) {
    this.observers = this.observers.filter(fn => {
      if (fn != fnToRemove) {
        return fn;
      }
    });
  },
  trigger: function () {
    this.observers.forEach(fn => {
      fn.call();
    });
  },
};

const subject = new Subject();

function Observer1() {
  console.log("Observer 1 firing!");
}
function Observer2() {
  console.log("observer 2 firing!");
}

subject.subscribe(Observer1);
subject.subscribe(Observer2);
// subject.unsubscribe(Observer2);

subject.trigger();
