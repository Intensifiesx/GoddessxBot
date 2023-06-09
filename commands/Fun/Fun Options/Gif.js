import {
  ActionRowBuilder,
  ButtonBuilder,
  EmbedBuilder,
  ButtonStyle,
} from "discord.js";
import randColor from "../../RandColor.js";
import Giphy from "giphy-api";
var resData, author, args;

const Gifs = {
  count: 0,
  main: async function (interaction) {
    var giphy = new Giphy("Lcs5dSDm0R1AcNzXQ4aAziRLZp43a8Ws");
    args = interaction.options.getString("search");
    this.count = 0;

    giphy.search(args, async function (err, res) {
      try {
        resData = res.data;
        author = interaction.user;

        // Check if there are any results
        if (resData.length === 0)
          return interaction.reply(
            `${author}, no gifs of ${args} found! Try a different search.`
          );

        await interaction.reply({
          embeds: [Gifs.nextGif(-1)],
          components: [Gifs.startButton(), Gifs.updateLink()],
        });

        // Wait 120 seconds until buttons are removed
        setTimeout(async () => {
          await interaction.editReply({ components: [] }).catch((err) => {
            console.log(
              `INTERACTION - User: ${author.username} Gif Message Deleted`
            );
          });
        }, 120000);
      } catch (err) {
        console.log(err);
      }
    });
  },
  updateLink: function () {
    return new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setLabel("Link")
        .setStyle(ButtonStyle.Link)
        .setURL(`${resData[this.count].url}`)
    );
  },
  updateGif: async function (interaction, gif) {
    // If count is 1 (second image) and back button pressed, remove back button
    if (this.count === 1 && gif === true)
      return await interaction.update({
        embeds: [this.nextGif(gif)],
        components: [this.startButton(), this.updateLink()],
      });
    if (this.count === resData.length - 2 && gif === false)
      return await interaction.update({
        embeds: [this.nextGif(gif)],
        components: [this.backButton(), this.updateLink()],
      });

    // Update embed
    await interaction.update({
      embeds: [this.nextGif(gif)],
      components: [this.nextbackButton(), this.updateLink()],
    });
  },
  nextGif: function (backButPressed) {
    // First image
    if (backButPressed !== -1) {
      // Back button pressed
      if (backButPressed) {
        // Check if it's not the first gif
        if (this.count !== 0) --this.count;
      } else {
        // Check if it's not the last gif
        if (this.count !== resData.length) ++this.count;
      }
    }

    return new EmbedBuilder()
      .setColor(randColor())
      .setAuthor({
        name: `📷 Image Search Results - Gif #${this.count + 1} of ${
          resData.length
        } 📷`,
      })
      .setDescription(`${author} **searched for:** \`\`\`${args}\`\`\``)
      .setImage(resData[this.count].images.original.url)
      .setTimestamp()
      .setFooter({
        text: "Gif Results",
        iconURL: author.displayAvatarURL(),
      });
  },
  startButton: function () {
    return new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setLabel("Next")
        .setCustomId("nextGif")
        .setStyle(ButtonStyle.Primary)
    );
  },
  backButton: function () {
    return new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setLabel("Back")
        .setCustomId("backGif")
        .setStyle(ButtonStyle.Primary)
    );
  },
  nextbackButton: function () {
    return new ActionRowBuilder()
      .addComponents(
        new ButtonBuilder()
          .setLabel("Back")
          .setCustomId("backGif")
          .setStyle(ButtonStyle.Primary)
      )
      .addComponents(
        new ButtonBuilder()
          .setLabel("Next")
          .setCustomId("nextGif")
          .setStyle(ButtonStyle.Primary)
      );
  },
};
export { Gifs };
