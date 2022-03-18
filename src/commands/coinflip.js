const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName("coinflip")
        .setDescription("Cara ou Coroa | Heads or Tails"),
	  async execute (interaction) {
        const coinflip = [
           "Coroa | Tails :coin:",
           "Cara | Heads :coin:"
        ]

        const coin = Math.floor(Math.random() * coinflip.length)
        interaction.reply(coin)
		}
};