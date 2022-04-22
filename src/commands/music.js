const { SlashCommandBuilder } = require("@discordjs/builders");
const { MessageEmbed } = require('discord.js');
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
        .setDescription("Um monte de comandos de musica | A big 'ol music command set")
        .addSubcommand(subcommand =>
            subcommand
                .setName("play")
                .setDescription("Toca uma musica | Play a song")
                .addStringOption(option => option.setName("song").setDescription("O nome da musica ou o link da musica").setRequired(true))
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName("remove")
                .setDescription("Remove uma musica da fila | Removes a song from the queue")
                .addIntegerOption(option => option.setName("song").setDescription("O numero da musica | The music's number").setRequired(true))
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName("pause")   
                .setDescription("Pausa a musica | Pause the music")
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName("resume")
                .setDescription("Resume a musica | Resume the music")
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName("stop")
                .setDescription("Para a musica | Stops the music")
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName("skip")
                .setDescription("Pula a musica | Skips the music")
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName("queue")
                .setDescription("Mostra a fila | Shows the queue")
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName("nowplaying")
                .setDescription("Mostra a musica atual | Shows the current song")     
        ),
        async execute (interaction){
            const musicnm = interaction.options.getString("song");
            const channel = interaction.member.voice.channel;
            if (!channel) return interaction.reply({ content: "Você precisa estar em um canal de voz para usar este comando\nYou need to be in a voice channel to use this command", ephemeral: true });
            let guildQueue = player.getQueue(interaction.guild.id);
            
                switch (interaction.options.getSubcommand()) {
                    case "play":
                        var yt = await ytsearch(musicnm)
                        var ytauthor = yt.videos[0].author.name;
                        var ytname = yt.videos[0].title;
                        var ytimestamp = yt.videos[0].timestamp;
            
                        interaction.reply(`Carregando | Loading <a:testbotassets_loadinggiff:966861157140946954>`);
            
                        let queue = player.createQueue(interaction.guild.id);
                        await queue.join(channel);
                        let song = await queue.play(musicnm).catch(_ => {
                            if (!guildQueue) {
                                queue.stop()
                            }
                        })
            
                        const embed = new MessageEmbed()
                            .setTitle("Tocando | Playing")
                            .addFields(
                                { name: "Nome | Name", value: `${ytname}`},
                                { name: "Autor | Author", value: `${ytauthor}`},
                                { name: "Tempo | Time", value: `${ytimestamp}`},
                                { name: "Adicionado por | Added by", value: `${interaction.member.displayName}`},
                            )
                            .setColor("#ff0000")
                        
                        interaction.editReply({ content: 'ㅤ', embeds: [embed] });
                        break;
                    case "pause":
                        guildQueue.setPaused(true);
            
                        const pauseembed = new MessageEmbed()
                            .setTitle("Pausado | Paused")
                            .setDescription('Pausou a musica | Paused the music')
                            .setColor("#ff0000")
                        await interaction.reply({ embeds: [pauseembed] });
                        break;
                    case "resume":
                        guildQueue.setPaused(false);
            
                        const resumeembed = new MessageEmbed()
                            .setTitle("Resumido | Resumed")
                            .setDescription('Resumiu a musica | Resumed the music')
                            .setColor("#ff0000")
                        
                        await interaction.reply({ embeds: [resumeembed] });
                        break;
                    case "stop":
                        guildQueue.stop();
            
                        const stopembed = new MessageEmbed()
                            .setTitle("Parado | Stopped")
                            .setDescription("Player de audio foi kabum | Audio player went kaboom")
                            .setColor("#ff0000")
                        await interaction.reply({ embeds: [stopembed] });
                        break;
                    case "skip":
                        guildQueue.skip();
            
                        const skipembed = new MessageEmbed()
                            .setTitle("Pulado | Skipped")
                            .setDescription("Pulou a musica | Skipped the music")
                            .setColor("#ff0000")
            
                        await interaction.reply({ embeds: [skipembed] });
                        break;
                    case "queue":
                        const getqueue = guildQueue
                
                        let response = ``;
                
                        for (let i = 0; i < getqueue.songs.length; i++) {
                            response += `${i + 1}. ${getqueue.songs[i].name} - ${getqueue.songs[i].author}\n`;
                        }
            
                        const queueembed = new MessageEmbed()
                            .setTitle("Fila | Queue")
                            .setDescription(response)
                            .setColor("#ff0000")
                        await interaction.reply({ embeds: [queueembed] });
                        break;
                    case "remove":
                        const number = interaction.options.getInteger("song");
                        guildQueue.remove(number);
            
                        interaction.reply({ content: `Removeu ${number} da fila | Removed ${number} from the queue` });
                        break;
                    case "nowplaying":
                        const progressbar = guildQueue.createProgressBar();
                        const nowplayingembed = new MessageEmbed()
                            .setTitle("Tocando agora | Now playing")
                            .addFields(
                                { name: "Nome | Name", value: `${guildQueue.nowPlaying.name}`},
                                { name: "Autor | Author", value: `${guildQueue.nowPlaying.author}`},
                                { name: "Tempo | Time", value: `${guildQueue.nowPlaying.duration}`},
                                { name: "Adicionado por | Added by", value: `${interaction.member.displayName}`},
                                { name: "Progresso | Progress", value: `${progressbar}`},
                            )
                            .setColor("#ff0000")
            
                        interaction.reply({ embeds: [nowplayingembed] });
                        break;
                    default:
                        interaction.reply("Comando não encontrado!\nCommand not found!");
                        break;
                }
            
        }

}