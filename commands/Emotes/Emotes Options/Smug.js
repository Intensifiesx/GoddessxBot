const gifs = [
  "https://imgur.com/Uaj0Y6W.gif",
  "https://imgur.com/10Hmgkx.gif",
  "https://imgur.com/N6wn7L8.gif",
  "https://imgur.com/TVkrSUB.gif",
  "https://imgur.com/ACcedeP.gif",
  "https://imgur.com/7DW0rEu.gif",
  "https://imgur.com/xXFITA0.gif",
  "https://imgur.com/CspR2yV.gif",
  "https://imgur.com/UNVSLdE.gif",
  "https://imgur.com/bsiG1Yc.gif",
  "https://imgur.com/DMKPpLM.gif",
  "https://imgur.com/mSXwsnj.gif",
  "https://imgur.com/vHnSFbe.gif",
  "https://imgur.com/HU05bGl.gif",
  "https://imgur.com/k1Vn9sJ.gif",
  "https://imgur.com/OQz4ANz.gif",
  "https://imgur.com/KvUzpV8.gif",
  "https://imgur.com/SH3h5Ay.gif",
  "https://imgur.com/yOwymeK.gif",
  "https://imgur.com/OFXoUQk.gif",
  "https://imgur.com/u7kx1uW.gif",
  "https://imgur.com/2TiLhK7.gif",
];

export default {
  name: "smug",
  main: function (author) {
    var responses = [`${author} is being smug!`];
    return [responses, gifs];
  },
};
