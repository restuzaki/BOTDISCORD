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
                    return message.reply("diterima dan selamat bermain bersama kami di **INDOKU RP**");
                } catch(e) {
                    return message.channel.send("Ada sebuah kesalahan disaat melaksanakan command.")
                            }
            break;
            case 'halo':
                message.channel.send('hallo');
                break;
            case 'indoku':
                message.channel.send('#roleplaybukanchattingan');
                break;
            case 'restu':
                message.channel.send('kenapa? orangnya lagi tidur noh!');
                break;
            case 'p':
                message.channel.send('heh yang bener atu salamnya!');
                break;
            case 'donkey':
                message.channel.send('Donkey adalah spesies admin berbentuk keledai');
                break;
            case 'web':
                message.channel.send(' https://www.indokurp.com/ ');
                break;
            case 'bantuan':
                message.channel.send('https://www.indokurp.com/bantuan');
                break;
            case 'restuganteng':
                message.channel.send('Trimakasih pujiannya kamu adalah orang ke 1000 yang berbicara seperti itu!');
                break;

            case 'cmd':
                message.channel.send('?halo,?bantuan,?web?indoku?donkey,?Restu,?restuganteng,?p,?mulai,?donasi');
                break;   
            
            case 'mulai':
                message.channel.send('Mulai apa ngab? mulai mencintaimu?');
                break;
                 
            case 'donasi':
                message.channel.send('Silahkan cek informasi donasi di: https://www.indokurp.com/info-donasi');
                break;
                


    }
})

bot.login(token);
