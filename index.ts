import { Client } from 'whatsapp-web.js'
//@ts-ignore
const client = new Client();

client.on('qr',async (qr) => {
    // Generate and scan this code with your phone
    console.log(await client.getWWebVersion())
    console.log('QR RECEIVED', qr);
});

client.on('ready', () => {
    console.log('Client is ready!');
});

client.on('message', (msg) => {
        client.sendMessage(msg.from,"hey")
    
});

client.initialize();
