import { error } from "console";

const { Telegraf } = require('telegraf');
require('dotenv')

// const bot = new Telegraf("5668907188:AAF6nYcMZBmGmG_uBnE8a9zsM9w7l8tiP_Y");
const token =new Telegraf.process.env.BOT_TOKEN ;
const bot = new Telegraf.token

if(!token) 
    throw new Error ('missing token')

console.log(token);
console.log('funcionando');


//https://api.telegram.org/bot5668907188:AAF6nYcMZBmGmG_uBnE8a9zsM9w7l8tiP_Y/getupdates


bot.telegram.sendMessage(1514117704, "Oi eu sou a Esmeralda")
bot.telegram.sendMessage(1514117704, "Tudo bem?")



// bot.start('oi', (ctx: any) => ctx.reply(' '));
// bot.help((ctx) => ctx.reply('Send me a sticker'));
// bot.on('sticker', (ctx) => ctx.reply('👍'));
// bot.hears('oi', (ctx: any) => ctx.reply('ola'));
// bot.hears('oii', (ctx) => ctx.reply('oi didis gatinha'));
// bot.launch();

