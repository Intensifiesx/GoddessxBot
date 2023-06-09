import randColor from "../../RandColor.js";
import {
  ActionRowBuilder,
  ButtonBuilder,
  EmbedBuilder,
  ButtonStyle,
} from "discord.js";
import malScraper from "mal-scraper";

const AnimeSearch = {
  main: async function (interaction) {
    let search = interaction.options.getString("search");

    malScraper
      .getInfoFromName(search)
      .then(async (data) => {
        if (!data.title) return interaction.reply("Nothing found!");
        console.log(data);
        var link = new ActionRowBuilder().addComponents(
            new ButtonBuilder()
              .setLabel("Link")
              .setStyle(ButtonStyle.Link)
              .setURL(`${data.url}`)
          ),
          genres = "`" + data.genres.join("` | `") + "`";

        if (data.genres.length === 0) genres = "`None`";

        await interaction
          .reply({
            components: [link],
            embeds: [
              new EmbedBuilder()
                .setColor(randColor())
                .setTitle(`${data.title} (Rank ${data.ranked})`)
                .setDescription(
                  `**Score:** ${data.score}\n**Episodes:** ${data.episodes}\n**Aired:** ${data.aired}\n**Genres:** ${genres}\n**Synopsis:** ${data.synopsis}`
                )
                .setImage(data.picture)
                .setTimestamp()
                .setFooter({
                  text: "Results may not be correct",
                }),
            ],
          })
          .catch(() => {
            interaction.reply("Something went wrong! Try again later!");
          });
      })
      .catch((err) => console.log(err));
  },
};
export default AnimeSearch;
