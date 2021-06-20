// singleton pattern is a creational pattern.... it comes handy when u
//want to limit the number of instances of an object to atmost 1

var Singleton = (function () {
  var instance;

  function createInstance() {
    var object = new Object("I am the instance");
    return object;
  }

  return {
    getInstance: function () {
      if (!instance) {
        instance = createInstance();
      }
      return instance;
    },
  };
})();

function run() {
  var instance1 = Singleton.getInstance();
  var instance2 = Singleton.getInstance();

  console.log("Same instance? " + (instance1 === instance2));
}
run();
