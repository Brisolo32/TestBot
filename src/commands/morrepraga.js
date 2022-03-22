const Canvas = require('canvas')
const { MessageAttachment, MessageEmbed } = require('discord.js');
const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {

	data: new SlashCommandBuilder()
		.setName('morrepraga')
		.setDescription('MORRE PRAGA! | DIE PLAGUE!')
		.addUserOption(option => 
			option
			.setName('target')
			.setDescription('Selecione o usuário | Select the User')
			.setRequired(true)),
	async execute (interaction) {
            // Essential stuff to make this shit work
            const member = interaction.options.getMember("target");
            
            // Canvas
            const canvas = Canvas.createCanvas(899, 549);
            const ctx = canvas.getContext('2d');
            const avatar = await Canvas.loadImage(member.user.displayAvatarURL({ format: 'jpg' }));
            const background = await Canvas.loadImage('./assets/morrepraga.png');
    
            ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
            ctx.drawImage(avatar, 105, 160, 250, 250);

            const attachment = new MessageAttachment(canvas.toBuffer(), 'morre-praga.png');
    
            const morrepraga = new MessageEmbed()
                  .setImage('attachment://profile-image.png')

            interaction.reply({ embed: [morrepraga], files: [attachment] });
		}
};