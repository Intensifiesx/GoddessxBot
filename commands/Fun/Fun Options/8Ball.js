import randColor from "../../RandColor.js";
import { EmbedBuilder } from "discord.js";

export default {
  main: async function (interaction) {
    var responses = [
        "It is certain",
        "It is decidedly so",
        "Without a doubt",
        "You may rely on it",
        "As I see it",
        "Most Likely",
        "Outlook good",
        "Yes.",
        "No.",
        "Don't count on it.",
        "My reply is no.",
        "My sources say no.",
        "Outlook not so good.",
        "Very doubtful.",
        "Better not tell you now.",
        "Ask again later.",
      ],
      question = interaction.options.getString("question");

    await interaction.reply({
      embeds: [
        new EmbedBuilder()
          .setColor(randColor())
          .addFields(
            { name: `Question:`, value: `${question}`, inline: false },
            {
              name: `Answer:`,
              value: `${
                responses[Math.floor(Math.random() * responses.length)]
              }`,
              inline: false,
            }
          )
          .setThumbnail(
            interaction.user.avatarURL({
              format: "png",
              dynamic: true,
              size: 512,
            })
          )
          .setTimestamp()
          .setFooter({
            text: interaction.user.tag,
            iconURL: interaction.user.displayAvatarURL({
              dynamic: true,
            }),
          }),
      ],
    });
  },
};
