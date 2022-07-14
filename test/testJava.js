

var java = require("java");
java.classpath.push("../jar/com.weing.jar");
//keymanager 私钥   phone 公钥
var user1 = '13973194784';
var user2 = '13112345678';
var needEnMsg = 'sss44232132';
// var user1key = java.callStaticMethod("com.weing.vChatTest.util.Util", "getkeymanager", user1);
// console.log(user1key);
var user1_key = java.callStaticMethodSync("com.weing.vChatTest.util.Util", "getkeymanager", user1);
console.log(`user1_key:${user1_key}`);


//content 加密消息内容  privateKey 自己的私钥，getkeymanager()获取   remoteId对方的手机号
var message = java.callStaticMethodSync("com.weing.vChatTest.util.Util", "encrypt", needEnMsg, user1_key, user2);
console.log(`加密数据:${message}`);


// 用户2的私钥
var user2_key = java.callStaticMethodSync("com.weing.vChatTest.util.Util", "getkeymanager", user2);
console.log(`user2_key:${user2_key}`);
//content 解密消息内容  privateKey 自己的私钥，getkeymanager()获取   remoteId对方的手机号
var message2 = java.callStaticMethodSync("com.weing.vChatTest.util.Util", "decrypt", message, user2_key, user1);
console.log(`解密数据:${message2}`);


