const gifs = [
  "https://imgur.com/3EvWLVR.gif",
  "https://imgur.com/vPn51dg.gif",
  "https://imgur.com/vhSpym9.gif",
  "https://imgur.com/HTyJxyx.gif",
  "https://imgur.com/yfIoXy0.gif",
  "https://imgur.com/KYrFaZv.gif",
  "https://imgur.com/Ow2VJGB.gif",
  "https://imgur.com/RoeFAyD.gif",
  "https://imgur.com/5cUP12g.gif",
  "https://imgur.com/YcB9CfP.gif",
  "https://imgur.com/j1zkrpk.gif",
  "https://imgur.com/y1PRvJ6.gif",
  "https://imgur.com/epn0dwD.gif",
  "https://imgur.com/avBbqXJ.gif",
  "https://imgur.com/fOsVwpE.gif",
  "https://imgur.com/DSs9gVJ.gif",
  "https://imgur.com/DImmOaN.gif",
  "https://imgur.com/k1e3ZhM.gif",
  "https://imgur.com/hlsLxF1.gif",
  "https://imgur.com/Xzhi6pc.gif",
  "https://imgur.com/7LElBoL.gif",
  "https://imgur.com/JY8Rx83.gif",
  "https://imgur.com/axYAJgr.gif",
  "https://imgur.com/6mfJs57.gif",
  "https://imgur.com/lMh7k1d.gif",
  "https://imgur.com/g6L1Ikm.gif",
  "https://imgur.com/btiiwoI.gif",
  "https://imgur.com/wDhW9pj.gif",
  "https://imgur.com/9qcyEkQ.gif",
  "https://imgur.com/r0aPBW1.gif",
  "https://imgur.com/6ZS70OL.gif",
  "https://imgur.com/PxjXS3r.gif",
];

export default {
  name: "nom",
  main: function (user, author) {
    const responses = [
      `${user} is being nommed by ${author}!`,
      `${author} nommed ${user}!`,
      `${author} is nomming ${user}!`,
      `${author} noms ${user}!`,
    ];
    return [responses, gifs];
  },
};
