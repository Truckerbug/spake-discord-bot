const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('helloworld')
        .setDescription('Returns the OG unit test to the current channel.'),
    async execute(interaction) {
        return interaction.reply(`Hello, world!`);
    },
};