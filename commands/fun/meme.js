const { MessageEmbed } = require("discord.js");
const fetch = require("node-fetch");
const Discord = require('discord.js');
const client = new Discord.Client();

client.on("message", message => {
     if (message.content.startsWith('!!bruhmeme')) {
     message.delete();
    fetch("https://meme-api.herokuapp.com/gimme")
      .then(res => res.json())
      .then(json => {
        const embed = new Discord.RichEmbed()
          .setColor('#FAFAD2')
          .setTitle(`${json.title}`)
          .setURL(json.postLink)
          .setImage(json.url)
          .setFooter(`From /r/${json.subreddit}`);

        message.channel.send(embed);
      });

    //End
  }
})
client.login(TOKEN) 
const TOKEN = process.env.TOKEN;    