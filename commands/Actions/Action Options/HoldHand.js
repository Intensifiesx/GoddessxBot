const gifs = [
  "https://imgur.com/TeE10Zn.gif",
  "https://imgur.com/v4TZY3d.gif",
  "https://imgur.com/mtDyHf8.gif",
  "https://imgur.com/SpcpMPN.gif",
  "https://imgur.com/qwpOlze.gif",
  "https://imgur.com/soOVPCD.gif",
  "https://imgur.com/8D68cyl.gif",
  "https://imgur.com/RPaVtgd.gif",
  "https://imgur.com/U19YI8I.gif",
  "https://imgur.com/iURFEiD.gif",
  "https://imgur.com/RMVcUCA.gif",
  "https://imgur.com/fDI9wsU.gif",
  "https://imgur.com/9Ga2Upr.gif",
  "https://imgur.com/NmGs90d.gif",
  "https://imgur.com/ACmkaMf.gif",
  "https://imgur.com/UuO1o9g.gif",
  "https://imgur.com/bGsBQAT.gif",
  "https://imgur.com/sJKoUe1.gif",
  "https://imgur.com/vhovsrh.gif",
  "https://imgur.com/yWvqgz8.gif",
  "https://imgur.com/nKHGdry.gif",
  "https://imgur.com/KaMgs67.gif",
  "https://imgur.com/OQ98DfN.gif",
  "https://imgur.com/orpljXa.gif",
  "https://imgur.com/2oZit2B.gif",
  "https://imgur.com/KcxhxcT.gif",
];

export default {
  name: "holdhand",
  main: function (user, author) {
    const responses = [
      `${user}'s hand is being held by ${author}!`,
      `${author} is holding ${user}'s hand!`,
      `${user}'s hand was held by ${author}!`,
    ];
    return [responses, gifs];
  },
};
