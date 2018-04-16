/*
* 题目:
* 使用 Prototype 来创建一个 Person 类， 需要完成以下要求：
* 1、在构造函数 Person 的 prototype(原型) 上增加下面的共享属性：
*   1.1、在原型上增加属性 `name` 值为 'Jonny'
*   1.2、在原型上增加属性 `friends` 值为 ['Cover', 'Kevin']
* 2、在构造函数 Person 的原型上增加共享方法 sayHello
*/
function Person(){}
Person.prototype.name = "Jonny";
Person.prototype.friends = ['Cover','Kevin'];
Person.prototype.sayHello = function(){
    console.log(this.name);
};
