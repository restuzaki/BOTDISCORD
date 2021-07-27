const { Client } = require('discord.js');
const bot = new Client;
const token = "ODY4NDU1OTc5MzkyNTg1Nzg4.YPv6qA.gOwP_jhrrdOwtNHaQLKaaYSIz40"; // TOKEN BOT KAMU
var PREFIX = "?"; // PREFIX BOT KAMU

bot.on('ready', () => {
    console.log('Bot Sudah Online, Silahkan bermain')

    bot.user.setActivity("INDOKU RP 185/200 Players", { 
        type: "PLAYING"
    }).catch(console.error);
});

bot.on('message', message => {
    let args = message.content.substring(PREFIX.length).split(' ');
    if(!message.content.startsWith(PREFIX)) return;
    switch (args[0]) {

    case 'register':

            if(message.channel.type == "dm") return message.channel.send("Kamu tidak bisa registrasi dari DM")
                const shifter = args.shift()
            if(!args.length) return message.channel.send("Mohon berikan nama untuk di set")
                const nick = "[Citizen]" + args.join(" ")
            if(nick.length > 32) return message.channel.send("Nickname terlalu panjang, mohon berikan yang lebih singkat")
            try {
                    message.member.roles.add("781827708781854783") //Role Yang Mau DiSet
                    message.member.setNickname(nick)
                    return message.reply("Accept,selamat bermain bersama kami di **INDOKU RP**");
                } catch(e) {
                    return message.channel.send("Ada sebuah kesalahan disaat melaksanakan command.")
                            }
            break;
    }
})

bot.login(token);
