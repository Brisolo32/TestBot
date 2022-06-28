const fs = require('node:fs');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const { clientId, guildId, token } = require('./config.json');
const { SlashCommandBuilder } = require('@discordjs/builders');

const myArgs = process.argv.slice(2);
const commands = []
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
const rest = new REST({ version: '9' }).setToken(token)

switch (myArgs[0]) {
  case '\-l':
    for (const file of commandFiles) {
      const command = require(`./commands/${file}`);
      commands.push(command.data.toJSON())
    }

    rest.put(
        Routes.applicationGuildCommands(clientId, guildId), { body: commands })
        .then(() => console.log('Successfully registered application commands.'))
        .catch(console.error)
    break;
  case '\-g':
    for (const file of commandFiles) {
        const command = require(`./commands/${file}`);
        commands.push(command.data.toJSON())
    }

    rest.put(
        Routes.applicationCommands(clientId), { body: commands })
        .then(() => console.log('Successfully registered application commands.'))
        .catch(console.error)
    break;
  default:
    console.log('Sorry, that is not something I know how to do.');
}
