require('dotenv').config();
const TelegramBot = require('node-telegram-bot-api');

const TOKEN = process.env.TELEGRAM_TOKEN;

const bot = new TelegramBot(TOKEN, { polling: true });

bot.on('message', (message) => {

    let chat_id = message.from.id;

    bot.sendMessage(chat_id, "Response from CoinVS Server");

});