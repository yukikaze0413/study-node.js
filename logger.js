// 一个logger module 

/*
nodejs在运行脚本是是将脚本封装在一个函数中
function（exports, require, module, __filename, __dirname）
通过下面的两个打印出的log可以看到，__dirname和__filename分别是当前脚本的目录和文件名
*/
const EventEmitter = require('events');

// console.log(__dirname);


// console.log(__filename);

var url = 'www.123456.com';

class Logger extends EventEmitter {

    log(message){
    //发送http请求到指定的url
    console.log(message);
    this.emit('message1', {id: 1, url: 'http://'});
    }

}



module.exports = Logger;
//module.exports.url = url;

/*
module.exports = log; 尝试只导出log函数
*/