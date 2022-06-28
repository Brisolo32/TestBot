const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {

	data: new SlashCommandBuilder()
        .setName("rroulette")
        .setDescription('Russian Roulette but in discord'),
	async execute (interaction) {
            const RRoulette = [
              "You survived B(",
              "You survived B(",
              "You died B)",
              "You survived B(",
              "You died B)",
              "You survived B(",
            ]
        
            const Resposta = Math.floor(Math.random() * RRoulette.length)
            await interaction.reply(RRoulette[Resposta])
		}
};