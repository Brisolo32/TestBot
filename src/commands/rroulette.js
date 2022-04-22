const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {

	data: new SlashCommandBuilder()
        .setName("rroulette")
        .setDescription('Roleta Russa so que no Discord | Russian Roulette but in discord'),
	async execute (interaction) {
            const RRoulette = [
              "Você sobreviveu B( | You survived B(",
              "Você sobreviveu B( | You survived B(",
              "Você morreu B) | You died B)",
              "Você sobreviveu B( | You survived B(",
              "Você morreu B) | You died B)",
              "Você sobreviveu B( | You survived B(",
            ]
        
            const Resposta = Math.floor(Math.random() * RRoulette.length)
            await interaction.reply(RRoulette[Resposta])
		}
};