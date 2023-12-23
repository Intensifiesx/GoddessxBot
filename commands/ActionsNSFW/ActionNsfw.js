import { SlashCommandBuilder } from "@discordjs/builders";
import { EmbedBuilder } from "discord.js";
import randColor from "../RandColor.js";
import cream from "./ActionNsfw Options/Cream.js";
import finger from "./ActionNsfw Options/Finger.js";
import frenchkiss from "./ActionNsfw Options/Frenchkiss.js";
import fuck from "./ActionNsfw Options/Fuck.js";
import spank from "./ActionNsfw Options/Spank.js";
import suckboobs from "./ActionNsfw Options/SuckBoobs.js";
import suckpp from "./ActionNsfw Options/SuckPP.js";
import tongue from "./ActionNsfw Options/Tongue.js";

export default {
  data: new SlashCommandBuilder()
    .setName("ansfw")
    .setDescription("NSFW actions for interacting with friends!")
    .addSubcommand((subcommand) =>
      subcommand
        .setName(cream.name)
        .setDescription("🔞 Cream a user!")
        .addUserOption((option) =>
          option
            .setName("user")
            .setDescription("User to cream")
            .setRequired(true)
        )
    )
    .addSubcommand((subcommand) =>
      subcommand
        .setName(finger.name)
        .setDescription("🔞 Finger a user!")
        .addUserOption((option) =>
          option
            .setName("user")
            .setDescription("User to finger")
            .setRequired(true)
        )
    )
    .addSubcommand((subcommand) =>
      subcommand
        .setName(frenchkiss.name)
        .setDescription("🔞 French kiss a user!")
        .addUserOption((option) =>
          option
            .setName("user")
            .setDescription("User to french kiss")
            .setRequired(true)
        )
    )
    .addSubcommand((subcommand) =>
      subcommand
        .setName(fuck.name)
        .setDescription("🔞 Bang a user!")
        .addUserOption((option) =>
          option
            .setName("user")
            .setDescription("User to bang")
            .setRequired(true)
        )
    )
    .addSubcommand((subcommand) =>
      subcommand
        .setName(spank.name)
        .setDescription("🔞 Spank a user!")
        .addUserOption((option) =>
          option
            .setName("user")
            .setDescription("User to spank")
            .setRequired(true)
        )
    )
    .addSubcommand((subcommand) =>
      subcommand
        .setName(suckboobs.name)
        .setDescription("🔞 Suck a user!")
        .addUserOption((option) =>
          option
            .setName("user")
            .setDescription("User to suck")
            .setRequired(true)
        )
    )
    .addSubcommand((subcommand) =>
      subcommand
        .setName(suckpp.name)
        .setDescription("🔞 Suck a user's pp!")
        .addUserOption((option) =>
          option
            .setName("user")
            .setDescription("User's pp to suck")
            .setRequired(true)
        )
    )
    .addSubcommand((subcommand) =>
      subcommand
        .setName(tongue.name)
        .setDescription("🔞 Tongue a user!")
        .addUserOption((option) =>
          option
            .setName("user")
            .setDescription("User to tongue")
            .setRequired(true)
        )
    ),
  async execute(interaction) {
    try {
      var embed = new EmbedBuilder().setColor(randColor()),
        command = interaction.options.getSubcommand(),
        user = interaction.options.getUser("user"),
        author = interaction.user,
        action;

      if (interaction.channel !== null) {
        if (!interaction.channel.nsfw)
          return interaction.reply(`${author}, this isn't an NSFW channel!`);
        else if (
          user === interaction.client.user &&
          author.id !== "188896646870859776"
        )
          return interaction.reply(
            `${author}, you can't use \`/${command}\` on me! ಥ_ಥ`
          );
        else if (user === author)
          return interaction.reply(
            `${author}, you can't use \`/${command}\` on yourself! ಥ_ಥ`
          );
      }

      // prettier-ignore
      switch(command){
        case cream.name: action = cream.main(user, author); break;
        case finger.name: action = finger.main(user, author); break;
        case frenchkiss.name: action = frenchkiss.main(user, author); break;
        case fuck.name: action = fuck.main(user, author); break;
        case spank.name: action = spank.main(user, author); break;
        case suckboobs.name: action = suckboobs.main(user, author); break;
        case suckpp.name: action = suckpp.main(user, author); break;
        case tongue.name: action = tongue.main(user, author); break;
        default: 
      }

      // action contains = [gifs[], responses[]] <- array of arrays.
      // Ex. action[0][2] <- get gif 3
      embed
        .setDescription(action[0][Math.floor(Math.random() * action[0].length)])
        .setImage(action[1][Math.floor(Math.random() * action[1].length)]);

      // Mention the user
      await interaction.reply({
        content: `★『${user}』★`,
        embeds: [embed],
      });
    } catch (err) {
      console.log(err);
    }
  },
};
