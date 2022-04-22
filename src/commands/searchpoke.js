const { SlashCommandBuilder } = require("@discordjs/builders");
const { MessageEmbed } = require("discord.js");
const { getPokemon } = require("../functions/getPokemon.js");

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

module.exports = {
    data: new SlashCommandBuilder()
        .setName("pokesearch")
        .setDescription("Search for a pokemon | Busca um pokemon")
        .addBooleanOption(option =>
            option
                .setName("random")
                .setDescription("Random pokemon? | Pokemon aleatório?")
                .setRequired(true))
        .addStringOption(option =>
            option
                .setName("pokemon")
                .setDescription("The pokemon (or number in pokedex) | O pokemon (ou número no pokedex)")),
    async execute(interaction) {
        if (interaction.options.getBoolean('random') === true){
            const pokenumber = Math.floor(Math.random() * 897) + 1;
            getPokemon(pokenumber).then(res => {
                let pokename = res.name;
                let pokenameupper = capitalizeFirstLetter(pokename);
                let poketype = res.types[0].type.name;
                let poketypeupper = capitalizeFirstLetter(poketype);

                const pokembed = new MessageEmbed()
                    .setTitle(`${pokenameupper}`)
                    .setColor('#0099ff')
                    .addFields(
                        { name: 'Number | Número', value: `${res.id}`, inline: true },
                        { name: 'Type | Tipo', value: `${poketypeupper}`, inline: true },
                        { name: 'Height | Altura', value: `${res.height}`, inline: true },
                        { name: 'Weight | Peso', value: `${res.weight} `, inline: true }
                    )
                    .setImage(`${res.sprites.front_default}`)
                    .setFooter({ text: `Powered by Pokeapi | Movido por Pokeapi` });
                interaction.reply({ embeds: [pokembed] });
            })
        } else if (interaction.options.getBoolean('random') === false){
            const pokenumber = interaction.options.getString('pokemon');
            getPokemon(pokenumber).then(res => {
                let pokename = res.name;
                let pokenameupper = capitalizeFirstLetter(pokename);
                let poketype = res.types[0].type.name;
                let poketypeupper = capitalizeFirstLetter(poketype);

                const pokembed = new MessageEmbed()
                    .setTitle(`${pokenameupper}`)
                    .setColor('#0099ff')
                    .addFields(
                        { name: 'Number | Número', value: `${res.id}`, inline: true },
                        { name: 'Type | Tipo', value: `${poketypeupper}`, inline: true },
                        { name: 'Height | Altura', value: `${res.height}`, inline: true },
                        { name: 'Weight | Peso', value: `${res.weight} `, inline: true }
                    )
                    .setImage(`${res.sprites.front_default}`)
                    .setFooter({ text: `Powered by Pokeapi | Movido por Pokeapi` });
                interaction.reply({ embeds: [pokembed] });
            })
        }
    }
}