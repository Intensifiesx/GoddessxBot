import {
  ActionRowBuilder,
  ButtonBuilder,
  EmbedBuilder,
  ButtonStyle,
} from "discord.js";
import randColor from "../../RandColor.js";

export default {
  main: async function (interaction) {
    var user = interaction.options.getUser("user") || interaction.user,
      pfp = user.displayAvatarURL({ format: "png", dynamic: true, size: 1024 }),
      link = new ActionRowBuilder().addComponents(
        new ButtonBuilder()
          .setLabel("Link")
          .setStyle(ButtonStyle.Link)
          .setURL(`${pfp}`)
      );

    // If user has no avatar, return error
    if (pfp === null)
      return interaction.reply(
        `${interaction.user}, you do not have an avatar!`
      );

    await interaction.reply({
      components: [link],
      embeds: [
        new EmbedBuilder()
          .setColor(randColor())
          .setAuthor({ name: `${user.tag}`, iconURL: `${user.avatarURL()}` })
          .setImage(pfp)
          .setTimestamp(),
      ],
    });
  },
};
