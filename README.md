# Snakecord

Create fun and interactive games based on the famous Snake game!

# Installation

```bash
npm install snakecord
```

# Features
- Easy to use
- Clean and focused
- Actively maintained


# Examples

```js
const SnakeGame = require('snakecord');
const Discord = require("discord.js");
const client = new Discord.Client();

const snakeGame = new SnakeGame({
    title: 'Snake Game',
    color: "GREEN",
    timestamp: false,
    gameOverTitle: "Game Over"
});

const config = {
    token: "TOKEN",
    prefix: "t!"
}

client.on('ready', () => {
    console.log("Clearing Console");
    console.clear();
    console.log('Ready!');
    client.user.setActivity(`${config.prefix}help`);
});

client.on('message', message => {
	if(!message.content.startsWith(config.prefix) || message.author.bot) return;

	const args = message.content.slice(config.prefix.length).trim().split(/ +/);
	const command = args.shift().toLowerCase();

	if(command === 'test') {
		return message.channel.send('Test command works.');
	} else if(command === 'snake' || command === 'snakegame') {
		return snakeGame.newGame(message);
	} else if(command === 'help' || command === 'h') {
		const embed = new Discord.MessageEmbed()
		    .setTitle("Help Menu")
		    .addFields(
			    { name: 'test', value: "Check the command handler", inline: true },
			    { name: 'snake', value: "Play snake game", inline: true },
			    { name: 'help', value: "Show this list", inline: true }
		    );

        return message.reply(embed);
    }
});

client.login(config.token);
```

# Pictures
![1](/images/1.PNG)

![2](/images/2.PNG)

# Authors
* **[Terrarian](https://github.com/Terra-rian/snakecord)** - *Current maintainer*
* **[1GPEX](https://github.com/1GPEX)** - *Original idea*
* **[Science Spot](https://github.com/Scientific-Guy)** - *Making the options* 
