import {
  ActionRowBuilder,
  ButtonBuilder,
  EmbedBuilder,
  ButtonStyle,
} from "discord.js";
import randColor from "../../RandColor.js";

export default {
  main: async function (interaction) {
    var emote = interaction.options.getString("emote"),
      msg = emote.split(":").slice(0)[0], // Get the emote name
      id = emote.split(":").slice(2)[0], // Get the emote id
      test = `https://cdn.discordapp.com/emojis/${id}.png`;

    // If the emote is not a custom emote, return error
    if (!msg || !id || test.includes(`discordapp.com/emojis/undefined`))
      return interaction.reply(
        `${interaction.user}, format error! Only can enlarge custom emotes! (Ex. **/m Enlarge emote**)`
      );

    id = id.replace(/>/g, ""); // Remove the > from the id

    // If the emote a gif, set the image to the gif
    if (msg.startsWith("<a"))
      msg = `https://cdn.discordapp.com/emojis/${id}.gif`;
    // Else, set the image to the png
    else msg = `https://cdn.discordapp.com/emojis/${id}.png`;

    await interaction.reply({
      components: [
        new ActionRowBuilder().addComponents(
          new ButtonBuilder()
            .setLabel("Link")
            .setStyle(ButtonStyle.Link)
            .setURL(`${msg}`)
        ),
      ],
      embeds: [
        new EmbedBuilder()
          .setColor(randColor())
          .setImage(`${msg}`)
          .setFooter({
            text: interaction.user.tag,
            iconURL: interaction.user.avatarURL({
              format: "png",
              dynamic: true,
              size: 512,
            }),
          }),
      ],
    });
  },
};
