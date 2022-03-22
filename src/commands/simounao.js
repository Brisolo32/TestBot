const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {

	// marcando isso pq eu sou trouxa. pqp mto burro coloquei o ngc de outro comando aqui AAAAAAAAAAAAAAA
	data: new SlashCommandBuilder()
		.setName("simounao")
		.setDescription("É tipo a vieirinha da loritta")
		.addStringOption(option =>
			option
			.setName('input')
			.setDescription('Faça uma pergunta (de sim ou não)')
			.setRequired(true)),
	async execute (interaction) {
		const Josefe = [
      		"Talvez",
      		"Claro que não",
      		"Sim",
      		"Provavelmente não",
      		"Positivo",
      		"Provavelmente sim",
      		"Negativo",
      		"Não",
      		"Claro que sim",
      		"¯\_(ツ)_/¯",
      		"sei não bro",
      		"Sua resposta tá la na pampulha",
      		"Não sei",
      		"em atualizações antigas eu falava russo. agora só e um não",
      		"Vou te falar, só deixa eu fazer um negocinho"
    	]
    	const string = interaction.options.getString('input');
    	const Resposta = Math.floor(Math.random() * Josefe.length);
    	await interaction.reply(`P: ${string}\nR: ` + Josefe[Resposta]);
	}
};

	

