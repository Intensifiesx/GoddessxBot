import {
  ActionRowBuilder,
  ButtonBuilder,
  EmbedBuilder,
  ButtonStyle,
} from "discord.js";
import randColor from "../../RandColor.js";
import fetch from "node-fetch";
var interact;

const Urban = {
  count: 0,
  definitions: [],
  returnAwait: async function (data) {
    return await data;
  },
  main: async function (interaction) {
    var words = interaction.options
        .getString("search")
        .replace(/(^\w{1})|(\s+\w{1})/g, (letter) => letter.toUpperCase()),
      { list } = await fetch(
        `https://api.urbandictionary.com/v0/define?term=?${words}`
      ).then((response) => response.json());

    // If no results are found, return an error.
    if (list[0] === undefined)
      return await interaction.reply("No results found!");

    interact = interaction;
    this.count = 0;
    this.definitions = list;

    await interaction
      .reply({
        components: [Urban.startButton()],
        embeds: [Urban.nextUrban(-1)],
      })
      .catch((err) => {
        console.log(err);
        interaction.reply({
          content: "Error retrieving post! Try again.",
          ephemeral: true,
        });
      });

    setTimeout(() => {
      this.returnAwait(interaction.editReply({ components: [] }));
    }, 120000);
  },
  updateUrban: async function (interaction, urban) {
    // If count is 1 (second word) and back button pressed, remove back button
    if (this.count === 1 && urban === true)
      return await interaction.update({
        components: [this.startButton()],
        embeds: [this.nextUrban(urban)],
      });
    if (this.count === this.definitions.length - 2 && urban === false)
      return await interaction.update({
        components: [this.backButton()],
        embeds: [this.nextUrban(urban)],
      });

    // Update embed
    await interaction.update({
      components: [this.nextbackButton()],
      embeds: [this.nextUrban(urban)],
    });
  },
  nextUrban: function (backButPressed) {
    // First image
    if (backButPressed !== -1) {
      //Back button pressed
      if (backButPressed) {
        if (this.count !== 0) --this.count; //Stops user from backing up beyond 1
      } else {
        //Next button pressed
        if (this.count !== this.definitions.length) ++this.count; //Stops user from going past 100 images
      }
    }

    // Check if there are any results
    if (this.definitions[this.count] === undefined) return;

    return new EmbedBuilder()
      .setColor(randColor())
      .setTitle(
        `📖 Urban Dictionary - Word #${this.count + 1} of ${
          this.definitions.length
        } 📖`
      )
      .setDescription(
        `**${this.definitions[this.count].word}:** ${
          this.definitions[this.count].definition
        } \n\n**Example:** ${this.definitions[this.count].example})`
      )
      .setThumbnail(
        "https://miro.medium.com/max/2625/1*ctUugc4pAxlLweBOxzySLg.png"
      )
      .setTimestamp()
      .setFooter({
        text: interact.user.tag,
        iconURL: interact.user.avatarURL(),
      });
  },
  startButton: function () {
    return new ActionRowBuilder()
      .addComponents(
        new ButtonBuilder()
          .setLabel("Link")
          .setStyle(ButtonStyle.Link)
          .setURL(`${this.definitions[this.count].permalink}`)
      )
      .addComponents(
        new ButtonBuilder()
          .setLabel("Next")
          .setCustomId("nextUrban")
          .setStyle(ButtonStyle.Primary)
      );
  },
  backButton: function () {
    return new ActionRowBuilder()
      .addComponents(
        new ButtonBuilder()
          .setLabel("Link")
          .setStyle(ButtonStyle.Link)
          .setURL(`${this.definitions[this.count].permalink}`)
      )
      .addComponents(
        new ButtonBuilder()
          .setLabel("Back")
          .setCustomId("backUrban")
          .setStyle(ButtonStyle.Primary)
      );
  },
  nextbackButton: function () {
    return new ActionRowBuilder()
      .addComponents(
        new ButtonBuilder()
          .setLabel("Link")
          .setStyle(ButtonStyle.Link)
          .setURL(`${this.definitions[this.count].permalink}`)
      )
      .addComponents(
        new ButtonBuilder()
          .setLabel("Back")
          .setCustomId("backUrban")
          .setStyle(ButtonStyle.Primary)
      )
      .addComponents(
        new ButtonBuilder()
          .setLabel("Next")
          .setCustomId("nextUrban")
          .setStyle(ButtonStyle.Primary)
      );
  },
};
export { Urban };
