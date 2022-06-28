// Shortened the code by a lot
const { MessageEmbed } = require('discord.js');
const { SlashCommandBuilder } = require('@discordjs/builders');

const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

async function getWiki(uri) {
  const wikiRnd = await fetch(`${uri}query&list=random&rnnamespace=0&rnlimit=1`)
  let wkJSON = await wikiRnd.json();

  // Get the title and id of the wiki
  let wkTitle = wkJSON.query.random[0].title.charAt(0).toUpperCase() + wkJSON.query.random[0].title.slice(1);
  let wkId = wkJSON.query.random[0].id;

  // Fetch the full page as HTML
  const wikiHTML = await fetch(`${uri}parse&prop=text&mobileformat&pageid=${wkId}`);
  let wiki = await wikiHTML.json();
  const wikiText = wiki.parse.text['*'];
  let w = wikiText.toString();

  // Select only the first paragraph
  let wikiH = w.split(/\<\/?p\>/)[1]
  let wikiP = wikiH.replace(/(\<sup\>(.*?)\<\/?sup\>)/g, ''); // Starting to understand regex

  // Return the title and the page
  return {
    title: wkTitle,
    page: wikiP
  }
}

module.exports = {
    data: new SlashCommandBuilder()
        .setName('randwiki')
        .setDescription('Envia uma wiki do WikiHow resumida com link pra página completa')
        .addStringOption(option =>
            option
                .setName('lang')
                .setDescription('The language of the wiki')
                .addChoices({
                    name: 'Português',
                    value: 'pt'
                }, {
                    name: 'English',
                    value: 'en'
                }, {
                    name: 'Español',
                    value: 'es'
                }, {
                    name: 'Русский',
                    value: 'ru'
                })
                .setRequired(true)),
	  async execute (interaction) {
        const lang = interaction.options.getString('lang');
        if (lang === 'pt') {
          // This will repeat a lot, got it?
          // Define the wikihow uri for the language
          const ptUri = 'https://pt.wikihow.com/api.php?format=json&action=';

          // Get the wiki
          const wiki = await getWiki(ptUri);

          // Send the wiki's embed
          const wikiEmbed = new MessageEmbed()
            .setColor('#97ff63')
            .setAuthor({ name: 'RandWiki PT', iconURL: 'https://upload.wikimedia.org/wikipedia/commons/f/fb/WikiHow_initials.png' })
            .setTitle(`${wiki.title}`)
            .setDescription(`Sinopse:\n${wiki.page}`)
            .setFooter({ text: 'Providenciado por pt.wikihow.com', iconURL: 'https://upload.wikimedia.org/wikipedia/commons/f/fb/WikiHow_initials.png' })

          interaction.reply({ embeds: [wikiEmbed] });
        } else if (lang === 'en') {
          // Fetch a random wiki from WikiHow's API and also the full page (as HTML)
          const enUri = 'https://www.wikihow.com/api.php?format=json&action=';

          // Get the wiki
          const wiki = await getWiki(enUri);

          // Send the wiki's embed
          const wikiEmbed = new MessageEmbed()
            .setColor('#97ff63')
            .setAuthor({ name: 'RandWiki EN', iconURL: 'https://upload.wikimedia.org/wikipedia/commons/f/fb/WikiHow_initials.png' })
            .setTitle(`${wiki.title}`)
            .setDescription(`Synopsis:\n${wiki.page}`)
            .setFooter({ text: 'Powerered by www.wikihow.com', iconURL: 'https://upload.wikimedia.org/wikipedia/commons/f/fb/WikiHow_initials.png' })

          interaction.reply({ embeds: [wikiEmbed] });
        } else if (lang === 'es') {
          // Fetch a random wiki from WikiHow's API and also the full page (as HTML)
          const esUri = 'https://es.wikihow.com/api.php?format=json&action=';

          // Get the wiki
          const wiki = await getWiki(esUri);

          // Send the wiki's embed
          const wikiEmbed = new MessageEmbed()
            .setColor('#97ff63')
            .setAuthor({ name: 'RandWiki ES', iconURL: 'https://upload.wikimedia.org/wikipedia/commons/f/fb/WikiHow_initials.png' })
            .setTitle(`${wiki.title}`)
            .setDescription(`Sinopsis:\n${wiki.page}`)
            .setFooter({ text: 'Proporcionado por es.wikihow.com', iconURL: 'https://upload.wikimedia.org/wikipedia/commons/f/fb/WikiHow_initials.png' })

          interaction.reply({ embeds: [wikiEmbed] });
        } else if (lang === 'ru') {
          // Fetch a random wiki from WikiHow's API and also the full page (as HTML)
          const ruUri = 'https://ru.wikihow.com/api.php?format=json&action=';

          // Get the wiki
          const wiki = await getWiki(ruUri);

          // Send the wiki's embed
          const wikiEmbed = new MessageEmbed()
            .setColor('#97ff63')
            .setAuthor({ name: 'RandWiki РУ', iconURL: 'https://upload.wikimedia.org/wikipedia/commons/f/fb/WikiHow_initials.png' })
            .setTitle(`${wiki.title}`)
            .setDescription(`Синопсис:\n${wiki.page}`)
            .setFooter({ text: 'Предоставлено ru.wikihow.com', iconURL: 'https://upload.wikimedia.org/wikipedia/commons/f/fb/WikiHow_initials.png' })

          interaction.reply({ embeds: [wikiEmbed] });
        }
		}
};
