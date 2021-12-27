/*
	TODO:
		(X) Make more wikihow embeds
		(X) Make the Update embed
*/

// Pegue as classes nessesárias para funcionar
const fs = require('fs');
const { Client, Intents, MessageEmbed } = require('discord.js');
const { token, webhookId, webhookToken } = require('./config.json');

// Embeds
// About
const aboutembed = new MessageEmbed()
	.setColor('#004bb5')
	.setAuthor('Sobre o bot | About the bot', 'https://cdn.discordapp.com/app-icons/922283721791504426/ba24abb016d5986dc74643ad5bbf6b70.png?size=256')
	.setDescription('EN-US\nBot Creator: Brisolo32#2968\n Some ideas: Sussy_Oreo#6827\nBig Help: StackOverflow\n\nPT-BR\nCriador do bot: Brisolo32#2968\nAlgumas ideias: Sussy_Oreo#6827\nAjuda pra caralho: StackOverflow')
	.setThumbnail('https://cdn.discordapp.com/app-icons/922283721791504426/ba24abb016d5986dc74643ad5bbf6b70.png?size=256')
	.setFooter("Brisolo32 | Copyleft 2021 | v1.4.2", "https://cdn.discordapp.com/app-icons/922283721791504426/ba24abb016d5986dc74643ad5bbf6b70.png?size=256")

// Updates
const updatembed = new MessageEmbed()
	.setColor('#ffffff')
	.setAuthor('Updates', 'https://cdn.discordapp.com/app-icons/922283721791504426/ba24abb016d5986dc74643ad5bbf6b70.png?size=256')
	.setDescription('Patch-Notes v1.4.2 EN-US:\n\n/yayornay: Added this command\n/capybara: Added last batch of capybara images (for a long time)\n/rroulette: Added english responses\n\nPatch-Notes v1.4.2 PT-BR\n\n/capybara: Adicionou ultimo lote de imagens de capivara (por um tempão)\n/rroulette: Adicionou respostas em ingles')
	.setFooter("Brisolo32 | Copyleft 2021 | v1.4.2", "https://cdn.discordapp.com/app-icons/922283721791504426/ba24abb016d5986dc74643ad5bbf6b70.png?size=256")

// Wikihow
// Como Remover um chupão
const chupao = new MessageEmbed()
	.setColor('#97ff63')
	.setAuthor('RandWiki | Wikihow', 'https://upload.wikimedia.org/wikipedia/commons/f/fb/WikiHow_initials.png')
	.setTitle('Como remover um chupão')
	.setDescription('Sinopse:\n\nAo se distrair no calor de um momento íntimo, não é incomum sair dele com um “chupão” — uma mancha temporária parecida com um hematoma — em alguma parte do corpo. De fato, o chupão não apenas é semelhante a um hematoma, como pode ser medicamente classificado como tal. Portanto, ao empregar métodos comprovadamente eficazes para tratar hematomas e disfarçar a marca, será possível removê-lo e evitar que descubram o que você anda fazendo.')
	.setURL('https://pt.wikihow.com/Remover-um-Chup%C3%A3o')
	.setFooter('Providenciado por pt.wikihow.com')

// Como fazer cimento ?????
const cimento = new MessageEmbed()
	.setColor('#97ff63')
	.setAuthor('RandWiki | Wikihow', 'https://upload.wikimedia.org/wikipedia/commons/f/fb/WikiHow_initials.png')
	.setTitle('Como fazer cimento')
	.setDescription('Sinopse:\n\nAs palavras cimento e concreto são usadas como sinônimas, mas isso não é tecnicamente correto. O cimento é um dos vários ingredientes que são misturados para fazer concreto. O cimento é uma substância seca e em pó que se transforma em concreto quando é misturado com água, brita e areia. Ao invés disso comprar um saco com a mistura pré-fabricada, você pode fazer o seu obtendo e queimando calcário. Além disso, em uma emergência, você pode fazer o que é chamado de “cimento de sobrevivência” — mas deveria ser “concreto de sobrevivência” — misturando barro com grama.')
	.setURL('https://pt.wikihow.com/Fazer-Cimento')
	.setFooter('Providenciado por pt.wikihow.com')

// Como saber se seu cachorro tem microchip
const microchip = new MessageEmbed()
	.setColor('#97ff63')
	.setAuthor('RandWiki | Wikihow', 'https://upload.wikimedia.org/wikipedia/commons/f/fb/WikiHow_initials.png')
	.setTitle('Como saber se seu cachorro tem Microchip')
	.setDescription('Sinopse:\n\nOs microchips são pequenos dispositivos emissores de radiofrequência do tamanho de um grão de arroz. O aparelhinho é colocado sob a pele do animal, acima das escápulas. Cada microchip tem um número único de identificação que fica registrado em um banco de dados junto com a descrição do cachorro e os dados do dono, como nome, endereço e telefone de contato. Quando se passa um escâner sobre o chip, o número é capturado e aparece na tela do aparelho. Se você encontrou um cachorro perdido, é bom saber se ele tem um microchip para facilitar a identificação do dono.')
	.setURL('https://pt.wikihow.com/Saber-se-um-Cachorro-tem-Microchip')
	.setFooter('Providenciado por pt.wikihow.com')

// Como Parecer e Agir como um Vampiro Adolescente
const vampiro = new MessageEmbed()
	.setColor('#97ff63')
	.setAuthor('RandWiki | Wikihow', 'https://upload.wikimedia.org/wikipedia/commons/f/fb/WikiHow_initials.png')
	.setTitle('Como Parecer e Agir como um Vampiro Adolescente')
	.setDescription('Sinopse:\n\nVocê sempre amou vampiros por serem legais e ousados, mas também sempre foi tímido? Alguma vez quis agir e parecer um pouco com um deles? Já tentou parecer um vampiro e falhou? Se a resposta para essas perguntas for sim, você está no lugar certo! Esse artigo ensinará como fazer isso em passos lentos e certeiros.')
	.setURL('https://pt.wikihow.com/Parecer-e-Agir-como-um-Vampiro-Adolescente')
	.setFooter('Providenciado por pt.wikihow.com')

// Como parar de se m4sturb4r
const m4sturbacao = new MessageEmbed()
	.setColor('#97ff63')
	.setAuthor('RandWiki | Wikihow', 'https://upload.wikimedia.org/wikipedia/commons/f/fb/WikiHow_initials.png')
	.setTitle('Como Parar de se m4sturb4r')
	.setDescription('Sinopse:\n\nA m4sturb4ção esteve (e está) presente em todas as culturas, ao longo de todos os períodos históricos, e é a forma que muitos adolescentes usam para descobrir os prazeres sexuais antes da vida adulta em si. É uma prática saudável e natural, que ajuda no desenvolvimento sexual humano. Ainda assim, se não consegue controlar a vontade de se masturbar — a ponto de ela começa a atrapalhar os seus estudos, trabalho ou vida social —, talvez seja hora de retomar o controle.')
	.setURL('https://pt.wikihow.com/Parar-de-se-Masturbar')
	.setFooter('Providenciado por pt.wikihow.com')

// Como Esconder os Mamilos
const mamilos = new MessageEmbed()
	.setColor('#97ff63')
	.setAuthor('RandWiki | Wikihow', 'https://upload.wikimedia.org/wikipedia/commons/f/fb/WikiHow_initials.png')
	.setTitle('Como Esconder os Mamilos')
	.setDescription('Sinopse:\n\nAlgumas pessoas não se importam, ou até gostam de mostrar os mamilos por baixo da roupa. Todavia, esse comportamento não é a regra. Caso você prefira que as pessoas não os vejam, este tutorial ensina a escondê-los de maneira confortável. :smirk:')
	.setURL('https://pt.wikihow.com/Esconder-os-Mamilos')
	.setFooter('Providenciado por pt.wikihow.com')

// Como Fazer o Cabelo Crescer em Uma Semana
const cabelo = new MessageEmbed()
	.setColor('#97ff63')
	.setAuthor('RandWiki | Wikihow', 'https://upload.wikimedia.org/wikipedia/commons/f/fb/WikiHow_initials.png')
	.setTitle('Como Fazer o Cabelo Crescer em Uma Semana')
	.setDescription('Sinopse:\n\nVocê pode querer que o seu cabelo cresça rápido por diversos motivos: desfazer um corte mal pensado, ir a um evento importante, etc. Seja o que for, há alguns meios práticos de estimular o crescimento dos fios. Experimente métodos como fazer uma massagem com um óleo natural, ajustar a sua rotina de cuidados para evitar o estresse e ingerir nutrientes que contribuam com a saúde capilar (como proteínas e biotina). Embora o cabelo tenha um limite de crescimento semanal, dá para fazer algumas coisas para maximizar o processo.')
	.setURL('https://pt.wikihow.com/Fazer-o-Cabelo-Crescer-em-Uma-Semana')
	.setFooter('Providenciado por pt.wikihow.com')

// Como Consertar Buracos em uma Parede
const buraco = new MessageEmbed()
	.setColor('#97ff63')
	.setAuthor('RandWiki | Wikihow', 'https://upload.wikimedia.org/wikipedia/commons/f/fb/WikiHow_initials.png')
	.setTitle('Como Consertar Buracos em uma Parede')
	.setDescription('Sinopse:\n\nAs paredes podem ser danificadas de diversas maneiras, com buracos para pregos e rachaduras e até quebras grandes. Cada tipo de problema tem uma solução bem diferente, cuja dificuldade depende bastante da extensão do dano. Este guia fornecerá instruções sobre como consertar imperfeições ou buracos em paredes')
	.setURL('https://pt.wikihow.com/Consertar-Buracos-em-uma-Parede')
	.setFooter('Providenciado por pt.wikihow.com')

// Como Fazer Carinho em um Pássaro
const passaro = new MessageEmbed()
	.setColor('#97ff63')
	.setAuthor('RandWiki | Wikihow', 'https://upload.wikimedia.org/wikipedia/commons/f/fb/WikiHow_initials.png')
	.setTitle('Como Fazer Carinho em um Pássaro')
	.setDescription('Sinopse:\n\nOs pássaros são criaturas muito inteligentes, o que os torna animais de estimação divertidos, interessantes e bem comuns. Dito isso, um pássaro não deve ser tratado da mesma forma que um cachorro, um gato ou um coelho. Os pássaros precisam de diversos cuidados e um que costuma surpreender as pessoas é como fazer carinho neles. Não é tão fácil quanto acariciar animais peludos, mas os pássaros podem gostar de receber carinho se você o fizer da forma certa.')
	.setURL('https://pt.wikihow.com/Fazer-Carinho-em-um-P%C3%A1ssaro')
	.setFooter('Providenciado por pt.wikihow.com')

const cancer = new MessageEmbed()
	.setColor('#97ff63')
	.setAuthor('RandWiki | Wikihow', 'https://upload.wikimedia.org/wikipedia/commons/f/fb/WikiHow_initials.png')
	.setTitle('Como Agir como um Personagem de Anime ou Mangá')
	.setDescription('Sinopse:\n\nExistem várias maneiras de se fazer cosplay de personagens de animes e mangás (sejam eles específicos ou genéricos) de forma convincente. Por sua vez, imitar a maneira de agir do personagem eleva a fantasia a outro nível — mesmo que não seja muito bom ou necessário. Se escolher um personagem genérico, você vai ter mais flexibilidade e liberdade criativa, mas também é útil ter certo conhecimento acerca da cultura japonesa.')
	.setURL('https://pt.wikihow.com/Agir-como-um-Personagem-de-Anime-ou-Mang%C3%A1')
	.setFooter('Providenciado por pt.wikihow.com')

const emo = new MessageEmbed()
	.setColor('#97ff63')
	.setAuthor('RandWiki | Wikihow', 'https://upload.wikimedia.org/wikipedia/commons/f/fb/WikiHow_initials.png')
	.setTitle('Como Ser Emo no Ensino Fundamental')
	.setDescription('Sinopse:\n\nEmbora tenha surgido por volta dos anos 80 como um subgênero da música punk, a cultura emo continua bem viva, mesmo sendo um pouco mal compreendida. O estilo é centrado em bandas que compõem músicas com letras emocionais, mas também evoluiu para incluir um certo visual e comportamento. Tornar-se completamente emo no ensino fundamental pode ser difícil porque, muitas vezes, nossos pais não nos permitem alterar a aparência da forma como gostaríamos. Porém, comportar-se como um emo é muito mais importante do que exibir um determinado visual, e você só precisa aprender a se expressar da forma certa.')
	.setURL('https://pt.wikihow.com/Ser-Emo-no-Ensino-Fundamental')
	.setFooter('Providenciado por pt.wikihow.com')

const maconha = new MessageEmbed()
	.setColor('#97ff63')
	.setAuthor('RandWiki | Wikihow', 'https://upload.wikimedia.org/wikipedia/commons/f/fb/WikiHow_initials.png')
	.setTitle('Como Eliminar a Maconha do Organismo')
	.setDescription('Sinopse:\n\nSe você tem um exame toxicológico admissional próximo ou trabalha em uma empresa conhecida por conduzir testes aleatórios, pode ser necessário limpar seu sistema e deixá-lo pronto para qualquer eventualidade. É claro, pra início de conversa, a única maneira de ter um sistema livre de maconha é não fumar ou ingerir a erva. Porém, se for muito tarde para isso, você pode querer aprender sobre o processo de detecção de drogas no organismo e escolher uma estratégia para melhorar suas chances.')
	.setURL('https://pt.wikihow.com/Eliminar-a-Maconha-do-Organismo')
	.setFooter('Providenciado por pt.wikihow.com')

// -----------------------------------------------------------------------//

// Crie uma nova instancia de client
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

// Quando o client estiver preparado, rode este comando (apenas uma vez)
client.once('ready', () => {
	console.log('Ready! Version 1.4.2');
});

// Commandos
client.on('interactionCreate', async interaction => {
	if (!interaction.isCommand()) return;
	const { commandName } = interaction;

	// Capivara (Envia uma imagem aleatoria de capivara)
	if (commandName === 'capybara') {

		const Capivara = [
			"https://cdn.discordapp.com/attachments/489946560319324189/922452242030800916/9k.png",
			"https://cdn.discordapp.com/attachments/489946560319324189/922452265267245077/2Q.png",
			"https://cdn.discordapp.com/attachments/489946560319324189/922452294291841044/9k.png",
			"https://cdn.discordapp.com/attachments/489946560319324189/922452303301197844/2Q.png",
			"https://cdn.discordapp.com/attachments/489946560319324189/922452351837687808/9k.png",
			"https://cdn.discordapp.com/attachments/489946560319324189/922455104609730610/2Q.png",
			"https://cdn.discordapp.com/attachments/489946560319324189/922455182271463464/maxresdefault.png",
			"https://cdn.discordapp.com/attachments/489946560319324189/922455216060792832/9k.png",
			"https://cdn.discordapp.com/attachments/922635062602788884/922635134124056667/4b1a3b25b90cbc34ba27a57ca02ee749dbef8aac.png",
			"https://cdn.discordapp.com/attachments/922635062602788884/922635180508864552/2Q.png",
			"https://cdn.discordapp.com/attachments/922635062602788884/922635206127669298/images.png",
			"https://cdn.discordapp.com/attachments/922635062602788884/922635234376319027/images.png",
			"https://cdn.discordapp.com/attachments/922635062602788884/922635250662780998/images.png",
			"https://cdn.discordapp.com/attachments/922635062602788884/922635334712459334/2Q.png",
			"https://cdn.discordapp.com/attachments/922635062602788884/922635361379835974/9k.png",
			"https://cdn.discordapp.com/attachments/922635062602788884/922635391411044362/images.png",
			"https://cdn.discordapp.com/attachments/922635062602788884/922635494641246208/images.png",
			"https://cdn.discordapp.com/attachments/922635062602788884/922635512546754580/images.png",
			"https://cdn.discordapp.com/attachments/922635062602788884/922898897825857626/Z.png",
			"https://cdn.discordapp.com/attachments/922635062602788884/922898926376480849/9k.png",
			"https://cdn.discordapp.com/attachments/922635062602788884/922898968545988668/images.png",
			"https://cdn.discordapp.com/attachments/922635062602788884/922899026083467354/images.png",
			"https://cdn.discordapp.com/attachments/880916817537818624/922965851987140608/CapybaraKF3.png",
			"https://cdn.discordapp.com/attachments/880916817537818624/922965851718688818/GettyImages-460739676.0.0.jpg",
			"https://cdn.discordapp.com/attachments/880916817537818624/922965852268146738/afec36c557ebc7c8601c1244e460d4fa.jpg",
			"https://cdn.discordapp.com/attachments/922635062602788884/923616880114163732/chaveiro-capivara-em-feltro-floresta.png",
			"https://cdn.discordapp.com/attachments/922635062602788884/923616900917907516/paopivara.png",
			"https://cdn.discordapp.com/attachments/922635062602788884/923616994253750302/Capivara-Pelucia--500x500.png",
			"https://cdn.discordapp.com/attachments/922635062602788884/923617061752700978/images.png",
			"https://cdn.discordapp.com/attachments/922635062602788884/923617099933421608/images.png"

		]

		const Resposta = Math.floor(Math.random() * Capivara.length)
		await interaction.reply(Capivara[Resposta]);
	}

	// Tomar no cu (Manda o user mencionado pra tomar no cu)
	if (commandName === 'tomarnocu') {
		const member = interaction.options.getMember("target");
		await interaction.reply(`Vai tomar no cu ${member} :middle_finger:`)
	}

	// Josefe o mago B)
	if (commandName === 'simounao') {
		const Josefe = [
			"Talvez",
			"Claro que não",
			"Sim",
			"Provavelmente não",
			"Positivo",
			"Provavelmente sim",
			"Negativo",
			"Não",
			"Claro que sim",

		]
		const string = interaction.options.getString('input');
		const Resposta = Math.floor(Math.random() * Josefe.length)
		await interaction.reply(`P: ${string}\nR: ` + Josefe[Resposta])

	}

	// Josefe o mago so q em ingles
	if (commandName === 'yayornay') {
		const Jonas = [
			"Maybe",
			"No",
			"Nah mate",
			"Of course no",
			"Probably No",
			"Negative",
			"Not at all",
			"Yeah mate",
			"Probably Yes",
			"Yes",
			"Positive", 
			"Of course yes",
			"Affirmative",
			"Aye"
		]

		const string = interaction.options.getString('input');
		const Resposta = Math.floor(Math.random() * Jonas.length)
		await interaction.reply(`Q: ${string}\nA: ` + Jonas[Resposta])
	}
    
	// SuperIdol
	if (commandName === 'superidol') {
		await interaction.reply('Super Idol的笑容\n都没你的甜\n八月正午的阳光\n都没你耀眼\n热爱 105 °C的你\n滴滴清纯的蒸馏水')
	}

	// Sobre
	if (commandName === 'about') {
		interaction.reply({embeds: [aboutembed]})
	}

	// Roleta Russa
	if (commandName === 'rroulette') {
		const RRoulette = [
			"Você sobreviveu B( | You survived B(",
			"Você sobreviveu B( | You survived B(",
			"Você morreu B) | You died B)",
			"Você sobreviveu B( | You survived B(",
			"Você morreu B) | You died B)",
			"Você sobreviveu B( | You survived B(",
		]

		const Resposta = Math.floor(Math.random() * RRoulette.length)
		await interaction.reply(RRoulette[Resposta])
	}

	// RandWiki
	if (commandName === 'randwiki') {
		const RandWiki = [
			chupao,
			cimento,
			microchip, 
			vampiro, 
			m4sturbacao, 
			mamilos,
			cabelo,
			buraco,
			passaro,
			cancer,
			emo,
			maconha
		]

		const Resposta = Math.floor(Math.random() * RandWiki.length)
		interaction.reply({embeds: [RandWiki[Resposta]]})
	}

	if (commandName === 'updates') {
		interaction.reply({embeds: [updatembed]})
	}
});

// Login to Discord with your client's token
client.login(token);

/*
Ignore isso, é so pra eu ficar lembrando kkkkk

const string = interaction.options.getString('input');
const integer = interaction.options.getInteger('int');
const number = interaction.options.getNumber('num');
const boolean = interaction.options.getBoolean('choice');
const user = interaction.options.getUser('target');
const member = interaction.options.getMember('target');
const channel = interaction.options.getChannel('destination');
const role = interaction.options.getRole('muted');
const mentionable = interaction.options.getMentionable('mentionable');
*/