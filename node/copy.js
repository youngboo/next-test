
function Person(){}
Person.prototype.name = "Jonny";
Person.prototype.friends = ['Cover','Kevin'];
Person.prototype.sayHello = function(){
    console.log(this.name);
};
