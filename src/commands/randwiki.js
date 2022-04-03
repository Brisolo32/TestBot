const { MessageEmbed } = require('discord.js');
const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('randwiki')
        .setDescription('Envia uma wiki do WikiHow resumida com link pra página completa'),
	  async execute (interaction) {
        const chupao = new MessageEmbed()
          .setColor('#97ff63')
          .setAuthor('RandWiki | Wikihow', 'https://upload.wikimedia.org/wikipedia/commons/f/fb/WikiHow_initials.png')
          .setTitle('Como remover um chupão')
          .setDescription('Sinopse:\n\nAo se distrair no calor de um momento íntimo, não é incomum sair dele com um “chupão” — uma mancha temporária parecida com um hematoma — em alguma parte do corpo. De fato, o chupão não apenas é semelhante a um hematoma, como pode ser medicamente classificado como tal. Portanto, ao empregar métodos comprovadamente eficazes para tratar hematomas e disfarçar a marca, será possível removê-lo e evitar que descubram o que você anda fazendo.')
          .setURL('https://pt.wikihow.com/Remover-um-Chup%C3%A3o')
          .setFooter('Providenciado por pt.wikihow.com')
    
        const cimento = new MessageEmbed()
          .setColor('#97ff63')
          .setAuthor('RandWiki | Wikihow', 'https://upload.wikimedia.org/wikipedia/commons/f/fb/WikiHow_initials.png')
          .setTitle('Como fazer cimento')
          .setDescription('Sinopse:\n\nAs palavras cimento e concreto são usadas como sinônimas, mas isso não é tecnicamente correto. O cimento é um dos vários ingredientes que são misturados para fazer concreto. O cimento é uma substância seca e em pó que se transforma em concreto quando é misturado com água, brita e areia. Ao invés disso comprar um saco com a mistura pré-fabricada, você pode fazer o seu obtendo e queimando calcário. Além disso, em uma emergência, você pode fazer o que é chamado de “cimento de sobrevivência” — mas deveria ser “concreto de sobrevivência” — misturando barro com grama.')
          .setURL('https://pt.wikihow.com/Fazer-Cimento')
          .setFooter('Providenciado por pt.wikihow.com')
    
        const microchip = new MessageEmbed()
          .setColor('#97ff63')
          .setAuthor('RandWiki | Wikihow', 'https://upload.wikimedia.org/wikipedia/commons/f/fb/WikiHow_initials.png')
          .setTitle('Como saber se seu cachorro tem Microchip')
          .setDescription('Sinopse:\n\nOs microchips são pequenos dispositivos emissores de radiofrequência do tamanho de um grão de arroz. O aparelhinho é colocado sob a pele do animal, acima das escápulas. Cada microchip tem um número único de identificação que fica registrado em um banco de dados junto com a descrição do cachorro e os dados do dono, como nome, endereço e telefone de contato. Quando se passa um escâner sobre o chip, o número é capturado e aparece na tela do aparelho. Se você encontrou um cachorro perdido, é bom saber se ele tem um microchip para facilitar a identificação do dono.')
          .setURL('https://pt.wikihow.com/Saber-se-um-Cachorro-tem-Microchip')
          .setFooter('Providenciado por pt.wikihow.com')
    
        const vampiro = new MessageEmbed()
          .setColor('#97ff63')
          .setAuthor('RandWiki | Wikihow', 'https://upload.wikimedia.org/wikipedia/commons/f/fb/WikiHow_initials.png')
          .setTitle('Como Parecer e Agir como um Vampiro Adolescente')
          .setDescription('Sinopse:\n\nVocê sempre amou vampiros por serem legais e ousados, mas também sempre foi tímido? Alguma vez quis agir e parecer um pouco com um deles? Já tentou parecer um vampiro e falhou? Se a resposta para essas perguntas for sim, você está no lugar certo! Esse artigo ensinará como fazer isso em passos lentos e certeiros.')
          .setURL('https://pt.wikihow.com/Parecer-e-Agir-como-um-Vampiro-Adolescente')
          .setFooter('Providenciado por pt.wikihow.com')
    
        const m4sturbacao = new MessageEmbed()
          .setColor('#97ff63')
          .setAuthor('RandWiki | Wikihow', 'https://upload.wikimedia.org/wikipedia/commons/f/fb/WikiHow_initials.png')
          .setTitle('Como Parar de se m4sturb4r')
          .setDescription('Sinopse:\n\nA m4sturb4ção esteve (e está) presente em todas as culturas, ao longo de todos os períodos históricos, e é a forma que muitos adolescentes usam para descobrir os prazeres sexuais antes da vida adulta em si. É uma prática saudável e natural, que ajuda no desenvolvimento sexual humano. Ainda assim, se não consegue controlar a vontade de se masturbar — a ponto de ela começa a atrapalhar os seus estudos, trabalho ou vida social —, talvez seja hora de retomar o controle.')
          .setURL('https://pt.wikihow.com/Parar-de-se-Masturbar')
          .setFooter('Providenciado por pt.wikihow.com')
    
        const mamilos = new MessageEmbed()
          .setColor('#97ff63')
          .setAuthor('RandWiki | Wikihow', 'https://upload.wikimedia.org/wikipedia/commons/f/fb/WikiHow_initials.png')
          .setTitle('Como Esconder os Mamilos')
          .setDescription('Sinopse:\n\nAlgumas pessoas não se importam, ou até gostam de mostrar os mamilos por baixo da roupa. Todavia, esse comportamento não é a regra. Caso você prefira que as pessoas não os vejam, este tutorial ensina a escondê-los de maneira confortável. :smirk:')
          .setURL('https://pt.wikihow.com/Esconder-os-Mamilos')
          .setFooter('Providenciado por pt.wikihow.com')
    
        const cabelo = new MessageEmbed()
          .setColor('#97ff63')
          .setAuthor('RandWiki | Wikihow', 'https://upload.wikimedia.org/wikipedia/commons/f/fb/WikiHow_initials.png')
          .setTitle('Como Fazer o Cabelo Crescer em Uma Semana')
          .setDescription('Sinopse:\n\nVocê pode querer que o seu cabelo cresça rápido por diversos motivos: desfazer um corte mal pensado, ir a um evento importante, etc. Seja o que for, há alguns meios práticos de estimular o crescimento dos fios. Experimente métodos como fazer uma massagem com um óleo natural, ajustar a sua rotina de cuidados para evitar o estresse e ingerir nutrientes que contribuam com a saúde capilar (como proteínas e biotina). Embora o cabelo tenha um limite de crescimento semanal, dá para fazer algumas coisas para maximizar o processo.')
          .setURL('https://pt.wikihow.com/Fazer-o-Cabelo-Crescer-em-Uma-Semana')
          .setFooter('Providenciado por pt.wikihow.com')

        const buraco = new MessageEmbed()
          .setColor('#97ff63')
          .setAuthor('RandWiki | Wikihow', 'https://upload.wikimedia.org/wikipedia/commons/f/fb/WikiHow_initials.png')
          .setTitle('Como Consertar Buracos em uma Parede')
          .setDescription('Sinopse:\n\nAs paredes podem ser danificadas de diversas maneiras, com buracos para pregos e rachaduras e até quebras grandes. Cada tipo de problema tem uma solução bem diferente, cuja dificuldade depende bastante da extensão do dano. Este guia fornecerá instruções sobre como consertar imperfeições ou buracos em paredes')
          .setURL('https://pt.wikihow.com/Consertar-Buracos-em-uma-Parede')
          .setFooter('Providenciado por pt.wikihow.com')
    
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
    
        const paistoxicos = new MessageEmbed()
          .setColor('#97ff63')
          .setAuthor('RandWiki | Wikihow', 'https://upload.wikimedia.org/wikipedia/commons/f/fb/WikiHow_initials.png')
          .setTitle('Como Lidar Com Pais Toxicos')
          .setDescription('Sinopse:\n\nOs pais tóxicos muitas vezes são egoístas, manipuladores e negligentes. Crescer perto deles pode ser bem difícil e leva tempo para se curar de tudo isso. A boa notícia é que você pode aprender a lidar com seus pais tóxicos para sentir-se melhor consigo mesmo. Não importa se você ainda mora com seus pais ou se já mora sozinho, é possível “gerenciar” seu relacionamento com eles desvencilhando-se deles emocionalmente e impondo limites. Além disso, você terá que lidar com suas emoções e aprender a cuidar de si mesmo.')
          .setURL('https://pt.wikihow.com/Lidar-com-Pais-T%C3%B3xicos')
          .setFooter('Providenciado por pt.wikihow.com')
    
        const libraenganando = new MessageEmbed()
          .setColor('#97ff63')
          .setAuthor('RandWiki | Wikihow', 'https://upload.wikimedia.org/wikipedia/commons/f/fb/WikiHow_initials.png')
          .setTitle('Como Saber se um Homem de Libra Está Enganando Você')
          .setDescription('Sinopse:\n\nSe você está saindo com um homem de libra, pode se encantar pelo charme dele. Mesmo que os librianos costumem demostrar amor com seus parceiros, às vezes eles têm dificuldade de compartilhar o que sentem. se a preocupação for descobrir se ele está fazendo joguinhos ou está levando você a sério, relaxe! Nós vamos lhe ajudar a descobrir se o rapaz está disposto ou não a ter um relacionamento sério com você.')
          .setURL('https://pt.wikihow.com/Saber-se-um-Homem-de-Libra-Est%C3%A1-Enganando-Voc%C3%AA')
          .setFooter('Providenciado por pt.wikihow.com')
    
        const amizadetoxica = new MessageEmbed()
          .setColor('#97ff63')
          .setAuthor('RandWiki | Wikihow', 'https://upload.wikimedia.org/wikipedia/commons/f/fb/WikiHow_initials.png')
          .setTitle('Como Saber se um Homem de Libra Está Enganando Você')
          .setDescription('Sinopse:\n\nQuando você chega em casa depois de sair com seu amigo, como você se sente? Amigos tóxicos sugam a sua energia, deixam você estressado e causam decepções. Talvez você até consiga sentir esse estresse na sua mandíbula e nos ombros agora mesmo. Quando perceber que tem até um pouco de medo da próxima conversa ou de sair com esse amigo, chegou a hora de acabar com essa amizade e se libertar. Veja abaixo um guia com 10 opções e estratégias para terminar sua amizade e dar-se permissão para encontrar o tipo de conexão que você merece.')
          .setURL('https://pt.wikihow.com/Saber-se-um-Homem-de-Libra-Est%C3%A1-Enganando-Voc%C3%AA')
          .setFooter('Providenciado por pt.wikihow.com')
        
        const naftalina = new MessageEmbed()
          .setColor('#97ff63')
          .setAuthor('RandWiki | Wikihow', 'https://upload.wikimedia.org/wikipedia/commons/f/fb/WikiHow_initials.png')
          .setTitle('Como Eliminar o Cheiro de Naftalina')
          .setDescription('Sinopse:\n\nA naftalina pode deixar um cheiro desagradável nos ambientes, roupas, ou em suas mãos. Substâncias que absorvem odores como o vinagre podem dissipar o cheiro deixado nas roupas. Além disso, lavar suas mãos com pasta de dente e detergente de limão, por exemplo, também pode ajudar a remover o odor de naftalina. Felizmente, uma vez que você conseguiu se livrar dele, existem algumas técnicas testadas e comprovadas para evitar que o problema se repita.')
          .setURL('https://pt.wikihow.com/Eliminar-o-Cheiro-de-Naftalina')
          .setFooter('Providenciado por pt.wikihow.com')
          
        const botaschatas = new MessageEmbed()
          .setColor('#97ff63')
          .setAuthor('RandWiki | Wikihow', 'https://upload.wikimedia.org/wikipedia/commons/f/fb/WikiHow_initials.png')
          .setTitle('Como Impedir as Botas de Couro de Fazerem Barulhos Chatos ao Andar')
          .setDescription('Sinopse:\n\nBotas que ficam fazendo barulho irritam bastante, principalmente para quem não quer chamar toda a atenção sempre que chega em algum lugar. A boa notícia é que acabar com o barulho alto que as botas de couro fazem é bem fácil. Para começar, identifique de onde o som está vindo. De dentro da bota? A palmilha provavelmente é a culpada e a solução é usar talco. Se parece que vem da sola, esfregue uma folha para secadora de roupas ou uma lixa de construção para mudar o som que o andar cria. Já se o barulho vem da parte de cima ou da lateral das botas, passe sabão de sela ou óleo para condicionar o couro para acabar com esse incômodo.')
          .setURL('https://pt.wikihow.com/Impedir-as-Botas-de-Couro-de-Fazerem-Barulhos-Chatos-ao-Andar')
          .setFooter('Providenciado por pt.wikihow.com')

        const comoapresentar = new MessageEmbed()
          .setColor('#97ff63')
          .setAuthor('RandWiki | Wikihow', 'https://upload.wikimedia.org/wikipedia/commons/f/fb/WikiHow_initials.png')
          .setTitle('Como Se Apresentar a Alguém')
          .setDescription('Sinopse:\n\nApresentar-se é muito mais do que dizer o nome: é um modo de se conectar a um desconhecido por meio da troca de palavras e, possivelmente, de algum contato físico. Apresentar-se a estranhos pode ser complicado, pois o que se deve dizer está completamente ligado a um contexto. Você pode se apresentar de maneiras diferentes caso esteja diante de uma plateia antes de iniciar um discurso, caso esteja em evento onde possa criar uma rede de contatos, ou somente iniciando uma conversa com alguém que acabou de conhecer em uma festa. O mais importante é se apresentar de um jeito apropriado, fazendo com que as pessoas gostem e se lembrem de você.')
          .setURL('https://pt.wikihow.com/Se-Apresentar-a-Algu%C3%A9m')
          .setFooter('Providenciado por pt.wikihow.com')
          
        const seduziralguem = new MessageEmbed()
          .setColor('#97ff63')
          .setAuthor('RandWiki | Wikihow', 'https://upload.wikimedia.org/wikipedia/commons/f/fb/WikiHow_initials.png')
          .setTitle('Como Seduzir Alguém Usando Apenas Seus Olhos')
          .setDescription('Sinopse:\n\nSeus olhos podem ser poderosas ferramentas de sedução. Existem diversas maneiras de usá-los para demonstrar interesse e chamar a atenção para você. Faça contato visual e use e abuse de seu olhar 43.')
          .setURL('https://pt.wikihow.com/Seduzir-Algu%C3%A9m-Usando-Apenas-Seus-Olhos')
          .setFooter('Providenciado por pt.wikihow.com')

        const aceitarnariz = new MessageEmbed()
          .setColor('#97ff63')
          .setAuthor('RandWiki | Wikihow', 'https://upload.wikimedia.org/wikipedia/commons/f/fb/WikiHow_initials.png')
          .setTitle('Como Aprender a Aceitar Seu Nariz')
          .setDescription('Sinopse:\n\nSentir-se desconfortável com a aparência de seu nariz pode fazer com que você o considere um obstáculo para o sucesso social e para a felicidade. Esses pensamentos estão apenas em sua cabeça e normalmente não refletem o que as pessoas consideram mais importante em você. Saiba que é possível sentir-se atraente e feliz com um nariz diferente. Continue lendo para aprender a aceitar a aparência de seu nariz e a abraçar a beleza dele.')
          .setURL('https://pt.wikihow.com/Aprender-a-Aceitar-Seu-Nariz')
          .setFooter('Providenciado por pt.wikihow.com')

        const pelosgrossos = new MessageEmbed()
          .setColor('#97ff63')
          .setAuthor('RandWiki | Wikihow', 'https://upload.wikimedia.org/wikipedia/commons/f/fb/WikiHow_initials.png')
          .setTitle('Como Lidar com Pelos Grossos nas Pernas')
          .setDescription('Sinopse:\n\nPara algumas pessoas, não há nada mais incômodo do que pelos fora de controle. Muitas pessoas preferem manter suas pernas lisas, e isso pode ser difícil quando seus pelos crescem naturalmente grossos. Felizmente, há várias opções disponíveis para lidar com isso. Depois de escolher a mais apropriada para sua vida, você estará pronta para manter suas pernas lisas e macias.')
          .setURL('https://pt.wikihow.com/Lidar-com-Pelos-Grossos-nas-Pernas')
          .setFooter('Providenciado por pt.wikihow.com')

        const pilula = new MessageEmbed()
          .setColor('#97ff63')
          .setAuthor('RandWiki | Wikihow', 'https://upload.wikimedia.org/wikipedia/commons/f/fb/WikiHow_initials.png')
          .setTitle('Como Engolir uma Pílula')
          .setDescription('Sinopse:\n\nEmbora pareça uma tarefa simples, engolir um comprimido é algo que muitos adultos e crianças têm dificuldade em fazer. O medo de engasgar faz com que a garganta se feche, de modo que ele então ficará na boca até ser cuspido. Felizmente há várias maneiras de abordar o problema para que você possa relaxar, superar o medo de engasgar e simplesmente deixar que o comprimido deslize pela garganta.')
          .setURL('https://pt.wikihow.com/Engolir-uma-P%C3%ADlula')
          .setFooter('Providenciado por pt.wikihow.com')
            
        const inserirgrafite = new MessageEmbed()
          .setColor('#97ff63')
          .setAuthor('RandWiki | Wikihow', 'https://upload.wikimedia.org/wikipedia/commons/f/fb/WikiHow_initials.png')
          .setTitle('Como Inserir Grafite em uma Lapiseira')
          .setDescription('Sinopse:\n\nAs lapiseiras são fabricadas em diversos modelos (assim como as canetas multifuncionais que também aceitam grafite), de modo que é sempre útil ter instruções sobre como recarregá-las. Felizmente, os métodos em geral são bem padronizados, independentemente de a lapiseira ser de carregamento simples ou ter espaço para colocar vários grafites. No entanto, é importante sempre carregá-las com o tipo certo de grafite na quantidade certa para garantir o melhor funcionamento. Além disso, também pode ser útil pesquisar na internet para obter mais informações sobre o modelo específico da sua lapiseira.')
          .setURL('https://pt.wikihow.com/Inserir-Grafite-em-uma-Lapiseira')
          .setFooter('Providenciado por pt.wikihow.com')

        const mulheramar = new MessageEmbed()
          .setColor('#97ff63')
          .setAuthor('RandWiki | Wikihow', 'https://upload.wikimedia.org/wikipedia/commons/f/fb/WikiHow_initials.png')
          .setTitle('Como Incentivar uma Mulher a se Apaixonar por Você')
          .setDescription('Sinopse:\n\nA maioria das pessoas realmente quer alguém ao seu lado para amar e ser amada. Se você ama e se importa de verdade com alguma mulher e gostaria que esse sentimento fosse recíproco, comece descobrindo se ela está interessada em você. Para fazer com que ela se apaixone por você, demonstre que você é digno do amor dela, atice o fogo da paixão, dê apoio e construa uma comunicação sólida com ela. Assim como na vida, não há garantias no amor, mas estas dicas deverão ajudar você a ter ideias para começar a ganhar o coração da sua amada.')
          .setURL('https://pt.wikihow.com/Incentivar-uma-Mulher-a-se-Apaixonar-por-Voc%C3%AA')
          .setFooter('Providenciado por pt.wikihow.com')

        const chamaconha = new MessageEmbed()
          .setColor('#97ff63')
          .setAuthor('RandWiki | Wikihow', 'https://upload.wikimedia.org/wikipedia/commons/f/fb/WikiHow_initials.png')
          .setTitle('Como Fazer Chá de Maconha')
          .setDescription('Sinopse:\n\nO chá de maconha é um agrado reconfortante que transmite um efeito calmante, perfeito para aliviar dor ou estresse. Para extrair o THC, a substância química da maconha, deve-se aquecer manteiga ou outra gordura com o chá. Você pode adicionar sabor à bebida acrescentando folhas de chá comum à mistura e até mesmo fazer um chá indiano com leite. Se não quiser fazer uma bebida muito forte, crie uma bebida de ervas relaxante acrescentando brotos de maconha triturados em água fervente.')
          .setURL('https://pt.wikihow.com/Fazer-Ch%C3%A1-de-Maconha')
          .setFooter('Providenciado por pt.wikihow.com')

        const hackescola = new MessageEmbed()
          .setColor('#97ff63')
          .setAuthor('RandWiki | Wikihow', 'https://upload.wikimedia.org/wikipedia/commons/f/fb/WikiHow_initials.png')
          .setTitle('Como Invadir um Computador da Escola')
          .setDescription('Sinopse:\n\nEste artigo vai ensiná-lo a obter acesso administrativo em um computador da sua escola. É bem provável que os computadores sejam Windows, e não Mac; caso contrário, não você não vai conseguir hackeá-lo. Esse acesso também será inviável no caso de haver algum bloqueio na BIOS. Outra limitação que pode impedi-lo de obter acesso administrativo é o de os computadores estarem conectados em um domínio')
          .setURL('https://pt.wikihow.com/Invadir-um-Computador-da-Escola')
          .setFooter('Providenciado por pt.wikihow.com')

        const badboy = new MessageEmbed()
          .setColor('#97ff63')
          .setAuthor('RandWiki | Wikihow', 'https://upload.wikimedia.org/wikipedia/commons/f/fb/WikiHow_initials.png')
          .setTitle('Como Ser um Bad Boy')
          .setDescription('Sinopse:\n\nJá imaginou por que mulheres não conseguem resistir a bad boys? Não é por eles serem patéticos – ninguém gosta de alguém patético. Em vez disso, é pelo fato de eles serem confiantes e assertivos – em outras palavras, sexys. Use esses indicadores para construir sua confiança masculina e mostrar ao mundo quem é que manda no negócio.')
          .setURL('https://pt.wikihow.com/Ser-um-Bad-Boy')
          .setFooter('Providenciado por pt.wikihow.com')

        const terminaramizade = new MessageEmbed()
          .setColor('#97ff63')
          .setAuthor('RandWiki | Wikihow', 'https://upload.wikimedia.org/wikipedia/commons/f/fb/WikiHow_initials.png')
          .setTitle("Como Terminar uma Amizade Colorida")
          .setDescription("Sinopse:\n\nTer uma amizade colorida pode ser divertido e empoderador, mas nem sempre é o melhor para o seu estilo de vida. As amizades coloridas podem acabar por diversos motivos. Talvez você tenha mudado de ideia, tem novas prioridades ou um dos dois acabou se envolvendo emocionalmente. Terminar uma amizade colorida pode ser difícil, mas é possível encerrar e continuar amigos sem magoar os sentimentos do outro. Para ajudar você, nós juntamos algumas dicas para terminar uma amizade colorida do melhor jeito possível.")
          .setURL('https://pt.wikihow.com/Terminar-uma-Amizade-Colorida')
          .setFooter('Providenciado por pt.wikihow.com')

        const gaguejar = new MessageEmbed()
          .setColor('#97ff63')
          .setAuthor('RandWiki | Wikihow', 'https://upload.wikimedia.org/wikipedia/commons/f/fb/WikiHow_initials.png')
          .setTitle("Como Parar de Gaguejar")
          .setDescription("Sinopse:\n\nEstima-se que 1% da população mundial sofre de gagueira, distúrbio que quebra o fluxo normal de fala da pessoa e a faz repetir certos sons e palavras. Embora cada indivíduo seja diferente e não exista uma cura definitiva ou mágica para o problema, há exercícios capazes de reduzir um pouco os sintomas. Leia o artigo abaixo para aprender a reduzir a sua ansiedade, estudar os seus padrões de fala, descobrir o que causa os sintomas e fazer ensaios práticos para se ver mais tranquilo em pouco tempo.")
          .setURL('https://pt.wikihow.com/Parar-de-Gaguejar')
          .setFooter('Providenciado por pt.wikihow.com')

        const bonsonhos = new MessageEmbed()
          .setColor('#97ff63')
          .setAuthor('RandWiki | Wikihow', 'https://upload.wikimedia.org/wikipedia/commons/f/fb/WikiHow_initials.png')
          .setTitle("Como Ter Bons Sonhos")
          .setDescription("Sinopse:\n\nOs sonhos são a forma como o corpo processa os estímulos da vida cotidiana. As coisas que você vê, cheira, ouve ou faz imediatamente antes de ir dormir podem afetar o conteúdo deles. Além disso, o estresse e as expectativas em relação aos sonhos também podem ter um impacto sobre a forma como dormimos. Você poderá aprender a sonhar com coisas agradáveis ao adequar o ambiente em que dorme e visualizar bons sonhos.")
          .setURL('https://pt.wikihow.com/Ter-Bons-Sonhos')
          .setFooter('Providenciado por pt.wikihow.com')

        const vidente = new MessageEmbed()
          .setColor('#97ff63')
          .setAuthor('RandWiki | Wikihow', 'https://upload.wikimedia.org/wikipedia/commons/f/fb/WikiHow_initials.png')
          .setTitle("Como se Tornar um Vidente")
          .setDescription('Sinopse:\n\nA clarividência é a habilidade de "ver o futuro"; a vidência real não exige bolas de cristal e rituais de adivinhação, por mais que muitas pessoas pensem assim. Antes de desenvolver a sua clarividência, pratique bastante para fortalecer suas habilidades intuitivas naturais. Quando elas estiverem bem afinadas, exercite a capacidade da mente de explorar visões, sons, sentimentos e o fluxo de energia ao redor. Continue lendo para aprender mais sobre o processo de vidência.')
          .setURL('https://pt.wikihow.com/se-Tornar-um-Vidente')
          .setFooter('Providenciado por pt.wikihow.com')

        const webnamoro = new MessageEmbed()
          .setColor('#97ff63')
          .setAuthor('RandWiki | Wikihow', 'https://upload.wikimedia.org/wikipedia/commons/f/fb/WikiHow_initials.png')
          .setTitle("Como Ter Sucesso no Namoro Online")
          .setDescription("Sinopse:\n\nUsar sites e aplicativos de relacionamento parece estranho no início, mas é uma forma bem legal de conhecer gente nova! Para começar, você tem que criar um perfil que mostre toda a sua personalidade. Depois, explore as pessoas que aparecerem no seu feed e puxe papo com as que forem mais interessantes. Por último, quando chegar a hora de encontrar alguém pessoalmente, combine em um lugar público e seguro e veja o que acontece!")
          .setURL('https://pt.wikihow.com/Ter-Sucesso-no-Namoro-Online')
          .setFooter('Providenciado por pt.wikihow.com')

        const cabrito = new MessageEmbed()
          .setColor('#97ff63')
          .setAuthor('RandWiki | Wikihow', 'https://upload.wikimedia.org/wikipedia/commons/f/fb/WikiHow_initials.png')
          .setTitle("Como Cuidar de Cabritos")
          .setDescription("Sinopse:\n\nPode ser muito empolgante ter bebês cabras, ou cabritos. Mas, ainda que sejam divertidos, eles precisam de muitos cuidados para crescerem bem. Experimente seguir algumas das melhores práticas para manter seus novos filhotinhos felizes e saudáveis.")
          .setURL('https://pt.wikihow.com/Cuidar-de-Cabritos')
          .setFooter('Providenciado por pt.wikihow.com')

        const infeccaoumbigo = new MessageEmbed()
          .setColor('#97ff63')
          .setAuthor('RandWiki | Wikihow', 'https://upload.wikimedia.org/wikipedia/commons/f/fb/WikiHow_initials.png')
          .setTitle("Como Tratar uma Infecção no Umbigo")
          .setDescription("Sinopse:\n\nUm umbigo infeccionado não é nada agradável ou bonito, mas não costuma ser um problema grave – a infecção é fácil de tratar. O ambiente escuro e quente é muito propício para a proliferação de fungos e bactérias que volta e meia causam uma infecção. Um piercing no local também pode oferecer riscos. A melhor coisa que você pode fazer é tratá-lo bem rápido, antes que a dor piore. Por sorte, esse problema pode ser resolvido com antibióticos e algumas mudanças nos hábitos de higiene pessoal.")
          .setURL('https://pt.wikihow.com/Tratar-uma-Infec%C3%A7%C3%A3o-no-Umbigo')
          .setFooter('Providenciado por pt.wikihow.com')

        const mineoff = new MessageEmbed()
          .setColor('#97ff63')
          .setAuthor('RandWiki | Wikihow', 'https://upload.wikimedia.org/wikipedia/commons/f/fb/WikiHow_initials.png')
          .setTitle("Como Jogar Minecraft Offline")
          .setDescription("Sinopse:\n\nHá vários benefícios em jogar Minecraft offline, como poder se divertir mesmo quando não tiver uma conexão de internet, evitar a instalação de atualizações, reduzir o tempo de lag e jogar sem precisar se conectar e se autenticar nos servidores do jogo. Você pode jogar offline ao selecionar o modo de um jogador ou baixar jogos e depois acessá-los no modo de um jogador caso tenha um servidor no Minecraft Realms.")
          .setURL('https://pt.wikihow.com/Jogar-Minecraft-Offline')
          .setFooter('Providenciado por pt.wikihow.com')

        const rindocostas = new MessageEmbed()
          .setColor('#97ff63')
          .setAuthor('RandWiki | Wikihow', 'https://upload.wikimedia.org/wikipedia/commons/f/fb/WikiHow_initials.png')
          .setTitle("Como Lidar com Quem Estiver Rindo Pelas suas Costas")
          .setDescription("Sinopse:\n\nA sensação de ser criticado e ter alguém rindo pelas suas costas é bem comum e um medo irritante. Mas você não precisa se chatear se os outros o estão antagonizando em segredo. Analise a situação com olhos críticos e, se achar que os outros estão zombando da sua cara, aja para melhorar sua autoconfiança e remova essas influências negativas da sua vida. Avaliando a situação, confrontando as pessoas diretamente e focando em desenvolver relacionamentos positivos, você poderá aprender a lidar positivamente com quem está rindo pelas suas costas.")
          .setURL('https://pt.wikihow.com/Lidar-com-Quem-Estiver-Rindo-Pelas-suas-Costas')
          .setFooter('Providenciado por pt.wikihow.com')

        const peleradiante = new MessageEmbed()
          .setColor('#97ff63')
          .setAuthor('RandWiki | Wikihow', 'https://upload.wikimedia.org/wikipedia/commons/f/fb/WikiHow_initials.png')
          .setTitle("Como Deixar Sua Pele Radiante em Minutos")
          .setDescription("Sinopse:\n\nImagine só: você está se arrumando às pressas para um encontro ou uma reunião importante no trabalho e, de repente, se olha no espelho e vê que a sua pele está ressecada e sem brilho. Parece o fim do mundo, mas não precisa ser! Incorpore as dicas deste artigo à sua vida e os seus problemas logo vão acabar.")
          .setURL('https://pt.wikihow.com/Deixar-Sua-Pele-Radiante-em-Minutos')
          .setFooter('Providenciado por pt.wikihow.com')

        const hackearpc = new MessageEmbed()
          .setColor('#97ff63')
          .setAuthor('RandWiki | Wikihow', 'https://upload.wikimedia.org/wikipedia/commons/f/fb/WikiHow_initials.png')
          .setTitle("Como Hackear um Computador")
          .setDescription("Sinopse:\n\nEste artigo o ensinará a invadir e acessar um computador Windows ou Mac, além de usar o TeamViewer para controlar remotamente outro computador. Vamos lá?")
          .setURL('https://pt.wikihow.com/Hackear-um-Computador')
          .setFooter('Providenciado por pt.wikihow.com')

        const sexofrango = new MessageEmbed()
          .setColor('#97ff63')
          .setAuthor('RandWiki | Wikihow', 'https://upload.wikimedia.org/wikipedia/commons/f/fb/WikiHow_initials.png')
          .setTitle("Como Determinar o Sexo de um Frango")
          .setDescription("Sinopse:\n\nSe você souber o sexo dos frangos que tem em casa, vai poder criar um ambiente mais adequado para eles. Infelizmente, esse processo não é tão simples e é preciso prestar atenção a vários sinais mais sutis: logo depois que eles saírem do ovo, observe as penas para ver se há diferença nas cores; algumas semanas depois, veja se alguns pintos parecem maiores e agressivos que os outros. Por fim, você precisa identificar o sexo de pelo menos metade do bando para conseguir melhorar mesmo as condições dos animais.")
          .setURL('https://pt.wikihow.com/Determinar-o-Sexo-de-um-Frango')
          .setFooter('Providenciado por pt.wikihow.com')

      
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
              maconha,
              paistoxicos,
              libraenganando,
              amizadetoxica,
              naftalina,
              botaschatas,
              comoapresentar,
              seduziralguem,
              aceitarnariz,
              pelosgrossos,
              pilula,
              inserirgrafite,
              mulheramar,
              chamaconha,
              hackescola,
              badboy,
              terminaramizade,
              gaguejar,
              bonsonhos,
              vidente,
              webnamoro,
              cabrito,
              sexofrango,
              infeccaoumbigo,
              mineoff,
              rindocostas,
              peleradiante,
              hackearpc
            ]
        
            const Resposta = Math.floor(Math.random() * RandWiki.length)
            interaction.reply({ embeds: [RandWiki[Resposta]] })
		}
};