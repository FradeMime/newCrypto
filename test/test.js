// import { execFile } from 'child_process';
const execFile = require('child_process').execFile;

// const filepath = '/home/leiqiu/Desktop/weing/client.js';
// let retStr = '';
// execFile(filepath, ['123456'], (err, stdout, _stderr) => {
//   if (err) {
//     console.log(`错误信息:${err}`);
//     return;
//   }
//   console.log(`stdout: ${stdout}`);
//   retStr = stdout;
// });
// console.log('用户事务处理');

// process.stdout.write(`子进程密钥数据:${retStr}`);

const filepath = '/home/leiqiu/Desktop/weing/client.js';
const processSendMsg = {
  type: 'encrypt',
  idSelf: '15051510559',
  idFriend: '15051510556',
  msg: '你好',
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
    console.log(`接收数据:${stdout}`);
    retStr = stdout;
  }
);
console.log('用户事务处理');
// process.stdout.write(`加密数据:${retStr}`);