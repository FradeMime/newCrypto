// const fs = require('fs')

// const { resolve } = require('path');

// let read=()=>{
//     fs.readFile("./keys",(err,data)=>{
//         return JSON.parse(data.toString())
//     })
// }

// (()=>{
//     let result = read()
//     console.log(result)  //undefind
// })()


// const fs = require('fs')

// let read=async ()=>{
//     return new Promise((resolve,reject)=>{
//         fs.readFile("./keys",(err,data)=>{
//             if(err) reject(err)
//             resolve(data.toString())
//         })
//     })

// }

// (async ()=>{
//     let result =await read()
//     console.log(result)    //{msg:"ok"}
// })()
// const execFile = require('child_process').execFile;

// const filepath = '/home/leiqiu/Desktop/weing/client.js';
// const processSendMsg = {
//   type: 'encrypt',
//   idSelf: '15051510559',
//   idFriend: '15055555555',
//   msg: 'hello',
// };
// let retStr = '';
// let hel = async() =>{
//   execFile(
//     filepath,
//     [JSON.stringify(processSendMsg)],
//     (err, stdout, _stderr) => {
//       if (err) {
//         console.log(`错误信息:${err}`);
//         return;
//       }
//       // console.log(`1接收数据:${stdout}`);
//       retStr = stdout;
//       console.log(`1接收数据:${stdout}`);
//       return 0;
//     }
//   );
// }
// (async() =>{
//   let ret = await hel();
//   console.log(`2确认收到数据${retStr};${ret}`);
// })()
// // let ret = await hel();
// // console.log(`确认收到数据${retStr};${ret}`);
// console.log('3用户事务处理');




// module.exports = {
//   login: (code) => {
//   }
// }
// User.login(
//     return new Promise(function (resolve, reject) {
//       https.get(wxjscode2sessionUrl, (resp) => {
//       var data="";
//         resp.on('data', (chunk) => {
//             data += chunk;
//         });
//         resp.on('end', () => {
//                 resolve(data);
//             });
//         })
//     }).on("error", (err) => {
//         console.log("Error: " + err.message);
//     }),

// })


// var token = await User.login(ctx.request.body.code);
// console.log("token "+token);

const func2 = require('./callBack');

async function test(){
  try{
    const ret = await func2('hello');
    console.log('1');
    console.log(ret);
    console.log('3');
  } catch(error){
    console.log(error);
  }
}

test();



// // let's say this is the API function with two callbacks,
// // one for success and the other for error
// function apiFunction(query, successCallback, errorCallback) {
//   if (query == "bad query") {
//       errorCallback("problem with the query");
//   }
//   successCallback("Your query was <" + query + ">");
// }

// // myFunction wraps the above API call into a Promise
// // and handles the callbacks with resolve and reject
// function apiFunctionWrapper(query) {
//   return new Promise((resolve, reject) => {
//       apiFunction(query,(successResponse) => {
//           resolve(successResponse);
//       }, (errorResponse) => {
//           reject(errorResponse)
//       });
//   });
// }

// // now you can use await to get the result from the wrapped api function
// // and you can use standard try-catch to handle the errors
// async function businessLogic() {
//   try {
//       console.log('3');
//       const result = await apiFunctionWrapper("query all users");
//       console.log(result);
//       console.log('4');

//       // the next line will fail
//       const result2 = await apiFunctionWrapper("bad query");
//       console.log(result2);
//       console.log('5');
//   } catch(error) {
//       console.error("ERROR:" + error);
//   }
// }

// // call the main function
// console.log('1');
// businessLogic();
// console.log('2');