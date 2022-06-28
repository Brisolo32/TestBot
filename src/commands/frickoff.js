const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('frickoff')
		.setDescription('Tells the user to frick off')
		.addUserOption(option =>
			option
			.setName('target')
			.setDescription('Select the User')
			.setRequired(true)),
	async execute (interaction) {
			const member = interaction.options.getMember("target");
    		await interaction.reply(`Frick off ${member} :middle_finger:`)
		}
};
