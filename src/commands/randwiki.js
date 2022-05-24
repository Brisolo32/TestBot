const { MessageEmbed } = require('discord.js');
const { SlashCommandBuilder } = require('@discordjs/builders');

const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

module.exports = {
    data: new SlashCommandBuilder()
        .setName('randwiki')
        .setDescription('Envia uma wiki do WikiHow resumida com link pra página completa')
        .addStringOption(option =>
            option
                .setName('lang')
                .setDescription('The language of the wiki')
                .addChoice('Português', 'pt')
                .addChoice('English', 'en')
                .addChoice('Español', 'es')
                .addChoice('Русский', 'ru')
                .setRequired(true)),
	  async execute (interaction) {
        const lang = interaction.options.getString('lang');

        // Welcome to Boilerplate land! Population: me
        if (lang === 'pt') {
          // Fetch a random wiki from WikiHow's API and also the full page (as HTML)
          const ptUri = 'https://pt.wikihow.com/api.php?format=json&action=';
  
          const wikiRnd = await fetch(`${ptUri}query&list=random&rnnamespace=0&rnlimit=1`)
          let wkJSON = await wikiRnd.json();

          // Get the title and id of the wiki
          let wkTitle = wkJSON.query.random[0].title;
          let wkId = wkJSON.query.random[0].id;  

          // Fetch the full page as HTML
          const wikiFull = await fetch(`${ptUri}parse&prop=text&mobileformat&pageid=${wkId}`);
          let w = await wikiFull.json();
          const wh = w.parse.text['*'];
          let wikiHtml = wh.toString();
          let wikiP = wikiHtml.split('<p>')[1].split('</p>')[0];

          // Send the wiki's embed
          const wikiEmbed = new MessageEmbed()
            .setColor('#97ff63')
            .setAuthor({ name: 'RandWiki PT', iconURL: 'https://upload.wikimedia.org/wikipedia/commons/f/fb/WikiHow_initials.png' })
            .setTitle(`${wkTitle}`)
            .setDescription(`Sinopse:\n${wikiP}`)
            .setFooter({ text: 'Providenciado por pt.wikihow.com', iconURL: 'https://upload.wikimedia.org/wikipedia/commons/f/fb/WikiHow_initials.png' })         

          interaction.reply({ embeds: [wikiEmbed] });
        } else if (lang === 'en') {
          // Fetch a random wiki from WikiHow's API and also the full page (as HTML)
          const enUri = 'https://www.wikihow.com/api.php?format=json&action=';
  
          const wikiRnd = await fetch(`${enUri}query&list=random&rnnamespace=0&rnlimit=1`)
          let wkJSON = await wikiRnd.json();

          // Get the title and id of the wiki
          let wkT = wkJSON.query.random[0].title;
          let wkTitle = wkT.charAt(0).toUpperCase() + wkT.slice(1);
          let wkId = wkJSON.query.random[0].id;  

          // Fetch the full page as HTML
          const wikiFull = await fetch(`${enUri}parse&prop=text&mobileformat&pageid=${wkId}`);
          let w = await wikiFull.json();
          const wh = w.parse.text['*'];
          let wikiHtml = wh.toString();
          let wikiP = wikiHtml.split('<p>')[1].split('</p>')[0];

          // Send the wiki's embed
          const wikiEmbed = new MessageEmbed()
            .setColor('#97ff63')
            .setAuthor({ name: 'RandWiki EN', iconURL: 'https://upload.wikimedia.org/wikipedia/commons/f/fb/WikiHow_initials.png' })
            .setTitle(`${wkTitle}`)
            .setDescription(`Synopsis:\n${wikiP}`)
            .setFooter({ text: 'Powerered by www.wikihow.com', iconURL: 'https://upload.wikimedia.org/wikipedia/commons/f/fb/WikiHow_initials.png' })         

          interaction.reply({ embeds: [wikiEmbed] });
        } else if (lang === 'es') {
          // Fetch a random wiki from WikiHow's API and also the full page (as HTML)
          const esUri = 'https://es.wikihow.com/api.php?format=json&action=';
  
          const wikiRnd = await fetch(`${esUri}query&list=random&rnnamespace=0&rnlimit=1`)
          let wkJSON = await wikiRnd.json();

          // Get the title and id of the wiki
          let wkT = wkJSON.query.random[0].title;
          let wkTitle = wkT.charAt(0).toUpperCase() + wkT.slice(1);
          let wkId = wkJSON.query.random[0].id;  

          // Fetch the full page as HTML
          const wikiFull = await fetch(`${esUri}parse&prop=text&mobileformat&pageid=${wkId}`);
          let w = await wikiFull.json();
          const wh = w.parse.text['*'];
          let wikiHtml = wh.toString();
          let wikiP = wikiHtml.split('<p>')[1].split('</p>')[0];

          // Send the wiki's embed
          const wikiEmbed = new MessageEmbed()
            .setColor('#97ff63')
            .setAuthor({ name: 'RandWiki ES', iconURL: 'https://upload.wikimedia.org/wikipedia/commons/f/fb/WikiHow_initials.png' })
            .setTitle(`${wkTitle}`)
            .setDescription(`Sinopsis:\n${wikiP}`)
            .setFooter({ text: 'Proporcionado por es.wikihow.com', iconURL: 'https://upload.wikimedia.org/wikipedia/commons/f/fb/WikiHow_initials.png' })         

          interaction.reply({ embeds: [wikiEmbed] });
        } else if (lang === 'ru') {
          // Fetch a random wiki from WikiHow's API and also the full page (as HTML)
          const ruUri = 'https://ru.wikihow.com/api.php?format=json&action=';
  
          const wikiRnd = await fetch(`${ruUri}query&list=random&rnnamespace=0&rnlimit=1`)
          let wkJSON = await wikiRnd.json();

          // Get the title and id of the wiki
          let wkT = wkJSON.query.random[0].title;
          let wkTitle = wkT.charAt(0).toUpperCase() + wkT.slice(1);
          let wkId = wkJSON.query.random[0].id;

          // Fetch the full page as HTML
          const wikiFull = await fetch(`${ruUri}parse&prop=text&mobileformat&pageid=${wkId}`);
          let w = await wikiFull.json();
          const wh = w.parse.text['*'];
          let wikiHtml = wh.toString();
          let wikiP = wikiHtml.split('<p>')[1].split('</p>')[0];

          // Send the wiki's embed
          const wikiEmbed = new MessageEmbed()
            .setColor('#97ff63')
            .setAuthor({ name: 'RandWiki РУ', iconURL: 'https://upload.wikimedia.org/wikipedia/commons/f/fb/WikiHow_initials.png' })
            .setTitle(`${wkTitle}`)
            .setDescription(`Синопсис:\n${wikiP}`)
            .setFooter({ text: 'Предоставлено ru.wikihow.com', iconURL: 'https://upload.wikimedia.org/wikipedia/commons/f/fb/WikiHow_initials.png' })         

          interaction.reply({ embeds: [wikiEmbed] });
        }
		}
};