const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName("coinflip")
        .setDescription("Cara ou Coroa"),
	  async execute (interaction) {
        const coinflip = [
           "Tails :coin:",
           "Heads :coin:"
        ]

        const coin = Math.floor(Math.random() * coinflip.length)
        interaction.reply(coinflip[coin])
		}
};