import { SlashCommandBuilder } from "@discordjs/builders";
import Avatar from "./Mod Options/Avatar.js";
import Donate from "./Mod Options/Donate.js";
import Enlarge from "./Mod Options/Enlarge.js";
import Invite from "./Mod Options/Invite.js";
import Ping from "./Mod Options/Ping.js";
import Purge from "./Mod Options/Purge.js";
import ServerBanner from "./Mod Options/ServerBanner.js";
import ServerIcon from "./Mod Options/ServerIcon.js";
import ServerInfo from "./Mod Options/ServerInfo.js";
import Slowmode from "./Mod Options/Slowmode.js";
import Support from "./Mod Options/Support.js";
import UserInfo from "./Mod Options/UserInfo.js";
import Vote from "./Mod Options/Vote.js";

export default {
  data: new SlashCommandBuilder()
    .setName("m")
    .setDescription("🛠 Mod to clean/check server!")
    .addSubcommand((subcommand) =>
      subcommand
        .setName("avatar")
        .setDescription("🛠 Sends a user's avatar!")
        .addUserOption((option) =>
          option.setName("user").setDescription("Which user's avatar to show!")
        )
    )
    .addSubcommand((subcommand) =>
      subcommand.setName("donate").setDescription("🛠 Donate to developer!")
    )
    .addSubcommand((subcommand) =>
      subcommand
        .setName("enlarge")
        .setDescription("🛠 Enlarge an emote!")
        .addStringOption((option) =>
          option
            .setName("emote")
            .setDescription(
              "Emote to enlarge. ~DOES NOT ENLARGE DEFAULT EMOJIS~"
            )
            .setRequired(true)
        )
    )
    .addSubcommand((subcommand) =>
      subcommand.setName("invite").setDescription("🛠 Invite me to your server!")
    )
    .addSubcommand((subcommand) =>
      subcommand.setName("ping").setDescription("🛠 Check bots ping!")
    )
    .addSubcommand((subcommand) =>
      subcommand
        .setName("purge")
        .setDescription("🛠 Purge messages!")
        .addIntegerOption((option) =>
          option
            .setName("num")
            .setDescription("Amount of messages to purge!")
            .setRequired(true)
        )
    )
    .addSubcommand((subcommand) =>
      subcommand
        .setName("serverbanner")
        .setDescription("🛠 Sends server banner!")
    )
    .addSubcommand((subcommand) =>
      subcommand.setName("servericon").setDescription("🛠 Sends server icon!")
    )
    .addSubcommand((subcommand) =>
      subcommand.setName("serverinfo").setDescription("🛠 Sends server info!")
    )
    .addSubcommand((subcommand) =>
      subcommand
        .setName("slowmode")
        .setDescription("🛠 Displays/changes slowmode for current channel!")
        .addIntegerOption((option) =>
          option
            .setName("num")
            .setDescription("Time(secs) for channel slowmode!")
        )
    )
    .addSubcommand((subcommand) =>
      subcommand.setName("support").setDescription("🛠 Sends support server!")
    )
    .addSubcommand((subcommand) =>
      subcommand
        .setName("userinfo")
        .setDescription("🛠 Sends user info!")
        .addUserOption((option) =>
          option.setName("user").setDescription("User to display info!")
        )
    )
    .addSubcommand((subcommand) =>
      subcommand.setName("vote").setDescription("🛠 Vote for me!")
    ),
  async execute(interaction) {
    try {
      // prettier-ignore
      switch (interaction.options.getSubcommand()) {
        case "avatar": return Avatar.main(interaction);
        case "donate": return Donate.main(interaction);
        case "enlarge": return Enlarge.main(interaction);
        case "invite": return Invite.main(interaction);
        case "ping": return Ping.main(interaction);
        case "purge": return Purge.main(interaction);
        case "serverbanner": return ServerBanner.main(interaction);
        case "servericon": return ServerIcon.main(interaction);
        case "serverinfo": return ServerInfo.main(interaction);
        case "slowmode": return Slowmode.main(interaction);
        case "support": return Support.main(interaction);
        case "userinfo": return UserInfo.main(interaction);
        case "vote": return Vote.main(interaction);
      }
    } catch (err) {
      console.log(err);
    }
  },
};
