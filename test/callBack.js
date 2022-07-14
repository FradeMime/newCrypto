'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = func2;


const execFile = require('child_process').execFile;
function func1(inputMsg, callBackFunc){
  const filepath = '/home/leiqiu/Desktop/weing/client.js';
  const processSendMsg = {
    type: 'encrypt',
    idSelf: '15051510559',
    idFriend: '15055555555',
    msg: inputMsg,
  };
  let retStr = '';
  
  execFile(
    filepath,
    [JSON.stringify(processSendMsg)],
    (err, stdout, _stderr) => {
      if (err) {
        console.log(`错误信息:${err}`);
        return;
      }
      // console.log(`1接收数据:${stdout}`);
      retStr = stdout;
      console.log(`1接收数据:${stdout}`);
      callBackFunc(retStr);
    }
  );
}

function func2(inputMsg){
  return new Promise((resolve) => {
    func1(inputMsg,(successResponse) => {
        resolve(successResponse);
    });
});}

module.exports = exports['default'];