#!/usr/bin/env node

var arguments = process.argv.splice(2);

const net = require('net');
var keymanager = '';
const client = net.createConnection({ host: 'localhost', port: 28811 }, () => {
// console.log('connected to server!');
client.write(arguments[0]);
})
.on('data', (data) => {
    // console.log(data.toString());
    keymanager = data.toString();
    // console.log(data.toString());
    process.stdout.write(`${data.toString()}`);
    // process.stdout.write(`${keymanager}`);
    client.end();
})
.on('end', () => {
    // console.log('disconnected from server');
});

// process.stdout.write(`${keymanager}`);
