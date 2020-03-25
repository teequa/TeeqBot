//welcome system

client.on('ready', () => {
  console.log(`Teeq client is up and running!`);
});

client.on('guildMemberAdd', (member) => {
  const channel = member.guild.channels.cache.find(channel => channel.id === config.welcomeChannel);
  const newUser = member.has(member.id, member.user);
  if (!channel) return;

  if (member) {
  channel.send(`welcome ${member.user}`);
  console.log(`user: ${member.user} joined the server`);
}


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


//pull role from users (in a message event and check user for authoization before countinuing)
let memRole = message.member.roles.cache;
if (cmd === !kick) {
  if (!memRole.get(config.moderator))
  return message.channel.send('not authorized');
}
