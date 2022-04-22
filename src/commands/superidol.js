const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {

	data: new SlashCommandBuilder()
                .setName("superidol")
                .setDescription("Super Idol的笑容都没你的甜"),
	async execute (interaction) {
            await interaction.reply('Super Idol的笑容\n都没你的甜\n八月正午的阳光\n都没你耀眼\n热爱 105 °C的你\n滴滴清纯的蒸馏水')
	}
};