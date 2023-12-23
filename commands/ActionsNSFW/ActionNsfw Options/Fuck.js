const gifs = [
  "https://media.discordapp.net/attachments/673038708785545256/1180847568373153903/Fuck1.gif",
  "https://media.discordapp.net/attachments/673038708785545256/1180847568859697252/Fuck2.gif",
  "https://media.discordapp.net/attachments/673038708785545256/1180847569404973086/Fuck3.gif",
  "https://media.discordapp.net/attachments/673038708785545256/1180847570302533642/Fuck4.gif",
  "https://media.discordapp.net/attachments/673038708785545256/1180847570927489085/Fuck5.gif",
  "https://media.discordapp.net/attachments/673038708785545256/1180847571338547270/Fuck6.gif",
  "https://media.discordapp.net/attachments/673038708785545256/1180847571808288838/Fuck7.gif",
  "https://media.discordapp.net/attachments/673038708785545256/1180847572269662369/Fuck8.gif",
  "https://media.discordapp.net/attachments/673038708785545256/1180847572651348090/Fuck9.gif",
  "https://media.discordapp.net/attachments/673038708785545256/1180847567962132570/Fuck10.gif",
  "https://media.discordapp.net/attachments/673038708785545256/1180847608500076655/Fuck11.gif",
  "https://media.discordapp.net/attachments/673038708785545256/1180847608915296327/Fuck12.gif",
  "https://media.discordapp.net/attachments/673038708785545256/1180847609330544700/Fuck13.gif",
  "https://media.discordapp.net/attachments/673038708785545256/1180847609821282304/Fuck14.gif",
  "https://media.discordapp.net/attachments/673038708785545256/1180847610295222292/Fuck15.gif",
  "https://media.discordapp.net/attachments/673038708785545256/1180847610676916344/Fuck16.gif",
  "https://media.discordapp.net/attachments/673038708785545256/1180847611142471770/Fuck17.gif",
  "https://media.discordapp.net/attachments/673038708785545256/1180847611557720084/Fuck18.gif",
  "https://media.discordapp.net/attachments/673038708785545256/1180847611931017266/Fuck19.gif",
  "https://media.discordapp.net/attachments/673038708785545256/1180847608097419364/Fuck20.gif",
  "https://media.discordapp.net/attachments/673038708785545256/1180847675625701376/Fuck22.gif",
  "https://media.discordapp.net/attachments/673038708785545256/1180847675239837836/Fuck21.gif",
  "https://media.discordapp.net/attachments/673038708785545256/1180847676011581520/Fuck23.gif",
  "https://media.discordapp.net/attachments/673038708785545256/1180847676485546065/Fuck24.gif",
  "https://media.discordapp.net/attachments/673038708785545256/1180847676883992577/Fuck25.gif",
  "https://media.discordapp.net/attachments/673038708785545256/1180847677316010054/Fuck26.gif",
  "https://media.discordapp.net/attachments/673038708785545256/1180847677701894265/Fuck27.gif",
  "https://media.discordapp.net/attachments/673038708785545256/1180847678062592020/Fuck28.gif",
  "https://media.discordapp.net/attachments/673038708785545256/1180847678393946154/Fuck29.gif",
  "https://media.discordapp.net/attachments/673038708785545256/1180847678813372416/Fuck30.gif",
  "https://media.discordapp.net/attachments/673038708785545256/1180847688405749792/Fuck32.gif",
  "https://media.discordapp.net/attachments/673038708785545256/1180847688938438706/Fuck31.gif"
];

export default {
  name: "bang",
  main: function (user, author) {
    var responses = [
      `${author} is fucking ${user}!`,
      `${user} is getting fucked by ${author}!`,
      `${user} was fucked by ${author}!`,
    ];
    return [responses, gifs];
  },
};
