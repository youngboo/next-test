 function MyEvent () {
  this.eventMap = new Map();
};
MyEvent.prototype.on = function(funcName,func){
    var eventList = this.eventMap.get(funcName);
    if(eventList){
        eventList.push(func);
    }else{
        eventList = [];
        eventList.push(func);
    }
    this.eventMap.set(funcName,eventList);
};
MyEvent.prototype.emit = function(funcName){
    var funcs = this.eventMap.get(funcName);
    funcs.forEach((func)=>{
        func.call(null);
    });
};
var event = new MyEvent();
 event.on('someTopic', function () {
    console.log('someTopic1');
});
// 第二个监听观察 topic1
event.on('someTopic', function () {
    console.log('someTopic2');
});
// 第一个监听观察 topic2
event.on('otherTopic', function () {
    console.log('otherTopic');
});
event.emit('someTopic'); // 输出 'someTopic1' 和 'someTopic2'
event.emit('otherTopic'); // 输出 'otherTopic'
