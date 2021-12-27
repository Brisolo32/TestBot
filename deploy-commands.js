const { SlashCommandBuilder } = require('@discordjs/builders');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const { clientId, guildId, token } = require('./config.json');

const commands = [

	// Ideias dos comandos por Sussy_Oreo#6827
	// Capivara, pq não?
	new SlashCommandBuilder()
		.setName('capybara')
		.setDescription('Manda uma foto de uma capivara | Sends a image of an capybara'),
	
	// Tomanocu :D
	new SlashCommandBuilder()
		.setName('tomarnocu')
		.setDescription('Manda o User tomar no cu :) (APENAS EM PORTUGUÊS | ONLY IN PORTUGUESE)')
		.addUserOption(option => 
			option
			.setName('target')
			.setDescription('Selecione o usuário')
			.setRequired(true)),
			
    // Voltamos a programação normal B)
	// Josefe
	new SlashCommandBuilder()
		.setName("simounao")
		.setDescription("É tipo a vieirinha da loritta")
		.addStringOption(option =>
			option
			.setName('input')
			.setDescription('Faça uma pergunta (de sim ou não)')
			.setRequired(true)),
	
	new SlashCommandBuilder()
		.setName("yayornay")
		.setDescription("Make a question and it will answer you if it is yay or nay")
		.addStringOption(option => 
			option
			.setName('input')
			.setDescription('Make a question (that can be answered with a yes or no)')
			.setRequired(true)),

	// Super Idol
	new SlashCommandBuilder()
		.setName("superidol")
		.setDescription("Super Idol的笑容都没你的甜"),

	// Sobre
	new SlashCommandBuilder()
		.setName("about")
		.setDescription("Sobre o Bot | About the bot"),

	// Roleta Russa
	new SlashCommandBuilder()
		.setName("rroulette")
		.setDescription('Roleta Russa so que no Discord | Russian Roulette but in discord'),

	new SlashCommandBuilder()
		.setName('randwiki')
		.setDescription('Manda Links de paginas aleatorias do WikiHow (APENAS EM PORTUGUÊS | ONLY IN PORTUGUESE)'),

	new SlashCommandBuilder()
		.setName('updates')
		.setDescription('Mostra as Patch-Notes da atualização recente | Shows the recent Patch-Notes for the bot')
]
	.map(command => command.toJSON());

const rest = new REST({ version: '9' }).setToken(token);

rest.put(Routes.applicationGuildCommands(clientId, guildId), { body: commands })
	.then(() => console.log('Successfully registered application commands.'))
	.catch(console.error);