(function (window) {
    var Greeters= {};
    Greeters.name = ["Yaakov", "John",
     "Jen", "Jason", "Paul",
      "Frank", "Larry", "Paula",
       "Laura", "Jim"];
    var sayhello= function(){
        console.log ("Hello" + Greeters.name)
    };
    var saygoodbye = function(){
        console.log("Bye" + Greeters.name)
    };
    var firstLetter = ['Y','J','P','F','L'];
   
    for (var i = 0; i < Greeters.name.length; i++) {
      if (firstLetter == 'J') {
           saygoodbye(Greeters.name[i])}
       else {
            sayhello(Greeters.name[i]);
        }
    };
    window.Greeters=Greeters;

}) (window);