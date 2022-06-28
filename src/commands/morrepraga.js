const Canvas = require('canvas')
const { MessageAttachment, MessageEmbed } = require('discord.js');
const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('morrepraga')
		.setDescription('MORRE PRAGA!')
		.addUserOption(option =>
			option
			.setName('user_img')
			.setDescription('Select the User')
			.setRequired(false))
		.addAttachmentOption(option =>
			option
			.setName('img_file')
			.setDescription('Select the image file')
			.setRequired(false)),
	async execute (interaction) {
            // Essential stuff to make this shit work
            const member = interaction.options.getMember('user_img');
			const img = interaction.options.getAttachment('img_file')

			if (member) {
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
			} else if (img) {
				if (img.contentType == 'image/webp') {
					interaction.reply({
						content: 'We don\'t support that format for now',
						ephemeral: true
					})
				}

				const canvas = Canvas.createCanvas(899, 549);
				const ctx = canvas.getContext('2d');
				const avatar = await Canvas.loadImage(image);
				const background = await Canvas.loadImage('./assets/morrepraga.png');

				ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
				ctx.drawImage(avatar, 105, 160, 250, 250);

				const attachment = new MessageAttachment(canvas.toBuffer(), 'morre-praga.png');

				const morrepraga = new MessageEmbed()
					  .setImage('attachment://profile-image.png')

				interaction.reply({ embed: [morrepraga], files: [attachment] });
			} else {
				const canvas = Canvas.createCanvas(899, 549);
				const ctx = canvas.getContext('2d');
				const avatar = await Canvas.loadImage(interaction.user.displayAvatarURL({ format: 'jpg' }));
				const background = await Canvas.loadImage('./assets/morrepraga.png');

				ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
				ctx.drawImage(avatar, 105, 160, 250, 250);

				const attachment = new MessageAttachment(canvas.toBuffer(), 'morre-praga.png');

				const morrepraga = new MessageEmbed()
					  .setImage('attachment://profile-image.png')

				interaction.reply({ embed: [morrepraga], files: [attachment] });
			}
		}
};
