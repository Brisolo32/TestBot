const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {

	data: new SlashCommandBuilder()
		.setName('shutup')
		.setDescription('Tells the user to shut-up')
		.addUserOption(option => 
			option
			.setName('target')
			.setDescription('Select the user')
			.setRequired(true)),
	async execute (interaction) {
			const member = interaction.options.getMember("target");
    		await interaction.reply(`Shut-up ${member}`)
		}
};