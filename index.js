// Importation de resources nécessaire pour discord
const { GatewayIntentBits } = require('discord.js');
const Discord = require('discord.js');
const client = new Discord.Client({ intents: [ GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages] });
const config = require('./config.json');
const command = require('./deploy-commands');

// Exécute ce code quand le client est prêt
client.once('ready', () =>{

    console.log(`Login as ${client.user.tag}`);
});

client.on('Intéraction créé', async interaction => {
    if(!interaction.isChatInputCommand()) return;

    const { commandName } = interaction;

    if(commandName === 'ping'){
        await interaction.reply('Pong');
    }else if(commandName === 'server'){
        await interaction.reply(`Info Serveur : ${interaction.guild.name}\nTotal members: ${interaction.guild.memCount}`);
    }else if(commandName === 'user'){
        await insteration.reply(`Ton tag: ${interaction.user.tag}\n Ton id: ${interaction.user.id}`);
    }
});


// Connexion à discord avec le token du client
client.login(config.token);