// module.exports = {
//   createembedFunc: async function (interaction) {
//     var { MessageEmbed } = require("discord.js"),
//       color = interaction.options.getString("color"),
//       title = interaction.options.getString("title"),
//       description = interaction.options.getString("description"),
//       thumbnail = interaction.options.getString("thumbnail"),
//       image = interaction.options.getString("image"),
//       fields = {
//         a: interaction.options.getString("field1"),
//         b: interaction.options.getString("field2"),
//         c: interaction.options.getString("field3"),
//         d: interaction.options.getString("field4"),
//         e: interaction.options.getString("field5")
//       },
//       embed = new MessageEmbed().setTitle(title).setTimestamp().setFooter({
//         text: interaction.user.tag,
//         iconURL: interaction.user.displayAvatarURL()
//       });

//     if (color === "blue") embed.setColor("#0000ff");
//     else if (color === "red") embed.setColor("#ff0000");
//     else if (color === "green") embed.setColor("#00ff00");
//     else if (color === "yellow") embed.setColor("#ffff00");
//     else if (color === "purple") embed.setColor("#ff00ff");
//     else if (color === "orange") embed.setColor("#ffa500");
//     else if (color === "white") embed.setColor("#ffffff");
//     else if (color === "grey") embed.setColor("#808080");
//     else if (color === "pink") embed.setColor("#ffc0cb");
//     else if (color === "magenta") embed.setColor("#ff00ff");
//     else if (color === "cyan") embed.setColor("#00ffff");

//     if (description) embed.setDescription(description);
//     if (image) embed.setImage(image);
//     if (thumbnail) embed.setThumbnail(thumbnail);
//     if (
//       (fields.a && !fields.a.includes("*")) ||
//       (fields.b && !fields.b.includes("*")) ||
//       (fields.c && !fields.c.includes("*")) ||
//       (fields.d && !fields.d.includes("*")) ||
//       (fields.e && !fields.e.includes("*"))
//     )
//       return await interaction.reply({
//         content: `${interaction.user}, fields must contain title and description. Use * to split field title/description.`,
//         ephemeral: true
//       });

//     function checkField(field) {
//       if (field) {
//         field = field.split("*");
//         embed.addField(field[0], field[1]);
//       }
//     }

//     if (fields.a) checkField(fields.a);
//     if (fields.b) checkField(fields.b);
//     if (fields.c) checkField(fields.c);
//     if (fields.d) checkField(fields.d);
//     if (fields.e) checkField(fields.e);

//     await interaction.reply({
//       content: `Embed created!`,
//       ephemeral: true
//     });
//     await interaction.channel.send({ embeds: [embed] });
//   }
// };
