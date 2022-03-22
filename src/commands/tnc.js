const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {

	data: new SlashCommandBuilder()
		.setName('tomarnocu')
		.setDescription('Manda o User tomar no cu :)')
		.addUserOption(option => 
			option
			.setName('target')
			.setDescription('Selecione o usuário')
			.setRequired(true)),
	async execute (interaction) {
			const member = interaction.options.getMember("target");
    		await interaction.reply(`Vai tomar no cu ${member} :middle_finger:`)
		}
};