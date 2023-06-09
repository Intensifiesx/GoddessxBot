const gifs = [
  "https://imgur.com/C3SyYiE.gif",
  "https://imgur.com/zvkg9uC.gif",
  "https://imgur.com/BoCwGEe.gif",
  "https://imgur.com/fmcXTI3.gif",
  "https://imgur.com/5pgJpL7.gif",
  "https://imgur.com/xBs0ogu.gif",
  "https://imgur.com/tRvx4ac.gif",
  "https://imgur.com/IOqUYN7.gif",
  "https://imgur.com/BhRP2N9.gif",
  "https://imgur.com/a1DzsVU.gif",
  "https://imgur.com/Ye9oHoW.gif",
  "https://imgur.com/eG4Ln8t.gif",
  "https://imgur.com/h1X7BfE.gif",
  "https://imgur.com/WxlPXzk.gif",
  "https://imgur.com/r6esAp8.gif",
  "https://imgur.com/tl6CIQc.gif",
  "https://imgur.com/CSxmp2m.gif",
  "https://imgur.com/sj5svpF.gif",
  "https://imgur.com/qA5dsjG.gif",
  "https://imgur.com/UP5z8jx.gif",
  "https://imgur.com/qx50jEj.gif",
  "https://imgur.com/ppGMRsI.gif",
  "https://imgur.com/l3m4J0r.gif",
  "https://imgur.com/oUu2G4C.gif",
  "https://imgur.com/OoMVXvW.gif",
  "https://imgur.com/6Xb21s4.gif",
];

export default {
  name: "slap",
  main: function (user, author) {
    const responses = [
      `${user} was slapped by ${author}!`,
      `${author} slapped ${user}!`,
    ];
    return [responses, gifs];
  },
};
