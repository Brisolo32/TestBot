// Import the nessesary modules
const fs = require('node:fs');
const { Client, Collection, Intents, MessageEmbed } = require('discord.js');
const { token, clientId, colours } = require('./config.json');

// ----------------------------------------------------------------------- //

// Create a new client
const client = new Client({ 
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_MESSAGE_REACTIONS, Intents.FLAGS.GUILD_VOICE_STATES] 
});
module.exports = client;

client.commands = new Collection();

const commandFiles = fs.readdirSync(__dirname + '/commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
  const command = require(`./commands/${file}`);
  if (!command.data) console.log(command)
  // Set a new item in the Collection
  // With the key as the command name and the value as the exported module
  client.commands.set(command.data.name, command);
}

// When the client is ready, run this code
client.once('ready', () => {
  console.log('Ready! Version 2.2.1!');
  client.user.setActivity("with the bot", {
    status: 'dnd',
    type: 'PLAYING',
  });
});

// When the bot joins a guild, run this code
client.on('guildCreate', (Guild) => {
  console.log(`TestBot entrou em uma nova Guild. Nome: ${Guild.name}, guildId: ${Guild.id}`)
});

// Command Handler
client.on('interactionCreate', async interaction => {
  if (!interaction.isCommand()) return;

  const command = client.commands.get(interaction.commandName);

  if (!command) return;

  try {
    await command.execute(interaction);
  } catch (error) {
    // If a error is caught, log it and send a embed to the user
    const errorembed = new MessageEmbed()
      .setTitle('Error')
      .setDescription(`Something went wrong...`)
      .addFields(
        { name: 'Log', value: `${error}` },
      )
      .setColor(`${colours.error}`)
      .setFooter({ text: `Contact the Dev at Brisolo32#2968` })
      .setTimestamp();
    console.error(error);
    await interaction.reply({ embeds: [errorembed], ephemeral: true });
  }
  const { commandName } = interaction;
});

// Login to Discord with your client's token
client.login(token);
