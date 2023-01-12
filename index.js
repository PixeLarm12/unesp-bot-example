const Discord = require('discord.js');

const Bot = new Discord.Client({
    intents: [
        Discord.GatewayIntentBits.Guilds,
        Discord.GatewayIntentBits.GuildMessages,
        Discord.GatewayIntentBits.MessageContent,
        Discord.GatewayIntentBits.GuildMembers,
    ],
});

const botToken = "MTAzNTAyOTk4MDM3NzI2ODI2NA.GLV5E9.Ju9LKku0ggh7psT3Ua6HRTggUJU3q3gfkdoIm4";

Bot.on("messageCreate", async (message) => {
    if(message.content === "Olá mundo") {
        message.reply("Hello World!");
    }
});

Bot.on("messageCreate", async message => {
    if(message.content.startsWith("!")) {
        let msgContent = String(message).split("!").pop();
        
        if(msgContent === "ping") {
            message.reply(`${message.author.username} pong...`);
        }
    }
});

Bot.login(botToken);

Bot.on("ready", (message) => {
    console.log(`Bot ${message.user.username} está online!`);
});