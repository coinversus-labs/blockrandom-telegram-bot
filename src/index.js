require('dotenv').config();
const TelegramBot = require('node-telegram-bot-api');

const TOKEN = process.env.TELEGRAM_TOKEN;

const bot = new TelegramBot(TOKEN, { polling: true });

// Array of Alphabet starting with 1
const alphabetArray = "0abcdefghijklmnopqrstuvwxyz".split("");
let hashArray;
let shortHash;
let p = 31;
let i = 0;

function convertToShortHash(hash){
	
	const shortHash = hash.substring(0, 4) + hash.substring(hash.length-4, hash.length);
	return shortHash;
	
}

function convertHashToNumber(hash){
	hashArray = hash.toLowerCase().split("");
	let blockRandomNumb = 0;
	let sum = 0;
	
	blockRandomNumb = (function (){

    hashArray.forEach(val => {
    if(isNaN(val)){
        sum = sum + (parseInt(alphabetArray.indexOf(val)) * Math.pow(p, i));
    }else{
        sum = sum + (parseInt(val) * Math.pow(p, i));
    }

    i = i + 1;

    });
	i = 0;
    return sum;

    })();
	
	return blockRandomNumb;
	
}

bot.on('message', (message) => {
	
	let chat_id = message.from.id;
	
	if(message.text === '/start'){

	bot.sendMessage(chat_id, `CryptRobot of @coinvs is at your service, 
	send blockchain hash to convert to a number.
	
	Example: 
	84vmWvKxebcnZL5JPnqkzPFVBaL4y5uGCRRJW2a9P4SL`);	

	}else if(message.text.length < 8){

	bot.sendMessage(chat_id, `hash should contain at least 8 characters`);

	}else{
		
	shortHash = convertToShortHash(message.text);
	let blockRandomNumb = convertHashToNumber(shortHash);
	
    bot.sendMessage(chat_id, `Here is your hash converted to a number:
	
	${blockRandomNumb}`);
	
	}

});