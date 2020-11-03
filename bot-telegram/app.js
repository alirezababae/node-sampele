var telegrambot = require('node-telegram-bot-api');
var token = '1075314390:AAF7Y9uWCbTzNud0WYbMkXsQXmLgBMEHmOI';
var bot = new telegrambot(token, { polling: true });

var request = require('request');


bot.onText(/\/movie (.+)/, (msg, match) => {

    var movie = match[1];

    var chatId = msg.chat.id;

    request(`http://www.omdbapi.com/?apikey=c362e5e3&s=${movie}`, (error, response, body) => {
        
    //    if (!error && response.statusCode == 200) {

            bot.sendMessage(chatId, 'get data for _' + movie + '...', { parse_mode: 'Markdown' })

                .then((msg) => {

                    bot.sendMessage(chatId, 'Result:\n' + body)


                })


         

    })

})







/*
bot.onText(/\/echo (.+)/,(msg,match)=>{

var chatId = msg.chat.id;
var echo  = match[1];
bot.sendMessage(chatId,echo);
})
*/