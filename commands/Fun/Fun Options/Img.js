import {
  ActionRowBuilder,
  ButtonBuilder,
  EmbedBuilder,
  ButtonStyle,
} from "discord.js";
import * as cheerio from "cheerio";
import unirest from "unirest";
import Filter from "bad-words";
import randColor from "../../RandColor.js";
let userAgents = [
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.169 Safari/537.36",
    "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/72.0.3626.121 Safari/537.36",
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.157 Safari/537.36",
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.110 Safari/537.36",
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.45 Safari/537.36",
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.71 Safari/537.36",
  ],
  searchTerm,
  count,
  images,
  author;

async function Img(interaction) {
  images = [];
  searchTerm = interaction.options.getString("search");
  author = interaction.user;
  count = 0;

  if (interaction.channel !== null)
    if (!interaction.channel.nsfw) {
      var customFilter = new Filter({ placeHolder: "*" }).clean(searchTerm);

      // If args are nsfw, return warning
      if (customFilter.includes("*") || customFilter.includes("hentai"))
        return await interaction.reply({
          content: `${author}, Found NSFW terms in NON-NSFW channel!`,
          ephemeral: true,
        });
    }

  await unirest
    .get(
      `https://www.google.com/search?q=${searchTerm}&oq=${searchTerm}&hl=en&tbm=isch&asearch=ichunk&async=_id:rg_s,_pms:s,_fmt:pc&sourceid=chrome&ie=UTF-8`
    )
    .headers(
      "User-Agent",
      `${userAgents[Math.floor(Math.random() * userAgents.length)]}`
    )
    .then((response) => {
      let $ = cheerio.load(response.body);

      $("div.rg_bx").each((i, el) => {
        let json_string = $(el).find(".rg_meta").text();
        images.push({
          title: $(el).find(".iKjWAf .mVDMnf").text(),
          link: JSON.parse(json_string).ru,
          original: JSON.parse(json_string).ou,
        });
      });
    });

  //shuffle images
  images.sort(() => Math.random() - 0.5);

  // If no results found
  if (images.length === 0)
    return interaction.reply({
      content: "Empty/invalid search words! Try again.",
      ephemeral: true,
    });

  await interaction
    .reply({
      embeds: [nextImg(-1)],
      components: [startButton(), updateLink()],
    })
    .catch((err) => {
      console.log(err);
    });

  // Wait 120 seconds until buttons are removed
  setTimeout(async () => {
    await interaction.editReply({ components: [] }).catch((err) => {
      console.log(`INTERACTION - User: ${author.username} Img Message Deleted`);
    });
  }, 120000);
}
export { Img };

function updateLink() {
  return new ActionRowBuilder().addComponents(
    new ButtonBuilder()
      .setLabel("Link")
      .setStyle(ButtonStyle.Link)
      .setURL(
        `${
          images[count].link.length < 513
            ? images[count].link
            : images[count].link.slice(0, 512)
        }`
      )
  );
}

async function updateImg(interaction, img) {
  // If count is 1 (second image) and back button pressed, remove back button
  if (count === 1 && img === true)
    return await interaction.update({
      embeds: [nextImg(img)],
      components: [startButton(), updateLink()],
    });
  if (count === images.length - 2 && img === false)
    return await interaction.update({
      embeds: [nextImg(img)],
      components: [backButton(), updateLink()],
    });

  // Update embed
  await interaction.update({
    embeds: [nextImg(img)],
    components: [nextbackButton(), updateLink()],
  });
}
export { updateImg };

function nextImg(backButPressed) {
  // First image
  if (backButPressed !== -1) {
    //Back button pressed
    if (backButPressed) {
      if (count !== 0) --count; //Stops user from going out of bounds
    } else {
      //Next button pressed
      if (count !== images.length) ++count; //Stops user from going past 100 images
    }
  }

  // Check if there are any results
  if (images[count] === undefined) return;

  return new EmbedBuilder()
    .setColor(randColor())
    .setAuthor({
      name: `${author.username}#${author.discriminator}`,
      iconURL: `${author.avatarURL()}`,
    })
    .setDescription(
      `**Title:** ${images[count].title}\n**Keyword:** \`\`\`${searchTerm}\`\`\``
    )
    .setImage(images[count].original)
    .setTimestamp()
    .setFooter({
      text: `Page ${count + 1}/${images.length} of results`,
    });
}

function startButton() {
  return new ActionRowBuilder().addComponents(
    new ButtonBuilder()
      .setLabel("Next")
      .setCustomId("nextImg")
      .setStyle(ButtonStyle.Primary)
  );
}

function backButton() {
  return new ActionRowBuilder().addComponents(
    new ButtonBuilder()
      .setLabel("Back")
      .setCustomId("backImg")
      .setStyle(ButtonStyle.Primary)
  );
}

function nextbackButton() {
  return new ActionRowBuilder()
    .addComponents(
      new ButtonBuilder()
        .setLabel("Back")
        .setCustomId("backImg")
        .setStyle(ButtonStyle.Primary)
    )
    .addComponents(
      new ButtonBuilder()
        .setLabel("Next")
        .setCustomId("nextImg")
        .setStyle(ButtonStyle.Primary)
    );
}
