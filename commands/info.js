const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('info')
        .setDescription('Display info about this droid.'),
    async execute(interaction) {
        return interaction.reply(`This is not the droid you're looking for`);
    },
};