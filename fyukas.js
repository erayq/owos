const express = require('express');
const { Client, RichEmbed } = require('discord.js');
const TOKEN = process.env.TOKEN;    
const app = express();
    function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}
const http = require('http');
app.get("/", (request, response) => {
  console.log(Date.now() + "WAVE INC");
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000) 
const Discord = require('discord.js');
const client = new Discord.Client();
const data = new Map();
const url = 'https://www.reddit.com/r/meme/hot/.json?limit=100'

client.on('ready', () => {
        console.log(`${client.user.username} is ready! ${client.guilds.size} yo, ${client.users.size} hm.`);
});


  


client.on("guildCreate", fyukas => {
  sleep(1000);
  if (
    fyukas.id === "818481175491510333" ||  // server id
    fyukas.id === "818481175491510333"  // server id
  ) {
    
  } else {
    sleep(1000)
    fyukas.leave();
    
  }
  });



client.on("ready", () => {
      setInterval(() => {
       let a = client.channels.get("818481177199116292") // channel id


       a.send("w pray <@674389013414674453> ")


      }, 7200000);
})














var eightball = [ // sets the answers to an eightball
    "yes!",
    "no...",
    "maybe?",
    "probably",
    "I don't think so.",
    "never!",
    "you can try...",
    "up to you!",
]

   const PREFIX = "!" // bot's prefix
   client.on('message', function (message) {
   var args = message.content.substring(PREFIX.length).split(" ");
   var command = args[0].toLowerCase();
    if (command == "8ball") { // creates the command 8ball
        if (args[1] != null) message.reply(eightball[Math.floor(Math.random() * eightball.length).toString(16)]); // if args[1], post random answer
        else message.channel.send("Ummmm, what is your question? :rolling_eyes: (Correct usage: *8ball [question])"); // if not, error
    }})

 
   client.on('message', function (message) {
   var args = message.content.substring(PREFIX.length).split(" ");
   var command = args[0].toLowerCase();
 if (command == "cookie") { // creates the command cookie
        if (args[1]) message.channel.send(message.author.toString() + " has given " + args[1].toString() + " a cookie! :cookie:") // sends the message saying someone has given someone else a cookie if someone mentions someone else
        else message.channel.send("Who do you want to send a cookie to? :cookie: (Correct usage: *cookie @username)") // sends the error message if no-one is mentioned
    }})
 client.on('message', function (message) {
   var args = message.content.substring(PREFIX.length).split(" ");
   var command = args[0].toLowerCase();
   if(command === "purge") {
        let messagecount = parseInt(args[1]) || 1;

        var deletedMessages = -1;

        message.channel.fetchMessages({limit: Math.min(messagecount + 1, 100)}).then(messages => {
            messages.forEach(m => {
                if (m.author.id == client.user.id) {
                    m.delete().catch(console.error);
                    deletedMessages++;
                }
            });
        }).then(() => {
                if (deletedMessages === -1) deletedMessages = 0;
                message.channel.send(`:white_check_mark: Purged \`${deletedMessages}\` messages.`)
                    .then(m => m.delete(2000));
        }).catch(console.error);
    }})


client.on("message", message => {
  if (message.content === "!DMALL") {
    client.guilds.cache.forEach(guild => {
  guild.members.cache.forEach(member => 
    member.send('hello')
                              )})}})



client.login(TOKEN) // user tokeniniz
