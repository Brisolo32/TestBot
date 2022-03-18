const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');
const { getLevel } = require('../functions/getLevel.js');
const { getProfile } = require('../functions/getProfile.js');
 
module.exports = {
    data: new SlashCommandBuilder()
        .setName('gdbrowser')
        .setDescription('A browser for Geometry Dash (ONLY IN ENGLISH | APENAS EM INGLÊS)')
        .addSubcommand(subcommand => 
            subcommand
                .setName('searchlv')
                .setDescription('Gives info about a level using its Id')
                .addIntegerOption(option => option.setName('levelid').setDescription('The level id (daily: Daily level, weekly: Weekly Demon)').setRequired(true))
            )
        .addSubcommand(subcommand => 
            subcommand
                .setName('searchplayer')
                .setDescription('Gives info about a player')
                .addStringOption(option => option.setName('playername').setDescription('The player name or id').setRequired(true))
            ),
	  async execute (interaction) {
            if (interaction.options.getSubcommand() === "searchlv" ) {
                const lvid = interaction.options.getInteger('levelid');
                getLevel(lvid).then(res => {
                    var levelname = res.name;
                    var lvauthor = res.author;
                    var lvdifficulty = res.difficulty;
                    var lvdescription = res.description;
                    var lvdownloads = res.downloads;
                    var lvlikes = res.likes;
                    var lvsongid = res.songID;
                    var lvsongauthor = res.songAuthor;

                    const searchlv = new MessageEmbed()
                        .setColor('#ff9900')
                        .setAuthor('Geometry Dash Levels', 'https://i.redd.it/r6vfj5fbktg41.jpg')
                        .setTitle(`${levelname} by ${lvauthor}`)
                        .addFields(
                            { name: 'Difficulty <:testbotassets_gjeasy:952569667443122217>', value: `${lvdifficulty}`, inline: true },
                            { name: 'Description <:testbotassets_gjinfo:952562626263646318>', value: `${lvdescription}`, inline: true },
                            { name: 'Downloads <:testbotassets_gjdownloads:952569756031012915>', value: `${lvdownloads}`, inline: true },
                            { name: 'Likes <:testbotassets_gjlikes:952569667552170124>', value: `${lvlikes}`, inline: true },
                            { name: 'SongID <:testbotassets_gjsong:952569712968081449>', value: `${lvsongid}`, inline: true },
                            { name: 'Song Author <:testbotassets_gjngsong:952569667854172171>', value: `${lvsongauthor}`, inline: true },
                        )
                        .setFooter('Provided by gdbrowser.com made by GDColon')

                    interaction.reply({ embeds: [searchlv] })
                })
                
            } else if (interaction.options.getSubcommand() === "searchplayer" ) {
                const plnm = interaction.options.getString('playername');
                getProfile(plnm).then(res => {
                    var userName = res.username;
                    var userID = res.playerID;
                    var userStars = res.stars;
                    var userDiamonds = res.diamonds;
                    var gameCoins = res.coins;
                    var userCoins = res.userCoins;
                    var userDemons = res.demons;
                    
                    const account = new MessageEmbed()
                        .setColor('#ff9900')
                        .setAuthor('Geometry Dash User', 'https://i.redd.it/r6vfj5fbktg41.jpg')
                        .setTitle(`${userName}`)
                        .addFields(
                            { name: 'User ID <:testbotassets_gjinfo:952562626263646318>' , value: `${userID}` , inline: true },
                            { name: 'Stars <:testbotassets_gjstars:952560731038036023>', value: `${userStars}` , inline: true },
                            { name: 'Diamonds <:testbotassets_gjdiamonds:952559587331022858>', value: `${userDiamonds}`, inline: true },
                            { name: 'Coins <:testbotassets_gjcoins:952560731038056530>', value: `${gameCoins}`, inline: true },
                            { name: 'User Coins <:testbotassets_gjusercoins:952560731361017896>', value: `${userCoins}`, inline: true },
                            { name: 'Demons <:testbotassets_gjdemons:952559587112919130>', value: `${userDemons}`, inline: true }
                        )

                    interaction.reply({ embeds: [account] })
                })
            } 
		}
};
