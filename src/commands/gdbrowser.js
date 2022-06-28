const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');
const { getLevel } = require('../functions/getLevel.js');
const { getProfile } = require('../functions/getProfile.js');
const { getSearch } = require('../functions/getSearch.js');
const { getCreatorLB } = require('../functions/getCreatorLB.js');
const { getPlayerLB } = require('../functions/getPlayerLB.js');
const { colours } = require('../config.json');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('gdbrowser')
        .setDescription('A browser for Geometry Dash')
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
            )
        .addSubcommand(subcommand =>
            subcommand
                .setName('playerlb')
                .setDescription('Shows the ACCURATE player leaderboard')
            )
        .addSubcommand(subcommand =>
            subcommand
                .setName('creatorlb')
                .setDescription('Shows the creator leaderboard')
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

                    var difficultyemoji = "";

                    switch (lvdifficulty) {
                        case 'Auto':
                            difficultyemoji = "<:testbotassets_auto:966866685762080830> ";
                            break;
                        case "Easy":
                            difficultyemoji = "<:testbotassets_easy:954441110636343297>";
                            break;
                        case "Normal":
                            difficultyemoji = " <:testbotassets_normal:966866014455337000> ";
                            break;
                        case "Hard":
                            difficultyemoji = "<:testbotassets_hard:966865717033058364>";
                            break;
                        case "Harder":
                            difficultyemoji = "<:testbotassets_harder:966865716546519070> ";
                            break;
                        case "Insane":
                            difficultyemoji = "<:testbotassets_insane:966865716672356472>";
                            break;
                        case "Easy Demon":
                            difficultyemoji = "<:testbotassets_easydemon:966865717939015772>";
                            break;
                        case "Medium Demon":
                            difficultyemoji = "<:testbotassets_mediumdemon:966865716307439677>";
                            break;
                        case "Hard Demon":
                            difficultyemoji = "<:testbotassets_gjdemons:954441110757965874> ";
                            break;
                        case "Insane Demon":
                            difficultyemoji = "<:testbotassets_insanedemon:966865716458430504>";
                            break;
                        case "Extreme Demon":
                            difficultyemoji = "<:testbotassets_extremedemon:966865716261318676>";
                            break;
                        default:
                            difficultyemoji = "<:testbotassets_na:966867205843202098>";
                            break;
                    }
                    const searchlv = new MessageEmbed()
                        .setColor(`${colours.success}`)
                        .setAuthor({ name: 'Geometry Dash Levels', iconURL: 'https://i.redd.it/r6vfj5fbktg41.jpg' })
                        .setTitle(`${levelname} by ${lvauthor}`)
                        .addFields(
                            { name: `Difficulty ${difficultyemoji}`, value: `${lvdifficulty}`, inline: true },
                            { name: 'Description <:testbotassets_gjinfo:954441110707634206>', value: `${lvdescription}`, inline: true },
                            { name: 'Downloads <:testbotassets_gjdownloads:954441110724415538>', value: `${lvdownloads}`, inline: true },
                            { name: 'Likes <:testbotassets_gjlikes:954441110787342346>', value: `${lvlikes}`, inline: true },
                            { name: 'SongID <:testbotassets_gjsong:954441111072559154>', value: `${lvsongid}`, inline: true },
                            { name: 'Song Author <:testbotassets_gjngsong:954441111039004693>', value: `${lvsongauthor}`, inline: true },
                        )
                        .setFooter({ text: 'Powered by gdbrowser.com made by GDColon'})

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
                        .setColor(`${colours.success}`)
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
                        .setFooter({ text: 'Powered by gdbrowser.com made by GDColon'})

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
                        .setColor(`${colours.success}`)
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
                        .setFooter({ text: 'Powered by gdbrowser.com made by GDColon'})

                    interaction.reply({ embeds: [searchlv] });
                })
            } else if (interaction.options.getSubcommand() === "playerlb") {
                getPlayerLB(10).then(res => {
                    const lbname = res.map(x => x.username);
                    const lbrank = res.map(x => x.rank);
                    const lbstars = res.map(x => x.stars);
                    const lbid = res.map(x => x.accountID);

                    const playerlb = new MessageEmbed()
                        .setColor(`${colours.success}`)
                        .setAuthor({ name: "Geometry Dash Player Leaderboard", iconURL: "https://i.redd.it/r6vfj5fbktg41.jpg" })
                        .setTitle(`Top 10 Players`)
                        .setDescription("**=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=**")
                        .addFields(
                            { name: `${lbname[0]}`, value: `Rank: ${lbrank[0]}, Stars: ${lbstars[0]}, ID: ${lbid[0]}`},
                            { name: `${lbname[1]}`, value: `Rank: ${lbrank[1]}, Stars: ${lbstars[1]}, ID: ${lbid[1]}`},
                            { name: `${lbname[2]}`, value: `Rank: ${lbrank[2]}, Stars: ${lbstars[2]}, ID: ${lbid[2]}`},
                            { name: `${lbname[3]}`, value: `Rank: ${lbrank[3]}, Stars: ${lbstars[3]}, ID: ${lbid[3]}`},
                            { name: `${lbname[4]}`, value: `Rank: ${lbrank[4]}, Stars: ${lbstars[4]}, ID: ${lbid[4]}`},
                            { name: `${lbname[5]}`, value: `Rank: ${lbrank[5]}, Stars: ${lbstars[5]}, ID: ${lbid[5]}`},
                            { name: `${lbname[6]}`, value: `Rank: ${lbrank[6]}, Stars: ${lbstars[6]}, ID: ${lbid[6]}`},
                            { name: `${lbname[7]}`, value: `Rank: ${lbrank[7]}, Stars: ${lbstars[7]}, ID: ${lbid[7]}`},
                            { name: `${lbname[8]}`, value: `Rank: ${lbrank[8]}, Stars: ${lbstars[8]}, ID: ${lbid[8]}`},
                            { name: `${lbname[9]}`, value: `Rank: ${lbrank[9]}, Stars: ${lbstars[9]}, ID: ${lbid[9]}`},
                        )
                        .setFooter({ text: 'Powered by gdbrowser.com made by GDColon'})

                    interaction.reply({ embeds: [playerlb] });
                })
            } else if (interaction.options.getSubcommand() === "creatorlb") {
                getCreatorLB(10).then(res => {
                    const crusername = res.map(x => x.username);
                    const crrank = res.map(x => x.rank);
                    const crcp = res.map(x => x.cp);
                    const crid = res.map(x => x.accountID);

                    const creatorlb = new MessageEmbed()
                        .setColor("#ff9900")
                        .setAuthor({ name: "Geometry Dash Creator Leaderboard", iconURL: "https://i.redd.it/r6vfj5fbktg41.jpg" })
                        .setTitle(`Top 10 Creators`)
                        .setDescription("**=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=**")
                        .addFields(
                            { name: `${crusername[0]}`, value: `Rank: ${crrank[0]}, CP: ${crcp[0]}, ID: ${crid[0]}`},
                            { name: `${crusername[1]}`, value: `Rank: ${crrank[1]}, CP: ${crcp[1]}, ID: ${crid[1]}`},
                            { name: `${crusername[2]}`, value: `Rank: ${crrank[2]}, CP: ${crcp[2]}, ID: ${crid[2]}`},
                            { name: `${crusername[3]}`, value: `Rank: ${crrank[3]}, CP: ${crcp[3]}, ID: ${crid[3]}`},
                            { name: `${crusername[4]}`, value: `Rank: ${crrank[4]}, CP: ${crcp[4]}, ID: ${crid[4]}`},
                            { name: `${crusername[5]}`, value: `Rank: ${crrank[5]}, CP: ${crcp[5]}, ID: ${crid[5]}`},
                            { name: `${crusername[6]}`, value: `Rank: ${crrank[6]}, CP: ${crcp[6]}, ID: ${crid[6]}`},
                            { name: `${crusername[7]}`, value: `Rank: ${crrank[7]}, CP: ${crcp[7]}, ID: ${crid[7]}`},
                            { name: `${crusername[8]}`, value: `Rank: ${crrank[8]}, CP: ${crcp[8]}, ID: ${crid[8]}`},
                            { name: `${crusername[9]}`, value: `Rank: ${crrank[9]}, CP: ${crcp[9]}, ID: ${crid[9]}`},
                        )
                        .setFooter({ text: 'Powered by gdbrowser.com made by GDColon'})

                    interaction.reply({ embeds: [creatorlb] });
                })

            }
		}
};
