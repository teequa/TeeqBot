const Discord = require('discord.js');
const config = require('./config.json');
const newUsers = new Discord.Collection();
const fs = require('fs');
const fetch = require('node-fetch');
const express = require('express');
require('dotenv').config();

const client = new Discord.Client();
client.commands = new Discord.Collection();

//command handler
fs.readdir("./commands", (err, files) => {
  if(err) console.log(err);

  let jsfile = files.filter(f => f.split(".").pop() === "js")
  if(jsfile.length <= 0){
    console.log("could not find commands");
    return;
  }

  jsfile.forEach((f, i) =>{
  let props = require(`./commands/${f}`);
  console.log(`${f} loaded`);
  client.commands.set(props.help.name, props);
  });

});

//client initate
client.on('ready', () => {
  console.log(`Teeq client is up and running!`);
});


//Presence listener active - set to listen to teequa and parse JSON to read STREAMING status - push message
client.on('presenceUpdate', (oldPresence, newPresence) => {
  const teequa = config.teequa;

  if (teequa === newPresence.userID) {

    let activity = newPresence.activities;

    if (!activity === undefined || !activity.length == 0) {
    let activity_arg = JSON.stringify(activity[0])
    let json = JSON.parse(activity_arg);
    
    // defining guild/channels/roles
    const guild = newPresence.guild
    const liveChannel = guild.channels.cache.find(channel => channel.id === config.channels["liveChannel"]);
    
      if (json.type === 'STREAMING') {
        console.log('teequa is streaming');

        //message embed
        const notificationEmbed = new Discord.MessageEmbed()
          .setColor ('#70bf4a')
          .setURL (json.url)
          .attachFiles(['../resources/images/bunta.jpg'])
          .setAuthor (`Teequa is now live`, 'attachment://bunta.jpg', json.url)
          .addFields (
            {name: `Currently playing`, value: `${json.state}`, inline: true},
            {name: 'Come say hi!', value: ':grin:', inline: true},
            {name: `Stream title`, value: `[${json.details}](${json.url})`}
          )
          .setImage('attachment://bunta.jpg', json.url)
          .setTimestamp()

        //send embed w/role notification
        liveChannel.send(notificationEmbed);
      } else;
    //send notification 
    } else;
    
  } return;
});

//User join/leave
client.on('guildMemberAdd', (member) => {
  const channel = member.guild.channels.cache.find(channel => channel.id === config.channels["welcomeChannel"]);
  //const newUser = member.has(member.id, member.user);
  if (!channel) return;

  if (member) {
  channel.send(`welcome ${member.user}, please take your time and read the "supreme conduct(rules)", other than that meme out and have fun!`);
  console.log(`user: ${member.user} joined the server`);
}

});

client.on("guildMemberRemove", (member) => {
  if(newUsers.has(member.id)) newUsers.delete(member.id); {
  }
});


//COMMANDS
client.on("message", async message => {
  if (!message.content.startsWith(config.prefix)) return;
  let prefix = config.prefix
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);
  let memRole = message.member.roles.cache;
  let commandfile = client.commands.get(cmd.slice(prefix.length));
  if(commandfile) commandfile.run(client, message, args);
});

client.login(process.env.BOT_TOKEN);
