import { SlashCommandBuilder } from "@discordjs/builders";
import { reddit } from "../Reddit.js";

export default {
    data: new SlashCommandBuilder()
        .setName("p")
        .setDescription("💕 NSFW options!")
        .addSubcommand((subcommand) =>
            subcommand.setName("nsfw").setDescription("💕 Sends nsfw!")
        )
        .addSubcommand((subcommand) =>
            subcommand.setName("nsfwgif").setDescription("💕 Sends nsfw gifs!")
        )
        .addSubcommand((subcommand) =>
            subcommand
                .setName("backdoor")
                .setDescription("💕 Sends back door nsfw :D!")
        )
        .addSubcommand((subcommand) =>
            subcommand.setName("asian").setDescription("💕 Sends asian nsfw!")
        )
        .addSubcommand((subcommand) =>
            subcommand.setName("booty").setDescription("💕 Sends booty nsfw!")
        )
        .addSubcommand((subcommand) =>
            subcommand.setName("head").setDescription("💕 Sends head nsfw!")
        )
        .addSubcommand((subcommand) =>
            subcommand
                .setName("hooter")
                .setDescription("💕 Sends hOwOters nsfw!")
        )
        .addSubcommand((subcommand) =>
            subcommand
                .setName("cosplay")
                .setDescription("💕 Sends cosplay nsfw!")
        )
        .addSubcommand((subcommand) =>
            subcommand.setName("gay").setDescription("💕 Sends gay nsfw!")
        )
        .addSubcommand((subcommand) =>
            subcommand.setName("grip").setDescription("💕 Sends grip nsfw!")
        )
        .addSubcommand((subcommand) =>
            subcommand
                .setName("hardcore")
                .setDescription("💕 Sends hardcore nsfw!")
        )
        .addSubcommand((subcommand) =>
            subcommand
                .setName("lesbian")
                .setDescription("💕 Sends lesbian nsfw!")
        )
        .addSubcommand((subcommand) =>
            subcommand.setName("oiled").setDescription("💕 Sends oiled nsfw!")
        )
        .addSubcommand((subcommand) =>
            subcommand.setName("petite").setDescription("💕 Sends petite nsfw!")
        )
        .addSubcommand((subcommand) =>
            subcommand.setName("punani").setDescription("💕 Sends punani nsfw!")
        )
        .addSubcommand((subcommand) =>
            subcommand.setName("squirt").setDescription("💕 Sends water nsfw!")
        )
        .addSubcommand((subcommand) =>
            subcommand
                .setName("thighhighs")
                .setDescription("💕 Sends thigh highs nsfw!")
        )
        .addSubcommand((subcommand) =>
            subcommand
                .setName("yogapants")
                .setDescription("💕 Sends yogapants nsfw!")
        )
        .addSubcommand((subcommand) =>
            subcommand.setName("feet").setDescription("💕 Sends feet nsfw!")
        ),
    async execute(interaction) {
        let command = interaction.options.getSubcommand(),
            nsfw = true,
            subreddit = "";

        switch (command) {
            case "nsfw":
                subreddit = "NSFW";
                break;
            case "nsfwgif":
                subreddit = "NSFW_Gif";
                break;
            case "backdoor":
                if (Math.random() > 0.5) subreddit = "Anal";
                else subreddit = "AnalGoneWild";
                break;
            case "asian":
                subreddit = "AsiansGoneWild";
                break;
            case "booty":
                subreddit = "Ass";
                break;
            case "head":
                subreddit = "Blowjobs";
                break;
            case "feet":
                let rand = Math.floor(Math.random() * 3);
                if (rand == 0) subreddit = "Footjobs";
                else if (rand == 1) subreddit = "FootFetish";
                else subreddit = "Foot_Island";
                break;
            case "hooter":
                if (Math.random() > 0.5) subreddit = "boobs";
                else subreddit = "BigBoobsGW";
                break;
            case "cosplay":
                subreddit = "NSFWCosplay";
                break;
            case "gay":
                subreddit = "GayNSFW";
                break;
            case "grip":
                subreddit = "LipsThatGrip";
                break;
            case "hardcore":
                subreddit = "NSFWHardcore";
                break;
            case "lesbian":
                if (Math.random() > 0.5) subreddit = "Lesbians";
                else subreddit = "HDLesbianGifs";
                break;
            case "oiled":
                subreddit = "OilPorn";
                break;
            case "petite":
                subreddit = "PetiteGoneWild";
                break;
            case "punani":
                if (Math.random() > 0.5) subreddit = "Pussy";
                else subreddit = "GodPussy";
                break;
            case "squirt":
                subreddit = "Squirting";
                break;
            case "thighhighs":
                subreddit = "ThighHighs";
                break;
            case "yogapants":
                subreddit = "YogaPants";
                break;
        }

        reddit(subreddit, interaction, nsfw);
    },
};
