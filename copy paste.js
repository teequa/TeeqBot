client.on('guildMemberAdd', (member) => {
  const guild = member.guild;

  newUsers.set(member.id, member.user);
  console.log(`${member.user} was added to the Collection`);

  if (newUsers.size > 10) {
    const welcomeChannel = guild.channels.find(channel => channel.id === config.welcomeChannel);
    const userlist = newUsers.map(u => u.toString()).join(" ");
    welcomeChannel.send('Welcome to the channel');
    newUsers.clear();
  }

});

client.on("guildMemberRemove", (member) => {
  if(newUsers.has(member.id)) newUsers.delete(member.id); {

    console.log(`${member.user} has been removed`);
  }
});


// COMMANDS

if (cmd === "ping") {
  message.channel.send('ping' + 'pong');
} else

if (cmd === "pong") {
  message.channel.send('ping..');
} else

if (cmd === "say") {
  message.channel.send(arg.join(" "));
} else

if (cmd === "mod") {
  message.channel.send(`this is the role id for the moderator role: ${config.moderator}`);
} else

if (cmd === "admin") {
message.channel.send(`The supreme leader is ${message.member.user}`);
