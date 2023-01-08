const { SlashCommandBuilder, EmbedBuilder, channelLink, ActionRowBuilder,ButtonBuilder, ButtonStyle, Events} = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('test')
        .setDescription('Test this bot!'),
    async execute(interaction) {
            const row = new ActionRowBuilder()
                .addComponents(
                    new ButtonBuilder()
                        .setCustomId('primary')
                        .setLabel('Click me!')
                        .setStyle(ButtonStyle.Primary)
                );

            const embed = new EmbedBuilder()
                .setColor(0x0099FF)
                .setTitle('This bot on github')
                .setURL('https://github.com/Truckerbug/spake-discord-bot')
                .setAuthor({ name: 'Truckerbug', url: 'https://bit.ly/truckerbug11'})
                .setDescription('This bot on GitHub')

            await interaction.reply({ content: 'I think you should,', ephemeral: true, embeds: [embed], components: [row] });
            
    },
};