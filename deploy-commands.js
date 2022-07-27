
const { SlashCommand, Routes, SlashCommandBuilder, ContextMenuCommandAssertions } = require('discord.js');
const { REST } = require('@discordjs/rest');
const { clientId, guildId, token} = require('./config.json');
const commands = [
    new SlashCommandBuilder().setName('ping').setDescription('pong'),
    new SlashCommandBuilder().setName('server').setDescription('Info serveur'),
    new SlashCommandBuilder().setName('user').setDescription('Info user')
]
    .map(command => command.toJSON());

const rest = new REST({version: '10'}).setToken(token);

rest.put(Routes.applicationCommands(clientId, guildId), {body: commands})
    .then(() => console.log('Application enregistrée avec succès'))
    .catch(console.error);
