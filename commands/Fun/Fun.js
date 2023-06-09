import { SlashCommandBuilder } from "@discordjs/builders";
import EightBall from "./Fun Options/8Ball.js";
import AnimeSearch from "./Fun Options/AnimeSearch.js";
import { Animes } from "./Fun Options/AnimeSeason.js";
import { BlackJack } from "./Fun Options/Blackjack.js";
import Clap from "./Fun Options/Clap.js";
import Define from "./Fun Options/Define.js";
import FlipCoin from "./Fun Options/FlipCoin.js";
import GayMeter from "./Fun Options/GayMeter.js";
import { Gifs } from "./Fun Options/Gif.js";
import { Img } from "./Fun Options/Img.js";
import PP from "./Fun Options/PP.js";
import { Rather } from "./Fun Options/Rather.js";
import SimpMeter from "./Fun Options/SimpMeter.js";
import { TTT } from "./Fun Options/TicTacToe.js";
import { Urban } from "./Fun Options/Urban.js";
import Uwuify from "./Fun Options/Uwuify.js";
import Valid from "./Fun Options/Valid.js";

export default {
  data: new SlashCommandBuilder()
    .setName("f")
    .setDescription("🎲 Fun commands to play with!")
    .addSubcommand((subcommand) =>
      subcommand
        .setName("8ball")
        .setDescription("🎲 Find the probability of a question!")
        .addStringOption((option) =>
          option
            .setName("question")
            .setDescription("Question to ask!")
            .setRequired(true)
        )
    )
    .addSubcommand((subcommand) =>
      subcommand
        .setName("animesearch")
        .setDescription("🎲 Search for an anime!")
        .addStringOption((option) =>
          option
            .setName("search")
            .setDescription("Anime to search!")
            .setRequired(true)
        )
    )
    .addSubcommand((subcommand) =>
      subcommand
        .setName("animeseason")
        .setDescription("🎲 Search for an anime season!")
        .addStringOption((option) =>
          option
            .setName("season")
            .setDescription("Season to search")
            .addChoices(
              { name: "Fall", value: "fall" },
              { name: "Winter", value: "winter" },
              { name: "Spring", value: "spring" },
              { name: "Summer", value: "summer" }
            )
            .setRequired(true)
        )
        .addStringOption((option) =>
          option
            .setName("year")
            .setDescription("Year to search!")
            .setRequired(true)
        )
    )
    .addSubcommand((subcommand) =>
      subcommand.setName("blackjack").setDescription("🎲 Game of 21!")
    )
    .addSubcommand((subcommand) =>
      subcommand
        .setName("clap")
        .setDescription("🎲 Emphasize words with claps between them!")
        .addStringOption((option) =>
          option
            .setName("sentence")
            .setDescription("Sentence to clap between!")
            .setRequired(true)
        )
    )
    .addSubcommand((subcommand) =>
      subcommand
        .setName("define")
        .setDescription("🎲 Define a word!")
        .addStringOption((option) =>
          option
            .setName("search")
            .setDescription("Word to search!")
            .setRequired(true)
        )
    )
    .addSubcommand((subcommand) =>
      subcommand
        .setName("flipcoin")
        .setDescription("🎲 Flip a coin (Heads or Tails)!")
    )
    .addSubcommand((subcommand) =>
      subcommand
        .setName("gaymeter")
        .setDescription("🎲 Check gay scale!")
        .addUserOption((option) =>
          option.setName("user").setDescription("User to scale!")
        )
    )
    .addSubcommand((subcommand) =>
      subcommand
        .setName("gif")
        .setDescription("🎲 Search for a gif!")
        .addStringOption((option) =>
          option
            .setName("search")
            .setDescription("Gif to search!")
            .setRequired(true)
        )
    )
    .addSubcommand((subcommand) =>
      subcommand
        .setName("img")
        .setDescription("🎲 Search for an image!")
        .addStringOption((option) =>
          option
            .setName("search")
            .setDescription("Image to search!")
            .setRequired(true)
        )
    )
    .addSubcommand((subcommand) =>
      subcommand
        .setName("pp")
        .setDescription("🎲 Check pp size!")
        .addUserOption((option) =>
          option.setName("user").setDescription("User for pp!")
        )
    )
    .addSubcommand((subcommand) =>
      subcommand.setName("rather").setDescription("🎲 Play would you rather!")
    )
    .addSubcommand((subcommand) =>
      subcommand
        .setName("simpmeter")
        .setDescription("🎲 Check simp scale!")
        .addUserOption((option) =>
          option.setName("user").setDescription("User to scale!")
        )
    )
    .addSubcommand((subcommand) =>
      subcommand
        .setName("tictactoe")
        .setDescription("🎲 Play tic tac toe with someone!")
        .addUserOption((option) =>
          option
            .setName("user")
            .setDescription("User to play with!")
            .setRequired(true)
        )
    )
    .addSubcommand((subcommand) =>
      subcommand
        .setName("urban")
        .setDescription("🎲 Urban dictionary!")
        .addStringOption((option) =>
          option
            .setName("search")
            .setDescription("Word to search!")
            .setRequired(true)
        )
    )
    .addSubcommand((subcommand) =>
      subcommand
        .setName("uwuify")
        .setDescription("🎲 Uwuify text! UWU")
        .addStringOption((option) =>
          option
            .setName("sentence")
            .setDescription("Sentence to uwuify!")
            .setRequired(true)
        )
        .addIntegerOption((option) =>
          option
            .setName("faces")
            .setDescription(
              "Number of faces generated like OwO (0 to 10)! Default is 5"
            )
            .setRequired(false)
            .setMinValue(0)
            .setMaxValue(10)
        )
        .addIntegerOption((option) =>
          option
            .setName("actions")
            .setDescription(
              "Number of actions generated like *huggles tightly* (0 to 10)! Default is 0.75"
            )
            .setRequired(false)
            .setMinValue(0)
            .setMaxValue(10)
        )
        .addIntegerOption((option) =>
          option
            .setName("stutters")
            .setDescription(
              "Number of stutters generated like T-T-Today (0 to 10)! Default is 1"
            )
            .setRequired(false)
            .setMinValue(0)
            .setMaxValue(10)
        )
    )
    .addSubcommand((subcommand) =>
      subcommand
        .setName("valid")
        .setDescription("🎲 Sends a random response to make you valid!")
    ),
  async execute(interaction) {
    try {
      // prettier-ignore
      switch (interaction.options.getSubcommand()) {
        case "8ball": return EightBall.main(interaction);
        case "blackjack": return BlackJack.blackjackMain(interaction);
        case "clap": return Clap.main(interaction); 
        case "define": return Define.main(interaction);
        case "flipcoin": return FlipCoin.main(interaction);
        case "gaymeter": return GayMeter.main(interaction);
        case "gif": return Gifs.main(interaction);
        case "img": return Img(interaction);
        case "pp": return PP.main(interaction);
        case "rather": return Rather.ratherMain(interaction);
        case "simpmeter": return SimpMeter.main(interaction);
        case "tictactoe": return TTT.TTTMain(interaction);
        case "urban": return Urban.main(interaction);
        case "uwuify": return Uwuify.main(interaction);
        case "valid": return Valid.main(interaction);
        case "animesearch": return AnimeSearch.main(interaction);
        case "animeseason": return Animes.main(interaction);
      }
    } catch (error) {
      await interaction.reply({
        content: `${interaction.user}, an error has occurred. ): Try again later!`,
        ephemeral: true,
      });
      console.log(error);
    }
  },
};
