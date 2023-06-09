import {
  ActionRowBuilder,
  ButtonBuilder,
  EmbedBuilder,
  ButtonStyle,
} from "discord.js";
import randColor from "../../RandColor.js";

export default {
  main: async function (interaction) {
    // If channel does not exist, return error
    if (interaction.channel === null || !interaction.guild.iconURL())
      return interaction.reply(
        `${interaction.user}, this server does not have an icon!`
      );

    var icon = interaction.guild.iconURL({
        format: "png",
        dynamic: true,
        size: 1024,
      }),
      link = new ActionRowBuilder().addComponents(
        new ButtonBuilder()
          .setLabel("Link")
          .setStyle(ButtonStyle.Link)
          .setURL(`${icon}`)
      );

    await interaction.reply({
      components: [link],
      embeds: [
        new EmbedBuilder()
          .setColor(randColor())
          .setAuthor({
            name: interaction.guild.name,
            iconURL: interaction.guild.iconURL(),
          })
          .setImage(icon)
          .setTimestamp()
          .setFooter({
            text: interaction.user.tag,
            iconURL: interaction.user.avatarURL(),
          }),
      ],
    });
  },
};
