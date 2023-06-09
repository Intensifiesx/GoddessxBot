import {
  ActionRowBuilder,
  ButtonBuilder,
  EmbedBuilder,
  ButtonStyle,
} from "discord.js";
import randColor from "../../RandColor.js";
import fetch from "node-fetch";
var option1Votes,
  option2Votes,
  percentOp1,
  percentOp2,
  option1,
  option2,
  author,
  title,
  url;

const Rather = {
  embed: function (interaction) {
    return new EmbedBuilder()
      .setColor(randColor())
      .setTitle(`🤔 ${title} 🤔`)
      .setDescription(`${interaction.user} would you rather...`)
      .setFooter({
        text: interaction.user.tag,
        iconURL: interaction.user.avatarURL(),
      })
      .setTimestamp();
  },
  ratherMain: async function (interaction) {
    try {
      author = interaction.user;
      const resp = await fetch("http://either.io/");
      let data = await resp.text();

      data = JSON.parse(
        data.match(/window.initial_question = (\{.+\})/)[1]
      ).question; // Get the question from the text
      title = data.title; // Get the title
      option1 = data.option_1; // Get the first option
      option2 = data.option_2; // Get the second option
      option1Votes = parseInt(data.option1_total); // Get the first option's votes
      option2Votes = parseInt(data.option2_total); // Get the second option's votes
      url = "http://either.io/" + data.id + "/" + data.slug; // Get the url

      var total = option1Votes + option2Votes,
        buttons = new ActionRowBuilder().addComponents(
          new ButtonBuilder()
            .setLabel("A")
            .setStyle(ButtonStyle.Primary)
            .setCustomId("ratherA"),
          new ButtonBuilder()
            .setLabel("B")
            .setStyle(ButtonStyle.Primary)
            .setCustomId("ratherB"),
          new ButtonBuilder()
            .setLabel("Link")
            .setStyle(ButtonStyle.Link)
            .setURL(`${url}`)
        ); // Get the total votes

      percentOp1 = Math.round((option1Votes / total) * 100) + "%"; // Get the first option's percent
      percentOp2 = Math.round((option2Votes / total) * 100) + "%"; // Get the second option's percent

      // If first option is greater than second option, set the first option to green
      if (option1Votes > option2Votes) percentOp1 += " ✅";
      // Else, set the second option to green
      else percentOp2 += " ✅";

      var embed = this.embed(interaction);
      embed.addFields(
        {
          name: `A: **${option1}**`,
          value: `\`\`\`Votes: ? = ?%\`\`\``,
          inline: false,
        },
        {
          name: `or\nB: **${option2}**`,
          value: `\`\`\`Votes: ? = ?%\`\`\``,
          inline: false,
        }
      );

      await interaction.reply({
        components: [buttons],
        embeds: [embed],
      });
    } catch (err) {
      console.log(err);
    }
  },
  showVotes: async function (interaction, option) {
    if (author.id !== interaction.user.id)
      return await interaction.reply({
        content: `${interaction.user}, this is not your command! Create a different instance of the command to use it.`,
        ephemeral: true,
      });
    var embed = this.embed(interaction);
    embed.addFields(
      {
        name: `A: **${option1}**`,
        value: `\`\`\`Votes: ${option1Votes} = ${percentOp1} ${
          option === "A" ? "★ YOU CHOSE ★" : ""
        }\`\`\``,
        inline: false,
      },
      {
        name: `or\nB: **${option2}**`,
        value: `\`\`\`Votes: ${option2Votes} = ${percentOp2} ${
          option === "B" ? "★ YOU CHOSE ★" : ""
        }\`\`\``,
        inline: false,
      }
    );

    await interaction.update({
      embeds: [embed],
      components: [
        new ActionRowBuilder().addComponents(
          new ButtonBuilder()
            .setLabel("Link")
            .setStyle(ButtonStyle.Link)
            .setURL(`${url}`)
        ),
      ],
    });
  },
};
export { Rather };
