// require the discord.js module
const Discord = require('discord.js');

// create a new Discord client
const client = new Discord.Client();

// when the client is ready, run this code
// this event will only trigger one time after logging in
client.once('ready', () => {
	console.log('Ready!');

});
client.on('message', message => {
	console.log(message.content);
	if (message.content === 'What man?') {
		// send back "Pong." to the channel the message was sent in
		message.channel.send('Bloody fool kneel down');
	}
	if (message.content === 'Read maths') {
		// send back "Pong." to the channel the message was sent in
		message.channel.send('Bloody fool, what looking to alia bhat ?? Kneel down');
	}
});
// login to Discord with your app's token
client.login('NzkwMTc4OTU3NTgzOTc0NDAx.X981gA.NtR224AtI9pSxsZ19F4ndWL0yrQ');