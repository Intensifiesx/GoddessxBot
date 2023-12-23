const gifs = [
  "https://media.discordapp.net/attachments/673038708785545256/1180857803594809354/Tongue1.gif",
  "https://media.discordapp.net/attachments/673038708785545256/1180857803980681338/Tongue2.gif",
  "https://media.discordapp.net/attachments/673038708785545256/1180857804341383218/Tongue3.gif",
  "https://media.discordapp.net/attachments/673038708785545256/1180857804848906381/Tongue4.gif",
  "https://media.discordapp.net/attachments/673038708785545256/1180857805268332614/Tongue5.gif",
  "https://media.discordapp.net/attachments/673038708785545256/1180857805687754873/Tongue6.gif",
  "https://media.discordapp.net/attachments/673038708785545256/1180857806086226011/Tongue7.gif",
  "https://media.discordapp.net/attachments/673038708785545256/1180857806501449738/Tongue8.gif",
  "https://media.discordapp.net/attachments/673038708785545256/1180857806874755123/Tongue9.gif",
  "https://media.discordapp.net/attachments/673038708785545256/1180857803246669874/Tongue10.gif",
  "https://media.discordapp.net/attachments/673038708785545256/1180857866597445723/Tongue11.gif",
  "https://media.discordapp.net/attachments/673038708785545256/1180857867042050079/Tongue12.gif",
  "https://media.discordapp.net/attachments/673038708785545256/1180857867457265715/Tongue13.gif",
  "https://media.discordapp.net/attachments/673038708785545256/1180857868036092006/Tongue14.gif",
  "https://media.discordapp.net/attachments/673038708785545256/1180857868459724941/Tongue15.gif",
  "https://media.discordapp.net/attachments/673038708785545256/1180857868895912046/Tongue16.gif",
  "https://media.discordapp.net/attachments/673038708785545256/1180857869290188900/Tongue17.gif",
  "https://media.discordapp.net/attachments/673038708785545256/1180857869751570482/Tongue18.gif",
  "https://media.discordapp.net/attachments/673038708785545256/1180857870141620344/Tongue19.gif",
  "https://media.discordapp.net/attachments/673038708785545256/1180857866190585996/Tongue20.gif",  
];

export default {
  name: "tongue",
  main: function (user, author) {
    var responses = [
      `${author} tongues ${user}!`,
      `${user} is getting tongued by ${author}!`,
      `${user} was tongued by ${author}!`,
    ];
    return [responses, gifs];
  },
};
