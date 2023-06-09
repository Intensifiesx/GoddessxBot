import randColor from "../../RandColor.js";
import {
  ActionRowBuilder,
  ButtonBuilder,
  EmbedBuilder,
  ButtonStyle,
} from "discord.js";
import malScraper from "mal-scraper";
var resData, author;

const Animes = {
  count: 0,
  main: async function (interaction) {
    this.count = 0;
    var year = interaction.options.getString("year");

    malScraper
      .getSeason(year, interaction.options.getString("season"))
      .then(async (data) => {
        if (data.TV[0] === undefined)
          return await interaction.reply(`${interaction.user}, nothing found!`);

        resData = data;
        author = interaction.user;

        await interaction.reply({
          components: [Animes.startButton(), Animes.updateLink()],
          embeds: [Animes.nextAnime(-1)],
        });

        setTimeout(async () => {
          await interaction.editReply({ components: [] }).catch((err) => {
            console.log(
              `INTERACTION - User: ${interaction.user.username} Anime season Message Deleted`
            );
          });
        }, 200000);
      })
      .catch(async (err) => {
        if (err instanceof Error) {
          return await interaction.reply({
            content: `${interaction.user}, ${err.message
              .split(" ")
              .slice(1, err.message.length)
              .join(" ")}`,
            ephemeral: true,
          });
        }
        console.log(err);
      });
  },
  updateLink: function () {
    return new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setLabel("Link")
        .setStyle(ButtonStyle.Link)
        .setURL(`${resData.TV[this.count].link}`)
    );
  },
  updateAnime: async function (interaction, goBack) {
    // If count is 1 (second image) and back button pressed, remove back button
    if (this.count === 1 && goBack === true)
      return await interaction.update({
        embeds: [this.nextAnime(goBack)],
        components: [this.startButton(), Animes.updateLink()],
      });
    if (this.count === resData.length - 2 && goBack === false)
      return await interaction.update({
        embeds: [this.nextAnime(goBack)],
        components: [this.backButton(), Animes.updateLink()],
      });

    // Update embed
    await interaction.update({
      embeds: [this.nextAnime(goBack)],
      components: [this.nextbackButton(), Animes.updateLink()],
    });
  },
  nextAnime: function (backButPressed) {
    // First image
    if (backButPressed !== -1) {
      //Back button pressed
      if (backButPressed) {
        if (this.count !== 0) --this.count; //Stops user from going out of bounds
      } else {
        //Next button pressed
        if (this.count !== resData.TV.length) ++this.count; //Stops user from going past 100 images
      }
    }

    if (resData.TV[this.count] === undefined) return;

    var genres = `\`${resData.TV[this.count].genres
        .toString()
        .replace(/\s+/g, "` | `")}\``,
      eps =
        resData.TV[this.count].nbEps === undefined
          ? "`Unknown`"
          : resData.TV[this.count].nbEps,
      title = resData.TV[this.count].title,
      pic = resData.TV[this.count].picture,
      synop = resData.TV[this.count].synopsis,
      date =
        resData.TV[this.count].releaseDate === ""
          ? "`Unknown`"
          : resData.TV[this.count].releaseDate;

    return new EmbedBuilder()
      .setColor(randColor())
      .setAuthor({
        name: `${title} - Anime #${this.count + 1} of ${resData.TV.length}`,
      })
      .setDescription(
        `**Episodes:** ${eps}\n**Release Date:** ${date}\n**Genres:** ${genres}\n**Synopsis:** ${synop}`
      )
      .setImage(`${pic}`)
      .setTimestamp()
      .setFooter({
        text: "Image Results (Some images may not load)",
        iconURL: author.displayAvatarURL(),
      });
  },
  startButton: function () {
    return new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setLabel("Next")
        .setCustomId("nextAnime")
        .setStyle(ButtonStyle.Primary)
    );
  },
  nextbackButton: function () {
    return new ActionRowBuilder()
      .addComponents(
        new ButtonBuilder()
          .setLabel("Back")
          .setCustomId("backAnime")
          .setStyle(ButtonStyle.Primary)
      )
      .addComponents(
        new ButtonBuilder()
          .setLabel("Next")
          .setCustomId("nextAnime")
          .setStyle(ButtonStyle.Primary)
      );
  },
};
export { Animes };
