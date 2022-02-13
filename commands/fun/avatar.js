const Discord = require('discord.js');
const client = new Discord.Client();
const TOKEN = process.env.TOKEN;    

client.on("message", message => {
   if (message.content.startsWith('!!avatar')) {
     message.delete()
    const user = message.mentions.users.first() || message.author;
    const avatarEmbed = new Discord.RichEmbed()
        .setColor('#FFFF00')
        .setAuthor(user.username)
        .setImage(user.avatarURL);
    message.channel.send(avatarEmbed);
}})
client.login(TOKEN)