import { SlashCommandBuilder } from "@discordjs/builders";
import {
  ActionRowBuilder,
  ButtonBuilder,
  EmbedBuilder,
  ButtonStyle,
} from "discord.js";
import randColor from "./RandColor.js";
const file = [
  await import("./Actions/Action.js"),
  await import("./Emotes/Emotes.js"),
  await import("./Memes/Memes.js"),
  await import("./Mod/Mod.js"),
  await import("./Fun/Fun.js"),
  await import("./Pets/Pets.js"),
  await import("./Foods/Foods.js"),
];
var action = getCommands(file[0]), // Action menu commands
  emote = getCommands(file[1]), // Emotes menu commands
  meme = getCommands(file[2]), // Memes menu commands
  mod = getCommands(file[3]), // Mod menu commands
  fun = getCommands(file[4]), // Fun menu commands
  pet = getCommands(file[5]), // Pets menu commands
  food = getCommands(file[6]), // Foods menu commands
  nsfwHelp = "```🔞```",
  version = "0.31.0",
  interact,
  isNSFW;

// Create list of commands for help menu
function getCommands(file) {
  var commands = [];
  file.default.data.options.forEach((option) =>
    commands.push(option.name.charAt(0).toUpperCase() + option.name.slice(1))
  );
  return `\`${commands.join("`, `")}\``;
}

export default {
  data: new SlashCommandBuilder()
    .setName("help")
    .setDescription("🆘 All commands for Goddessx!"),
  async execute(interaction, client) {
    isNSFW = interaction.channel === null || interaction.channel.nsfw;
    interact = interaction;

    // Send main menu with buttons
    await interaction.reply({
      components: [Buttons.rowOne(), Buttons.rowTwo()],
      embeds: [Menu.main()],
    });

    // Wait 120 seconds until the buttons are deleted
    setTimeout(async () => {
      await interaction.editReply({ components: [] }).catch((err) => {
        console.log(
          `INTERACTION - User: ${interaction.user.username} Help Message Deleted`
        );
      });
    }, 120000);
  },
};

const Menu = {
  // Updates the menu
  updateHelp: async function (interaction, embed, button) {
    if (button.length > 1)
      return await interaction.update({
        components: [button[0], button[1]],
        embeds: [embed],
      });
    return await interaction.update({
      components: [button],
      embeds: [embed],
    });
  },
  // Creates embed
  embed: function () {
    return new EmbedBuilder()
      .setColor(randColor())
      .setDescription(
        `Invite Goddessx: \`/m Invite\` | Support Server: \`/m Support\`
      Donate to Creator: \`/m Donate\` | Version: \`${version}\``
      )
      .setTimestamp()
      .setFooter({
        text: interact.user.tag,
        iconURL: interact.user.displayAvatarURL(),
      });
  },
  // Main menu
  main: function () {
    var mainEmbed = this.embed();
    mainEmbed.setTitle("💮 Main Menu 💮").addFields(
      { name: "💬 __Actions__ 💬", value: "```💬```", inline: true },
      { name: "🎲 __Fun__ 🎲", value: "```🎲```", inline: true },
      { name: "⚙️ __Moderation__ ⚙️", value: "```⚙️```", inline: true },
      {
        name: "🗿 __Food/Pets/Memes__ 🗿",
        value: "```🗿```",
        inline: true,
      }
    );
    if (isNSFW)
      mainEmbed.addFields({
        name: "🔞 __NSFW__ 🔞",
        value: nsfwHelp,
        inline: true,
      });
    mainEmbed.addFields({
      name: "💜 __Creator__ 💜",
      value: "```💜```",
      inline: true,
    });
    return mainEmbed;
  },
  // Actions menu
  actions: function () {
    var mainEmbed = this.embed();
    mainEmbed.setTitle("💬 Actions Menu 💬").addFields(
      {
        name: `😴 __Emotes (Ex. /e Sleep)__ 😴`,
        value: emote,
        inline: false,
      },
      {
        name: `🤗 __Actions (Ex. /a Hug)__ 🤗`,
        value: action,
        inline: false,
      }
    );
    if (isNSFW)
      mainEmbed.addFields({
        name: `🔞 __NSFW Actions (Ex. /ansfw Frenchkiss)__ 🔞`,
        value: aNsfw,
        inline: false,
      });
    return mainEmbed;
  },
  // Fun menu
  fun: function () {
    var mainEmbed = this.embed();
    mainEmbed.setTitle("🎲 Fun Menu 🎲").addFields({
      name: `🎲 __Fun (Ex. /f Flipcoin)__ 🎲`,
      value: fun,
      inline: false,
    });
    return mainEmbed;
  },
  // Mod menu
  mod: function () {
    var mainEmbed = this.embed();
    mainEmbed.setTitle("⚙️ Mod Menu ⚙️").addFields({
      name: `🛠 __Moderation (Ex. /m Avatar)__ 🛠`,
      value: mod,
      inline: false,
    });
    return mainEmbed;
  },
  // Reddit menu
  reddit: function () {
    var mainEmbed = this.embed();
    mainEmbed.setTitle("🗿 Food/Pets/Memes Menu 🗿").addFields(
      {
        name: `🍪 __Food (Ex. /foods Steak)__ 🍪`,
        value: food,
        inline: false,
      },
      { name: "🐇 __Pets (Ex. /pets Cat)__ 🐇", value: pet, inline: false },
      {
        name: "😂 __Memes (Ex. /memes Jojomeme)__ 😂",
        value: meme,
        inline: false,
      }
    );
    return mainEmbed;
  },
  // NSFW menu
  nsfw: function () {
    var mainEmbed = this.embed();
    mainEmbed.setTitle("🔞 NSFW Menu 🔞").addFields(
      {
        name: `🐙 __Hentai (Ex. /h 2B)__ 🐙`,
        value: hentai,
        inline: false,
      },
      { name: `💕 __Porn (Ex. /p Anal)__ 💕`, value: porn, inline: false }
    );
    return mainEmbed;
  },
  // Creator menu
  creator: function () {
    var mainEmbed = this.embed();
    mainEmbed.setTitle("💜 About Creator 💜").addFields(
      {
        name: "__From Creator__",
        value: `Hey! I'm Zain. I hope you are enjoying the bot. If not, 
    feel free to join our support server and voice your opinions 
    or if you just want updates on the bot. I created Goddessx 
    for the sole purpose to spice up servers. I am always trying 
    to update and add new content into the bot, so that others 
    can enjoy it too. Thank you for using Goddessx! ♥♥`,
        inline: false,
      },
      {
        name: "__Contact Me__",
        value: `Discord Username: \`Intensifies#8584\`
    Discord Server: https://discord.gg/NbN4hs6`,
      },
      {
        name: "__Support Creator__",
        value: "PayPal: https://www.paypal.me/Intensifiesx",
        inline: false,
      }
    );
    return mainEmbed;
  },
};
export { Menu };

// Buttons for the main menu
const Buttons = {
  // Row 1 buttons = Actions, Fun, Mod
  rowOne: function () {
    {
      return new ActionRowBuilder()
        .addComponents(
          new ButtonBuilder()
            .setCustomId("actions")
            .setLabel("💬")
            .setStyle(ButtonStyle.Primary)
        )
        .addComponents(
          new ButtonBuilder()
            .setCustomId("fun")
            .setLabel("🎲")
            .setStyle(ButtonStyle.Primary)
        )
        .addComponents(
          new ButtonBuilder()
            .setCustomId("mod")
            .setLabel("⚙️")
            .setStyle(ButtonStyle.Primary)
        );
    }
  },
  // Row 2 buttons = Reddit, NSFW, Creator
  rowTwo: function () {
    var row3 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setLabel("🗿")
        .setCustomId("reddit")
        .setStyle(ButtonStyle.Primary)
    );
    if (isNSFW)
      row3.addComponents(
        new ButtonBuilder()
          .setLabel("🔞")
          .setCustomId("nsfw")
          .setStyle(ButtonStyle.Primary)
      );
    row3.addComponents(
      new ButtonBuilder()
        .setLabel("💜")
        .setCustomId("creator")
        .setStyle(ButtonStyle.Primary)
    );
    return row3;
  },
  // Back button
  back: function () {
    return new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setLabel("Back")
        .setCustomId("backMenu")
        .setStyle(ButtonStyle.Primary)
    );
  },
  // Creator buttons = Server, Paypal
  creator: function () {
    return [
      new ActionRowBuilder()
        .addComponents(
          new ButtonBuilder()
            .setLabel("Server")
            .setURL("https://discord.gg/NbN4hs6")
            .setStyle(ButtonStyle.Link)
        )
        .addComponents(
          new ButtonBuilder()
            .setLabel("Paypal")
            .setURL("https://www.paypal.me/Intensifiesx")
            .setStyle(ButtonStyle.Link)
        ),
      this.back(),
    ];
  },
};
export { Buttons };
