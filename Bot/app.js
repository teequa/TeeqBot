const Discord = require('discord.js');
const config = require('./config.json');
const newUsers = new Discord.Collection();
const fs = require('fs');


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

//User join/leave
client.on('guildMemberAdd', (member) => {
  const channel = member.guild.channels.cache.find(channel => channel.id === config.welcomeChannel);
  //const newUser = member.has(member.id, member.user);
  if (!channel) return;

  if (member) {
  channel.send(`welcome ${member.user}`);
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

client.login(config.token);
