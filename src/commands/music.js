const { SlashCommandBuilder, codeBlock } = require("@discordjs/builders");
const { MessageEmbed } = require('discord.js');
const { colours } = require('../config.json');
const { Player } = require("discord-music-player")
const ytsearch = require('yt-search');
const client = require('../main.js')

const player = new Player(client, {
    leaveOnEmpty: false,
    leaveOnEnd: false,
});

client.player = player;
module.exports = {
    data: new SlashCommandBuilder()
        .setName("music")
        .setDescription("A big 'ol music command set")
        .addSubcommand(subcommand =>
            subcommand
                .setName("play")
                .setDescription("Plays a song")
                .addStringOption(option => option.setName("song").setDescription("The music's name or URL").setRequired(true))
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName("remove")
                .setDescription("Removes a song from the queue")
                .addStringOption(option => option.setName("song").setDescription("The music's number").setRequired(true))
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName("pause")   
                .setDescription("Pause the music")
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName("resume")
                .setDescription("Resume the music")
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName("stop")
                .setDescription("Stops the music")
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName("skip")
                .setDescription("Skips the music")
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName("queue")
                .setDescription("Shows the queue")
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName("nowplaying")
                .setDescription("Shows the current song")     
        ),
        async execute (interaction){
            const musicnm = interaction.options.getString("song");
            const channel = interaction.member.voice.channel;
            if (!channel) return interaction.reply({ content: "You need to be in a voice channel to use this command", ephemeral: true });
            let guildQueue = player.getQueue(interaction.guild.id);
            
                switch (interaction.options.getSubcommand()) {
                    case "play":
                        var yt = await ytsearch(musicnm)
                        var ytauthor = yt.videos[0].author.name;
                        var ytname = yt.videos[0].title;
                        var ytimestamp = yt.videos[0].timestamp;

                        const loadinge = new MessageEmbed()
                            .setColor(`${colours.loading}`)
                            .setTitle(`Loading <a:testbotassets_loadinggiff:966861157140946954>>`)
            
                        interaction.reply({ embeds: [loadinge] });
            
                        let queue = player.createQueue(interaction.guild.id);
                        await queue.join(channel);
                        let song = await queue.play(musicnm).catch(_ => {
                            if (!guildQueue) {
                                queue.stop()
                            }
                        })
            
                        const embed = new MessageEmbed()
                            .setTitle("Playing")
                            .addFields(
                                { name: "Name", value: `${ytname}`},
                                { name: "Author", value: `${ytauthor}`},
                                { name: "Time", value: `${ytimestamp}`},
                                { name: "Added by", value: `${interaction.member.displayName}`},
                            )
                            .setColor(`${colours.success}`)
                        
                        interaction.editReply({ content: 'ㅤ', embeds: [embed] });
                        break;
                    case "pause":
                        guildQueue.setPaused(true);
            
                        const pauseembed = new MessageEmbed()
                            .setTitle("Paused")
                            .setDescription('Paused the music')
                            .setColor(`${colours.success}`)
                        await interaction.reply({ embeds: [pauseembed] });
                        break;
                    case "resume":
                        guildQueue.setPaused(false);
            
                        const resumeembed = new MessageEmbed()
                            .setTitle("Resumed")
                            .setDescription('Resumed the music')
                            .setColor(`${colours.success}`)
                        
                        await interaction.reply({ embeds: [resumeembed] });
                        break;
                    case "stop":
                        guildQueue.stop();
            
                        const stopembed = new MessageEmbed()
                            .setTitle("Stopped")
                            .setDescription("Audio player went kaboom")
                            .setColor(`${colours.success}`)
                        await interaction.reply({ embeds: [stopembed] });
                        break;
                    case "skip":
                        guildQueue.skip();
            
                        const skipembed = new MessageEmbed()
                            .setTitle("Skipped")
                            .setDescription("Skipped the music")
                            .setColor(`${colours.success}`)
            
                        await interaction.reply({ embeds: [skipembed] });
                        break;
                    case "queue":
                        const getqueue = guildQueue
                
                        let response = ``;
                
                        for (let i = 0; i < getqueue.songs.length; i++) {
                            response += `${i}) ${getqueue.songs[i].name}\n`;
                            // Replace the "0)" with "Now playing" and add another line break using regex
                            if (i === 0) {
                                response = response.replace(/0\)/g, `# Now playing: `);
                                response += `\n`;
                            }

                            res = codeBlock('cs', response);
                        }
            
                        const queueembed = new MessageEmbed()
                            .setTitle("Queue")
                            .setDescription(res)
                            .setColor(`${colours.success}`)
                        await interaction.reply({ embeds: [queueembed] });
                        break;
                    case "remove":
                        const number = interaction.options.getString("song");
                        guildQueue.remove(parseInt(number));
            
                        interaction.reply({ content: `Removed ${number} from the queue` });
                        break;
                    case "nowplaying":
                        const progressbar = guildQueue.createProgressBar();
                        const nowplayingembed = new MessageEmbed()
                            .setTitle("Now playing")
                            .addFields(
                                { name: "Name", value: `${guildQueue.nowPlaying.name}`},
                                { name: "Author", value: `${guildQueue.nowPlaying.author}`},
                                { name: "Time", value: `${guildQueue.nowPlaying.duration}`},
                                { name: "Added by", value: `${interaction.member.displayName}`},
                                { name: "Progress", value: `${progressbar}`},
                            )
                            .setColor(`${colours.success}`)
            
                        interaction.reply({ embeds: [nowplayingembed] });
                        break;
                    default:
                        console.log('how the fuck did someone broke this?')
                        break;
                }
            
        }

}