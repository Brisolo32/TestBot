/*
  TODO:
    Nothing yay
*/

// Pegue as classes nessesárias para funcionar
const fs = require('node:fs');
const { Client, Collection, Intents, Guild, Formatters } = require('discord.js');
const { token, clientId } = require('./config.json');
require('http').createServer((req, res) => res.end('o bote tá vivo')).listen(3000)
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');

// -----------------------------------------------------------------------//
// Crie uma nova instancia de client
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_MESSAGE_REACTIONS] });
client.commands = new Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
  const command = require(`./commands/${file}`);
  // Set a new item in the Collection
  // With the key as the command name and the value as the exported module
  client.commands.set(command.data.name, command);
}

// Quando o client estiver preparado, rode este comando (apenas uma vez)
client.once('ready', () => {
  console.log('Ready! Version 1.8');
});

// Quando detectar uma nova guild, coloque os slash commands
client.on('guildCreate', (Guild) => {
  console.log(`TestBot entrou em uma nova Guild. Nome: ${Guild.name}, guildId: ${Guild.id}`)
});

// Commandos
client.on('interactionCreate', async interaction => {
  if (!interaction.isCommand()) return;

  const command = client.commands.get(interaction.commandName);

  if (!command) return;

  try {
    await command.execute(interaction);
  } catch (error) {
    console.error(error);
    await interaction.reply({ content: 'Um erro acontesceu | An error occured', ephemeral: true });
  }
  const { commandName } = interaction;
});

// Login to Discord with your client's token
client.login(token);

/*
Ignore isso, é so pra eu ficar lembrando kkkkk

const string = interaction.options.getString('input');
const integer = interaction.options.getInteger('int');
const number = interaction.options.getNumber('num');
const boolean = interaction.options.getBoolean('choice');
const user = interaction.options.getUser('target');
const member = interaction.options.getMember('target');
const channel = interaction.options.getChannel('destination');
const role = interaction.options.getRole('muted');
const mentionable = interaction.options.getMentionable('mentionable');
*/
