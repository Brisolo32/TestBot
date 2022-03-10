const { MessageEmbed } = require('discord.js');
const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName("randwikien")
        .setDescription("Sends a resumed wiki from WikiHow with the link for the full page"),
	  async execute (interaction) {
        const notfake = new MessageEmbed()
            .setColor('#97ff63')
            .setAuthor('RandWiki | Wikihow', 'https://upload.wikimedia.org/wikipedia/commons/f/fb/WikiHow_initials.png')
            .setTitle('How to Not Be Fake')
            .setDescription('Summary:\n\nYou want to be loved, admired, and respected, but what if it seems to be taking toll, and just seems all-too-fake? Being fake is basically being insincere, rather than genuine. By learning how to see yourself and the people around in a positive and honest way, you can stop being fake, and be who you really are.')
            .setURL('https://www.wikihow.com/Not-Be-Fake')
            .setFooter('Provided by wikihow.com')

        const curse = new MessageEmbed()
            .setColor('#97ff63')
            .setAuthor('RandWiki | Wikihow', 'https://upload.wikimedia.org/wikipedia/commons/f/fb/WikiHow_initials.png')
            .setTitle('How to Put a Curse on Someone')
            .setDescription('Summary:\n\nCurses are magic spells placed upon people with the intention of harming them in some way. The intended harm can range from mere annoyance and psychological stress to physical illness and suffering, to even death. Curses are often associated with black magic and are thus not to be taken lightly. The curse jar (a variation of the bottle spell) is a simple curse method whose users claim a high success rate.')
            .setURL('https://www.wikihow.com/Put-a-Curse-on-Someone')
            .setFooter('Provided by wikihow.com')

        const coolpoolparty = new MessageEmbed()
            .setColor('#97ff63')
            .setAuthor('RandWiki | Wikihow', 'https://upload.wikimedia.org/wikipedia/commons/f/fb/WikiHow_initials.png')
            .setTitle('How to Be Cool at a Pool Party')
            .setDescription("Summary:\n\nYou've been invited to an awesome pool party, and now you totally want to play it cool. Start by deciding what to wear. It's also good to think about how you'll act at the party. For instance, being confident is a cool trait. Also, don't forget the essentials like thanking your host.")
            .setURL('https://www.wikihow.com/Be-Cool-at-a-Pool-Party')
            .setFooter('Provided by wikihow.com')

        const why = new MessageEmbed()
            .setColor('#97ff63')
            .setAuthor('RandWiki | Wikihow', 'https://upload.wikimedia.org/wikipedia/commons/f/fb/WikiHow_initials.png')
            .setTitle('How to Make a New Folder on a Computer')
            .setDescription('Summary:\n\nWhy?')
            .setURL('https://www.wikihow.com/Make-a-New-Folder-on-a-Computer')
            .setFooter('Provided by wikihow.com')

        const drivecar = new MessageEmbed()
            .setColor('#97ff63')
            .setAuthor('RandWiki | Wikihow', 'https://upload.wikimedia.org/wikipedia/commons/f/fb/WikiHow_initials.png')
            .setTitle('How to Drive a Car')
            .setDescription("Summary:\n\nLearning how to drive is a lot easier than it looks. It looks intimidating from the passenger's seat, or in films, but once you get behind the wheel and gently put your foot on the pedal, the process becomes very intuitive. Learn to take things slow in the beginning and you'll be well on your way to mastering the basics. This article assumes you'll be driving a vehicle with an automatic transmission. If you're not driving an automatic, you'll need to read about the basics of driving stick-shift (manual transmission) instead, although the general process will still be similar.")
            .setURL('https://www.wikihow.com/Drive-a-Car')
            .setFooter('Provided by wikihow.com')

        const singlemom = new MessageEmbed()
            .setColor('#97ff63')
            .setAuthor('RandWiki | Wikihow', 'https://upload.wikimedia.org/wikipedia/commons/f/fb/WikiHow_initials.png')
            .setTitle('How to Impress a Single Mom')
            .setDescription("Summary:\n\nIf you want to win the heart of a single mom, you may be wondering how to impress them. We've got good news for you—single moms want respect, affection, and communication just like any woman out there. So long as you're mature enough to handle her hectic life, there's no reason you can't seduce her. In this article, we'll cover everything you'll need to put the smooth moves on and win a single mother over.")
            .setURL('https://www.wikihow.com/Impress-a-Single-Mom')
            .setFooter('Provided by wikihow.com')

        const hotdogpi = new MessageEmbed()
            .setColor('#97ff63')
            .setAuthor('RandWiki | Wikihow', 'https://upload.wikimedia.org/wikipedia/commons/f/fb/WikiHow_initials.png')
            .setTitle('How to calculate pi by throwing frozen hot dogs')
            .setDescription("Summary:\n\nWhile there are many ways to solve a math problem, this method of calculating pi is a specific yet bizarre way to calculate pi. The most surprising thing is that some people find this helpful. This method pretty much can apply to any food that you're throwing. Despite the humorous title, it's pretty informative and can be a worth to read if you're looking forward for more ways to solve math problems.")
            .setURL('https://www.wikihow.com/Calculate-Pi-by-Throwing-Frozen-Hot-Dogs')
            .setFooter('Provided by wikihow.com')

        const breathe = new MessageEmbed()
            .setColor('#97ff63')
            .setAuthor('RandWiki | Wikihow', 'https://upload.wikimedia.org/wikipedia/commons/f/fb/WikiHow_initials.png')
            .setTitle('How to Breathe')
            .setDescription('Summary:\n\nBreathing is a basic human function, but most of the time you don’t even realize you’re doing it. You may be surprised to learn that there are better ways to breathe than others. Short, shallow breaths, for example, may not give you the same benefits as deep breathing through your nose. This article goes into the many ways you can improve your breathing, including monitoring your breathing throughout your day, practicing meditative breathing to relieve stress, and paying attention to your breaths as you exercise.')
            .setURL('https://www.wikihow.com/Breathe')
            .setFooter('Provided by wikihow.com')

        const seduceprofessor = new MessageEmbed()
            .setColor('#97ff63')
            .setAuthor('RandWiki | Wikihow', 'https://upload.wikimedia.org/wikipedia/commons/f/fb/WikiHow_initials.png')
            .setTitle('How to Seduce Your Professor')
            .setDescription("Summary:\n\nWhen you're studying a subject that you're genuinely interested in, you come to class happy, motivated, and ready to learn. When you're studying a professor that you're genuinely interested in, the same is true. After all, is there anything better than sitting back and observing your crush for a full class period? If you're ready to take your infatuation to the next level and seduce your professor, it'll take a little bit of strategy and a whole lot of courage. It may seem tricky but don't worry it can be done!")
            .setURL('https://www.wikihow.com/Seduce-Your-Professor')
            .setFooter('Provided by wikihow.com')

        const urinateocean = new MessageEmbed()
            .setColor('#97ff63')
            .setAuthor('RandWiki | Wikihow', 'https://upload.wikimedia.org/wikipedia/commons/f/fb/WikiHow_initials.png')
            .setTitle("How to Urinate in the Ocean Discreetly")
            .setDescription("Summary:\n\nSometimes, the closest bathroom at the beach is too far away for you to reach in time. This leaves you little choice but to go right where you are. Beaches are public places and are often filled with people. Luckily, there are ways to go about your business discreetly so that no one will suspect. This article will show you how to do that.")
            .setURL('https://www.wikihow.life/Urinate-in-the-Ocean-Discreetly')
            .setFooter('Provided by wikihow.com')

        const buynothing = new MessageEmbed()
            .setColor('#97ff63')
            .setAuthor('RandWiki | Wikihow', 'https://upload.wikimedia.org/wikipedia/commons/f/fb/WikiHow_initials.png')
            .setTitle("How to Buy Nothing")
            .setDescription("Summary:\n\nThe proposition to “buy nothing” can seem daunting and difficult to achieve. But buying nothing, even for a year, can save you thousands of dollars and make you more spending conscious. Start with simple adjustments to your lifestyle and your budget to transition into buying nothing for a long period of time, possibly forever.")
            .setURL('https://www.wikihow.com/Buy-Nothing')
            .setFooter('Provided by wikihow.com')            
        
        const familynudity = new MessageEmbed()
            .setColor('#97ff63')
            .setAuthor('RandWiki | Wikihow', 'https://upload.wikimedia.org/wikipedia/commons/f/fb/WikiHow_initials.png')
            .setTitle("How to Practice Nudity in Your Family")
            .setDescription("Summary:\n\nFamily nudity can be a tricky topic because of cultural values, but it can be healthy for families to be nude around each other. In fact, treating nudity as being natural and normal can help your children develop a healthy body image and safer dating practices as they grow up. However, it’s important that you practice family nudity safely. You can do this by teaching your kids about nudity, setting rules and boundaries, and addressing potential problems.")
            .setURL('https://www.wikihow.com/Practice-Nudity-in-Your-Family')
            .setFooter('Provided by wikihow.com')

        const apologizecat = new MessageEmbed()
            .setColor('#97ff63')
            .setAuthor('RandWiki | Wikihow', 'https://upload.wikimedia.org/wikipedia/commons/f/fb/WikiHow_initials.png')
            .setTitle("How to Apologize to a Cat")
            .setDescription("Summary:\n\nOh no! You've done something to deeply offend your cat, and now she won't even let you come near her. Fortunately, it is possible to earn a cat's forgiveness. This article will show you not only how to apologize to your cat, but it will also show you how to do it safely, so that you don't get scratched.")
            .setURL('https://www.wikihow.com/Apologize-to-a-Cat')
            .setFooter('Provided by wikihow.com')

        const why2 = new MessageEmbed()
            .setColor('#97ff63')
            .setAuthor('RandWiki | Wikihow', 'https://upload.wikimedia.org/wikipedia/commons/f/fb/WikiHow_initials.png')
            .setTitle("How to Use a Computer Mouse")
            .setDescription("Sinopse:\n\nUsing a computer mouse is one of the first steps to properly operating a computer. The mouse allows you to move the cursor and click programs. These steps will show you how to use a PC and MAC computer mouse, whether it is plugged into the computer, wireless, or connects via Bluetooth.")
            .setURL('https://www.wikihow.com/Use-a-Computer-Mouse')
            .setFooter('Provided by wikihow.com')

        const sideflip = new MessageEmbed()
            .setColor('#97ff63')
            .setAuthor('RandWiki | Wikihow', 'https://upload.wikimedia.org/wikipedia/commons/f/fb/WikiHow_initials.png')
            .setTitle("How to Do a Sideflip")
            .setDescription("Summary:\n\nA side flip is a popular parkour and freestyle running trick that involves using forward momentum combined with a quarter turn before leaving the ground in order to do a flip to the side where your chest and head remain facing the same direction through the duration. The directionality makes it seem slightly like an aerial cartwheel; however, the form is entirely different. With the right precautions and a lot of practice, you can learn how to do a side flip.")
            .setURL('https://www.wikihow.com/Do-a-Sideflip')
            .setFooter('Provided by pt.wikihow.com')

        const sleepanxiety = new MessageEmbed()
            .setColor('#97ff63')
            .setAuthor('RandWiki | Wikihow', 'https://upload.wikimedia.org/wikipedia/commons/f/fb/WikiHow_initials.png')
            .setTitle("How to Sleep With Severe Anxiety")
            .setDescription("Summary:\n\nSleeping when anxious is one of the toughest things to do. This is mostly because anxiety causes your thoughts to race. As a result, anxiety may prevent you from relaxing enough to fall asleep. Trying to sleep when you are anxious can be an even a bigger problem if you have obligations soon and need your rest. Fortunately, though, there are some things you can do to calm yourself down, such as using reassuring statements and deep breathing. You can also seek the support of others and try to make your environment more comfortable.")
            .setURL('https://www.wikihow.com/Sleep-With-Severe-Anxiety')
            .setFooter('Provided by pt.wikihow.com')

        const writecomic = new MessageEmbed()
            .setColor('#97ff63')
            .setAuthor('RandWiki | Wikihow', 'https://upload.wikimedia.org/wikipedia/commons/f/fb/WikiHow_initials.png')
            .setTitle("How to Write a Comic Book")
            .setDescription(`Summary:\n\nHave you ever wanted to create a comic book, but you haven't been quite sure where to start, or what to do? Comics are a rich and fun art form that is finally getting the respect it deserves, combining gorgeous illustrations with face-paced dialogue and stories. Though there is no one "right" way to write a comic book, there are some threads that any burgeoning writer would do well to pull.`)
            .setURL('https://www.wikihow.com/Write-a-Comic-Book')
            .setFooter('Provided by pt.wikihow.com')

        const cosmosflower = new MessageEmbed()
            .setColor('#97ff63')
            .setAuthor('RandWiki | Wikihow', 'https://upload.wikimedia.org/wikipedia/commons/f/fb/WikiHow_initials.png')
            .setTitle("How to Grow Cosmos Flowers")
            .setDescription(`Summary:\n\nCosmos are one of the easiest flowers to grow from seed, as they require little care. Cosmos flowers originate from South America to Mexico, and are named after the Greek word meaning "ordered universe". This group of plants belong as members of the huge sunflower or daisy family (Asteraceae), and are closely related to Coreopsis and marigolds.`)
            .setURL('https://www.wikihow.com/Grow-Cosmos-Flowers')
            .setFooter('Provided by  pt.wikihow.com')

        const migraine = new MessageEmbed()
            .setColor('#97ff63')
            .setAuthor('RandWiki | Wikihow', 'https://upload.wikimedia.org/wikipedia/commons/f/fb/WikiHow_initials.png')
            .setTitle("How to Tell if You Have a Migraine")
            .setDescription("Summary:\n\nPeople get headaches for all kinds of reasons. Migraine headaches, which can last from a few hours up to several days, are painful and difficult to get through. They affect about 12 percent of the population, and are three times more common in women than in men. Migraines can be treated with rest and proper care, but to first you'll need to figure out if you are having one.")
            .setURL('https://www.wikihow.com/Tell-if-You-Have-a-Migraine')
            .setFooter('Provided by  pt.wikihow.com')

        const RandWikiEN = [
            notfake,
            curse,
            coolpoolparty,
            why,
            drivecar,
            singlemom,
            hotdogpi,
            breathe,
            seduceprofessor,
            urinateocean,
            buynothing,
            familynudity,
            apologizecat,
            why2,
            sideflip,
            sleepanxiety,
            writecomic,
            cosmosflower,
            migraine
        ]
        const Answer = Math.floor(Math.random() * RandWikiEN.length)
        interaction.reply({ embeds: [RandWikiEN[Answer]] })
		}
};