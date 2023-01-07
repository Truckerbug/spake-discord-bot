const { SlashCommandBuilder, EmbedBuilder, channelLink } = require('discord.js');

const testEmbed = new EmbedBuilder()
    .setColor(0x0099FF)
    .setTitle('This bot on github')
    .setURL('https://github.com/Truckerbug/spake-discord-bot')
    .setAuthor({ name: 'Truckerbug', url: 'https://bit.ly/truckerbug11'})
    .setDescription('This bot on GitHub')

module.exports = {
    data: new SlashCommandBuilder()
        .setName('test')
        .setDescription('Test this bot!'),
    async execute(interaction) {
        channel.send({ embeds: [testEmbed] });
    },
};