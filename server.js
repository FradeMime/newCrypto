const net = require('net');
var java = require("java");
java.classpath.push("./jar/com.weing.jar");

function getKey(idSelf) {
    var keymanager = java.callStaticMethodSync(
        "com.weing.vChatTest.util.Util",
        "getkeymanager",
        idSelf
    );
    return keymanager;
}
//keymanager 私钥   phone 公钥

function encrypMsg(idSelf, idFriend, msg){
    console.log(`加密:idSelf${idSelf};idFriend:${idFriend};msg:${msg}`);
    var priKey = getKey(idSelf);
    console.log(`身份密钥:${priKey}`);
    var message = java.callStaticMethodSync("com.weing.vChatTest.util.Util", "encrypt", msg, priKey, idFriend);
    console.log(`加密完成:${message}`);
    return message;
}

function decrypMsg(idSelf, idFriend,msg){
    console.log(`加密:idSelf${idSelf};idFriend:${idFriend};msg:${msg}`);
    var priKey = getKey(idSelf);
    var message = java.callStaticMethodSync("com.weing.vChatTest.util.Util", "decrypt", msg, priKey, idFriend);
    return message;
}



const server = net.createServer({
    allowHalfOpen: true,
}, socket => {
    
    console.log('socket connected');

    // let data = [];
    socket.on('data', (chunk) => {
        var jsData = JSON.parse(chunk.toString());
        console.log(chunk.toString());
        var retStr = '';
        if(jsData.type === 'encrypt'){
            retStr = encrypMsg(jsData.idSelf, jsData.idFriend, jsData.msg);
        } else if(jsData.type === 'decrypt'){
            retStr = decrypMsg(jsData.idSelf, jsData.idFriend, jsData.msg);
        } else if(jsData.type === 'generateIdKey'){
	        retStr = getKey(jsData.idSelf);
	    }
        console.log(`处理完成:${retStr}`);
        socket.write(retStr);
    });

    socket.on('end', () => {
        socket.end();
        console.log('socket disconnected');
    });
})
.on('error', (err) => {
    console.error(err);
    throw err;
})
.listen(28811, () => {
    console.log('server bound: 28811.');
});
