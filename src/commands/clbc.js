const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {

	data: new SlashCommandBuilder()
		.setName('calaboca')
		.setDescription('Manda o user calar a boca')
		.addUserOption(option => 
			option
			.setName('target')
			.setDescription('Selecione o usuário')
			.setRequired(true)),
	async execute (interaction) {
			const member = interaction.options.getMember("target");
    		await interaction.reply(`Cala a boca ${member}`)
		}
};
