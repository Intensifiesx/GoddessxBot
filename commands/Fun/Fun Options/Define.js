import { EmbedBuilder } from "discord.js";
import randColor from "../../RandColor.js";
import fetch from "node-fetch";

export default {
  main: async function (interaction) {
    var words = interaction.options
        .getString("search")
        .replace(/(^\w{1})|(\s+\w{1})/g, (letter) => letter.toUpperCase()),
      author = interaction.user;

    // Fetch the definition
    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en_US/${words}`)
      .then((res) => res.json())
      .then(async (json) => {
        try {
          // Check if the word has a definition
          if (json.title)
            return interaction.reply(
              `${author}, no definitions found for \`${words}\`!`
            );

          // Get definition details
          var definition = json[0].meanings[0].definitions[0].definition,
            synonyms = json[0].meanings[0].definitions[0].synonyms.slice(0, 10),
            example = json[0].meanings[0].definitions[0].example,
            partOfSpeech = " (" + json[0].meanings[0].partOfSpeech + ")",
            phonetic = " (" + json[0].phonetic + ")";

          // If details are undefined, then set to empty
          if (phonetic.includes(undefined)) phonetic = "";
          if (partOfSpeech.includes(undefined)) partOfSpeech = "";
          if (synonyms.length === 0) synonyms = "*None*";
          else synonyms = "`" + synonyms.join("` | `") + "`";
          if (!example) example = "*None*";

          await interaction.reply({
            embeds: [
              new EmbedBuilder()
                .setColor(randColor())
                .setTitle("📖 Dictionary 📖")
                .setDescription(
                  `**${words}${phonetic}:** ${definition}${partOfSpeech}\n\n**Example:** ${example}`
                )
                .setThumbnail(
                  "https://pbs.twimg.com/media/Eyf7ABbWgAE04XR?format=jpg&name=4096x4096"
                )
                .setTimestamp()
                .setFooter({ text: author.tag, iconURL: author.avatarURL() }),
            ],
          });
        } catch (err) {
          console.log(err);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
