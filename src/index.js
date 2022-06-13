require('dotenv').config();
const TelegramBot = require('node-telegram-bot-api');

const TOKEN = process.env.TELEGRAM_TOKEN;

const bot = new TelegramBot(TOKEN, { polling: true });

const shortHash = (hash = "") => hash.substring(0, 4) + hash.substring(hash.length-4, hash.length); 

function convertHash(hash){
    blockRandomHash = shortHash(hash);
    hashArray = blockRandomHash.toLowerCase().split("");
    let sum = 0;
    let i = 0;
    hashRandomNumb = (function (){

    hashArray.forEach(val => {
    if(isNaN(val)){
        sum = sum + (parseInt(alphabetArray.indexOf(val)) * Math.pow(p, i));
    }else{
        sum = sum + (parseInt(val) * Math.pow(p, i));
    }

    i = i + 1;

    });
    return sum;

    })();
}

bot.on('message', (message) => {

    let chat_id = message.from.id;

    bot.sendMessage(chat_id, convertHash(message.text));

    bot.sendMessage(chat_id, "Please send blockchain Hash to convert" + message.text);

});