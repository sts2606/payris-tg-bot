const PayrisBot = require('node-telegram-bot-api');
const TOKEN = require('./config');

const bot = new PayrisBot(TOKEN, {
    polling: true
});

const thanx = [
    "спасибо за отзыв! Dream Big, It Matters",
    "благодарим, что помогаете нам стать лучше",
    "команда Payris благодарит Вас за отзыв",
    "спасибо за уделенное время проекту Payris",
    "спасибо за отзыв! Ваше мнение ценно для нас"
]

bot.onText(/\/start/, (msg) => {
    bot.sendMessage(msg.chat.id, `Привет, ${msg.from.first_name}! Тут Вы можете описать все Ваши пожелания, комментарии, отзывы о приложении Payris. Пишите все, что сочтете важным и нужным, мы обязательно это учтем!`
    // ,
    // {
    //     reply_markup:{
    //         resize_keyboard: true,
    //         keyboard: [
    //             ["Отправить отзыв"]
    //         ]
    //     }
    // }
    )
})

bot.on('message', msg => {
    if(msg.text === "Отправить отзыв"){
        bot.sendMessage(msg.chat.id, `${msg.from.first_name}, ${thanx[Math.floor(Math.random() * Math.floor(thanx.length))]}!`)
        bot.sendMessage(msg.chat.id, `Вы можете отправить еще один отзыв!`, {
            reply_markup: {
                resize_keyboard: true,
                keyboard: [
                    ["Отправить отзыв"]
                ]
            }
        })
    }
})

bot.on("message", (msg) => {
    if(msg.text !== "Отправить отзыв" && msg.text !== "/start"){
        const text = `Подтвердите ввод кнопкой "Отправить отзыв"`;
    bot.sendMessage(msg.chat.id, text, {
        reply_markup:{
            resize_keyboard: true,
            keyboard: [
                ["Отправить отзыв"]
            ]
        }
    })
    // bot.forwardMessage(346092562, msg.from.id, msg.message_id)
        bot.forwardMessage(608932241, msg.from.id, msg.message_id)
    console.log(msg.from.id + msg.from.username);
    }
})
