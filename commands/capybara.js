const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {

	data: new SlashCommandBuilder()
		.setName('capybara')
		.setDescription('Manda uma foto de uma capivara | Sends a image of an capybara'),
	async execute (interaction) {
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
      		"https://cdn.discordapp.com/attachments/922635062602788884/923617099933421608/images.png",
      		"https://cdn.discordapp.com/attachments/922635062602788884/936412706905391144/images.png",
      		"https://cdn.discordapp.com/attachments/922635062602788884/936412748559028235/images.png",
      		"https://cdn.discordapp.com/attachments/922635062602788884/936412760407949364/images.png",
      		"https://cdn.discordapp.com/attachments/922635062602788884/936412792418861056/images.png",
      		"https://cdn.discordapp.com/attachments/922635062602788884/936412813046448209/images.png",
      		"https://cdn.discordapp.com/attachments/922635062602788884/936412836664574002/images.png",
      		"https://cdn.discordapp.com/attachments/922635062602788884/936412878469222460/Z.png",
      		"https://cdn.discordapp.com/attachments/922635062602788884/936412904973025280/Z.png",
			"https://i.redd.it/xk267ylqodl81.jpg",
			"https://preview.redd.it/t96a6oxno8l81.jpg?width=640&crop=smart&auto=webp&s=ca872273def8344634d0af6c7865935a1e4d545b",
			"https://preview.redd.it/gdtfw7ekbdl81.jpg?width=640&crop=smart&auto=webp&s=674819d0444fec7750c568c6e914435581ed23b5",
			"https://preview.redd.it/scru5d93vel81.jpg?width=640&crop=smart&auto=webp&s=5dbda6de4ae5dc15a1ef103c674f1d95140e771f",
			"https://preview.redd.it/cmj4woiyv6l81.jpg?width=640&crop=smart&auto=webp&s=bbb5148bc95b05f354ca1070ed22094c2401eaf4",
			"https://preview.redd.it/8lmqv7gvo9l81.jpg?width=640&crop=smart&auto=webp&s=327e2aaa4f41aa5ae13e419abf10135d18b51835",
			"https://preview.redd.it/sfbx37art5l81.jpg?width=640&crop=smart&auto=webp&s=7d72fead8d24a9c6452199cec21234a032a18839",
			"https://preview.redd.it/j2iw44kcduk81.jpg?width=640&crop=smart&auto=webp&s=5fde1520cf656c9084830b5391cabab79421daa7",
			"https://preview.redd.it/snjw1eowrmk81.jpg?width=640&crop=smart&auto=webp&s=1ea77f715d39363500641c2e8f7210ea8687eee0",
			"https://preview.redd.it/qf46jkmwukk81.png?width=640&crop=smart&auto=webp&s=2456cd8a93ecba08d60a28b45b354c76460167d7",
			"https://preview.redd.it/wbkvdvkilmk81.jpg?width=640&crop=smart&auto=webp&s=5f2b07717ad6448e84005afaa21bbd5a2fe7d2d1",
			"https://preview.redd.it/0sv9c4esngk81.jpg?width=640&crop=smart&auto=webp&s=f5e9e30912156dd713ea6fc08e70ff393e6a61b9",
			"https://preview.redd.it/jpmjk3rgm9k81.png?width=640&crop=smart&auto=webp&s=97dbbf3105727560e78bb157215f2b2c3aa307f1",
			"https://preview.redd.it/qqb3m6hluck81.jpg?width=640&crop=smart&auto=webp&s=00e58a30afdab7ede64ebb1a00fd3bc2f15e30b6",
			"https://preview.redd.it/bt7wixcha8k81.jpg?width=640&crop=smart&auto=webp&s=56f24d6970597c79833703c75a4fc1516f52dae8",
			"https://preview.redd.it/bt7wixcha8k81.jpg?width=640&crop=smart&auto=webp&s=56f24d6970597c79833703c75a4fc1516f52dae8",
			"https://preview.redd.it/t5zdt2wwyuj81.png?width=640&crop=smart&auto=webp&s=0a016dc1566da0817a2291cf8d92e43f2a16b062",
			"https://preview.redd.it/p1l4kak10jj81.jpg?width=640&crop=smart&auto=webp&s=7640a958a000e4793dc25d7139446c39e25d3c9b",
			"https://preview.redd.it/105xbl09ajj81.jpg?width=640&crop=smart&auto=webp&s=6c27400fb8079a70396acc0481f4b2c2630af100",
			"https://cdn.pixabay.com/photo/2019/06/05/21/02/capybara-4254528__480.jpg",
			"https://img.ibxk.com.br/2021/06/18/capivara-18130707369146.jpg",
			"https://i.ytimg.com/vi/tjEmRGj-WoQ/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLBGRylLviEw3zJW2c3nqCjY7B-jpg	",
			"https://preview.redd.it/1hfw8w8v4jl71.jpg?auto=webp&s=5156b50f16797d5b6269bcd214b3e1da3c4915c5",
			"https://i.pinimg.com/originals/0a/6d/d1/0a6dd105337bb97d2342cb3ca6f46086.jpg",
			"https://img-9gag-fun.9cache.com/photo/aAGGXq2_460s.jpg",
			"https://scontent.fbhz8-1.fna.fbcdn.net/v/t1.18169-9/21237_1573722626230924_5683020853089341294_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=nu89tBtygqoAX_wUL_p&_nc_ht=scontent.fbhz8-1.fna&oh=00_AT8Xp_x71uWi9iAJAW1FysZNJ1APT8YTRl39pzL3Uk0a6g&oe=624861FA",
			"https://preview.redd.it/zdi73jpar5m81.jpg?width=640&crop=smart&auto=webp&s=fbaa65a131fc7cda312128648532efdcabce9ef2",
			"https://preview.redd.it/er9ywpip74m81.jpg?width=640&crop=smart&auto=webp&s=673ef372ce23cec84e7e629ca3d9a67b58530b8d",
			"https://preview.redd.it/2c6520exw4m81.jpg?width=640&crop=smart&auto=webp&s=92b8cf360be2d1bd8b2c09948f7219c5c63cf4f7",
			"https://preview.redd.it/tqrromx7f1m81.jpg?width=640&crop=smart&auto=webp&s=66cbab9c325b695e7a1f1115db8bdf86747d0efc",
			"https://preview.redd.it/qqrq4b3vp5m81.png?width=640&crop=smart&auto=webp&s=374d617f72c5728c8819e8a62444b1c435182d16",
			"https://preview.redd.it/aownxg0ohvl81.jpg?width=640&crop=smart&auto=webp&s=dc86eb6ba87bbdb69a4e0cd195c00adb6464acae",
			"https://preview.redd.it/hz0vhrdoc1m81.jpg?width=640&crop=smart&auto=webp&s=63375627f2125d6e57e04644249d02222260b3b5",
			"https://preview.redd.it/pdc95umq5rl81.jpg?width=640&crop=smart&auto=webp&s=58e99e3b50dec3c59bcb2153e2e586b73798755e",
			"https://preview.redd.it/bbuwz02w7rl81.jpg?width=640&crop=smart&auto=webp&s=b5130a93d7dfdeb75f8a8c8aaff60cdaa2d38ef7",
			"https://preview.redd.it/0c9ufo431nl81.jpg?width=640&crop=smart&auto=webp&s=421fffa97c2c36afb8e0847030a5d5d0a18b8387",
			"https://preview.redd.it/p1se8qm05ll81.jpg?width=640&crop=smart&auto=webp&s=f534f0adb1c3d72f2df1a0ff3470aa4af02fc19a",
			"https://preview.redd.it/7vk1e27diml81.jpg?width=640&crop=smart&auto=webp&s=8f2b0a989937742d3a8efe412f1381424d1ea67f",
			"https://preview.redd.it/jer869195ol81.jpg?width=400&format=pjpg&auto=webp&s=27614dd33cb7e2e4aa651fe27ab29270cf198bf3",
			"https://preview.redd.it/4z0zh02p0ll81.jpg?width=640&crop=smart&auto=webp&s=b164d4bc02d3c0a3da7a2169e14528ff1c5006e4",
			"https://preview.redd.it/jiueczywphl81.png?width=640&crop=smart&auto=webp&s=bdff06d57808fa72f48fdd01f69e66d6d719545c"
		]
    	const Resposta = Math.floor(Math.random() * Capivara.length)
    	await interaction.reply(Capivara[Resposta]);
	}

};