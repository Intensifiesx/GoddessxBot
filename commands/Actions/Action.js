import { SlashCommandBuilder } from "@discordjs/builders";
import { EmbedBuilder } from "discord.js";
import randColor from "../RandColor.js";
import bonk from "./Action Options/Bonk.js";
import cuddle from "./Action Options/Cuddle.js";
import feed from "./Action Options/Feed.js";
import holdHand from "./Action Options/HoldHand.js";
import hug from "./Action Options/Hug.js";
import kiss from "./Action Options/Kiss.js";
import lick from "./Action Options/Lick.js";
import nom from "./Action Options/Nom.js";
import pat from "./Action Options/Pat.js";
import poke from "./Action Options/Poke.js";
import slap from "./Action Options/Slap.js";
import stare from "./Action Options/Stare.js";

export default {
  data: new SlashCommandBuilder()
    .setName("a")
    .setDescription("🤗 Actions for interacting with friends!")
    .addSubcommand((subcommand) =>
      subcommand
        .setName(bonk.name)
        .setDescription("🤗 Bonk a user!")
        .addUserOption((option) =>
          option
            .setName("user")
            .setDescription("User to bonk")
            .setRequired(true)
        )
    )
    .addSubcommand((subcommand) =>
      subcommand
        .setName(cuddle.name)
        .setDescription("🤗 Cuddle a user!")
        .addUserOption((option) =>
          option
            .setName("user")
            .setDescription("User to cuddle")
            .setRequired(true)
        )
    )
    .addSubcommand((subcommand) =>
      subcommand
        .setName(feed.name)
        .setDescription("🤗 Feed a user!")
        .addUserOption((option) =>
          option
            .setName("user")
            .setDescription("User to feed")
            .setRequired(true)
        )
    )
    .addSubcommand((subcommand) =>
      subcommand
        .setName(holdHand.name)
        .setDescription("🤗 Hold a user's hand!")
        .addUserOption((option) =>
          option
            .setName("user")
            .setDescription("User's hand to hold")
            .setRequired(true)
        )
    )
    .addSubcommand((subcommand) =>
      subcommand
        .setName(hug.name)
        .setDescription("🤗 Hug a user!")
        .addUserOption((option) =>
          option.setName("user").setDescription("User to hug").setRequired(true)
        )
    )
    .addSubcommand((subcommand) =>
      subcommand
        .setName(kiss.name)
        .setDescription("🤗 Kiss a user!")
        .addUserOption((option) =>
          option
            .setName("user")
            .setDescription("User to kiss")
            .setRequired(true)
        )
    )
    .addSubcommand((subcommand) =>
      subcommand
        .setName(lick.name)
        .setDescription("🤗 Lick a user!")
        .addUserOption((option) =>
          option
            .setName("user")
            .setDescription("User to lick")
            .setRequired(true)
        )
    )
    .addSubcommand((subcommand) =>
      subcommand
        .setName(nom.name)
        .setDescription("🤗 Nom a user!")
        .addUserOption((option) =>
          option.setName("user").setDescription("User to nom").setRequired(true)
        )
    )
    .addSubcommand((subcommand) =>
      subcommand
        .setName(pat.name)
        .setDescription("🤗 Pat a user!")
        .addUserOption((option) =>
          option.setName("user").setDescription("User to pat").setRequired(true)
        )
    )
    .addSubcommand((subcommand) =>
      subcommand
        .setName(poke.name)
        .setDescription("🤗 Poke a user!")
        .addUserOption((option) =>
          option
            .setName("user")
            .setDescription("User to poke")
            .setRequired(true)
        )
    )
    .addSubcommand((subcommand) =>
      subcommand
        .setName(slap.name)
        .setDescription("🤗 Slap a user!")
        .addUserOption((option) =>
          option
            .setName("user")
            .setDescription("User to slap")
            .setRequired(true)
        )
    )
    .addSubcommand((subcommand) =>
      subcommand
        .setName(stare.name)
        .setDescription("🤗 Stare at a user!")
        .addUserOption((option) =>
          option
            .setName("user")
            .setDescription("User to stare at")
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

      // Check if user mentioned is the author
      if (user === author)
        return interaction.reply(
          `${author}, you can't use \`/${command}\` on yourself! ಥ_ಥ`
        );

      // Send action embeds
      // prettier-ignore
      switch(command){
        case bonk.name: action = bonk.main(user, author); break;
        case cuddle.name: action = cuddle.main(user, author); break;
        case feed.name: action = feed.main(user, author); break;
        case holdHand.name: action = holdHand.main(user, author); break;
        case hug.name: action = hug.main(user, author); break;
        case kiss.name: action = kiss.main(user, author); break;
        case lick.name: action = lick.main(user, author); break;
        case nom.name: action = nom.main(user, author); break;
        case pat.name: action = pat.main(user, author); break;
        case poke.name: action = poke.main(user, author); break;
        case slap.name: action = slap.main(user, author); break;
        case stare.name: action = stare.main(user, author); break;
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
