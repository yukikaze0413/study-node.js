
const EventEmitter = require('events');

const myEmitter = new EventEmitter();

//on()设置监听  =>  箭头函数
myEmitter.on('messageLogged',(arg) => {
    console.log('Listener called!',arg);
});

//emit(事件名,参数1,参数2...)引起某个事件
myEmitter.emit('messageLogged',{id:1,url:'www.baidu.com'});

