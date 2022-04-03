const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');
const { getLevel } = require('../functions/getLevel.js');
const { getProfile } = require('../functions/getProfile.js');
const { getSearch } = require('../functions/getSearch.js');
 
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
            )
        .addSubcommand(subcommand => 
            subcommand
                .setName('searchengine')
                .setDescription('Shows the 5 results of a search')
                .addStringOption(option => option.setName('query').setDescription('Your query').setRequired(true))
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
                    var lvidnotvalid = res.error

                    const searchlv = new MessageEmbed()
                        .setColor('#ff9900')
                        .setAuthor({ name: 'Geometry Dash Levels', iconURL: 'https://i.redd.it/r6vfj5fbktg41.jpg' })
                        .setTitle(`${levelname} by ${lvauthor}`)
                        .addFields(
                            { name: 'Difficulty <:testbotassets_gjeasy:954441110636343297>', value: `${lvdifficulty}`, inline: true },
                            { name: 'Description <:testbotassets_gjinfo:954441110707634206>', value: `${lvdescription}`, inline: true },
                            { name: 'Downloads <:testbotassets_gjdownloads:954441110724415538>', value: `${lvdownloads}`, inline: true },
                            { name: 'Likes <:testbotassets_gjlikes:954441110787342346>', value: `${lvlikes}`, inline: true },
                            { name: 'SongID <:testbotassets_gjsong:954441111072559154>', value: `${lvsongid}`, inline: true },
                            { name: 'Song Author <:testbotassets_gjngsong:954441111039004693>', value: `${lvsongauthor}`, inline: true },
                        )
                        .setFooter({ text: 'Provided by gdbrowser.com made by GDColon'})
                    
                    // Check if the levelID is valid | Eu não tenho a menor ideia de como isso funciona, mas é o copilot né :shrug:
                    if (lvidnotvalid == undefined) {
                        interaction.reply({ embeds: [searchlv] });
                    } else {
                        interaction.reply({ content: `${lvidnotvalid}`, ephemeral: true });
                    }
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
                        .setAuthor({ name: 'Geometry Dash Players', iconURL: 'https://i.redd.it/r6vfj5fbktg41.jpg' })
                        .setTitle(`${userName}`)
                        .addFields(
                            { name: 'User ID <:testbotassets_gjinfo:954441110707634206>' , value: `${userID}` , inline: true },
                            { name: 'Stars <:testbotassets_gjstars:954441110778970204>', value: `${userStars}` , inline: true },
                            { name: 'Diamonds <:testbotassets_gjdiamonds:954441111051587584>', value: `${userDiamonds}`, inline: true },
                            { name: 'Coins <:testbotassets_gjcoins:954441110590214254>', value: `${gameCoins}`, inline: true },
                            { name: 'User Coins <:testbotassets_gjusercoins:954441111148044288>', value: `${userCoins}`, inline: true },
                            { name: 'Demons <:testbotassets_gjdemons:954441110757965874>', value: `${userDemons}`, inline: true }
                        )
                        .setFooter({ text: 'Provided by gdbrowser.com made by GDColon'})

                    interaction.reply({ embeds: [account] })
                })
            } else if (interaction.options.getSubcommand() === "searchengine") {
                const search = interaction.options.getString("query");
                getSearch(search).then(res => {
                    const lvname = res.map(x => x.name);
                    const lvauthor = res.map(x => x.author);
                    const lvid = res.map(x => x.id);   
                    const lvdifficulty = res.map(x => x.difficulty);  
        
                    const searchlv = new MessageEmbed()
                        .setColor("#ff9900")
                        .setAuthor({ name: "Geometry Dash Search Engine", iconURL: "https://i.redd.it/r6vfj5fbktg41.jpg" })
                        .setTitle(`${search}`)
                        .setDescription("**=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=**")
                        .addFields(
                            { name: `${lvname[0]} by ${lvauthor[0]}`, value: `ID: ${lvid[0]}, Difficulty: ${lvdifficulty[0]}`},
                            { name: `${lvname[1]} by ${lvauthor[1]}`, value: `ID: ${lvid[1]}, Difficulty: ${lvdifficulty[1]}`},
                            { name: `${lvname[2]} by ${lvauthor[2]}`, value: `ID: ${lvid[2]}, Difficulty: ${lvdifficulty[2]}`},
                            { name: `${lvname[3]} by ${lvauthor[3]}`, value: `ID: ${lvid[3]}, Difficulty: ${lvdifficulty[3]}`},
                            { name: `${lvname[4]} by ${lvauthor[4]}`, value: `ID: ${lvid[4]}, Difficulty: ${lvdifficulty[4]}`},
                        )
                    interaction.reply({ embeds: [searchlv] });
                })
            }
	}
};
