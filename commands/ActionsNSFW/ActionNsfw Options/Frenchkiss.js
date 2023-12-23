const gifs = [
  "https://media.discordapp.net/attachments/673038708785545256/1180845161291468851/FKiss1.gif",
  "https://media.discordapp.net/attachments/673038708785545256/1180845161912217700/FKiss2.gif",
  "https://media.discordapp.net/attachments/673038708785545256/1180845162268725388/FKiss3.gif",
  "https://media.discordapp.net/attachments/673038708785545256/1180845162717532281/FKiss4.gif",
  "https://media.discordapp.net/attachments/673038708785545256/1180845163095011338/FKiss5.gif",
  "https://media.discordapp.net/attachments/673038708785545256/1180845163547988008/FKiss6.gif",
  "https://media.discordapp.net/attachments/673038708785545256/1180845163925491782/FKiss7.gif",
  "https://media.discordapp.net/attachments/673038708785545256/1180845164353294387/FKiss8.gif",
  "https://media.discordapp.net/attachments/673038708785545256/1180845164927922196/FKiss9.gif",
  "https://media.discordapp.net/attachments/673038708785545256/1180845160926548040/FKiss10.gif",
  "https://media.discordapp.net/attachments/673038708785545256/1180845951921963109/FKiss11.gif",
  "https://media.discordapp.net/attachments/673038708785545256/1180845946184151070/FKiss12.gif",
  "https://media.discordapp.net/attachments/673038708785545256/1180845947002028082/FKiss13.gif",
  "https://media.discordapp.net/attachments/673038708785545256/1180845947757019216/FKiss14.gif",
  "https://media.discordapp.net/attachments/673038708785545256/1180845948969173153/FKiss16.gif",
  "https://media.discordapp.net/attachments/673038708785545256/1180845949430542417/FKiss17.gif",
  "https://media.discordapp.net/attachments/673038708785545256/1180845949845766144/FKiss18.gif",
  "https://media.discordapp.net/attachments/673038708785545256/1180845950596563054/FKiss19.gif",
  "https://media.discordapp.net/attachments/673038708785545256/1180845951208927232/FKiss20.gif",
  "https://media.discordapp.net/attachments/673038708785545256/1180846696427700244/FKiss21.gif",
  "https://media.discordapp.net/attachments/673038708785545256/1180846696855502998/FKiss22.gif",
  "https://media.discordapp.net/attachments/673038708785545256/1180846697321078824/FKiss23.gif",
  "https://media.discordapp.net/attachments/673038708785545256/1180846697669214238/FKiss24.gif",
  "https://media.discordapp.net/attachments/673038708785545256/1180846698055073863/FKiss25.gif"
];

export default {
  name: "frenchkiss",
  main: function (user, author) {
    var responses = [
      `${author} french kisses ${user}!`,
      `${user} is getting french kissed by ${author}!`,
      `${user} was french kissed by ${author}!`,
    ];
    return [responses, gifs];
  },
};
