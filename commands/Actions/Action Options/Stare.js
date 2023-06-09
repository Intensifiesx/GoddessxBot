const gifs = [
  "https://imgur.com/hVPzPf1.gif",
  "https://imgur.com/HWhtMqZ.gif",
  "https://imgur.com/cHsiTmm.gif",
  "https://imgur.com/wZSIv9f.gif",
  "https://imgur.com/NZOD2fx.gif",
  "https://imgur.com/ABbHfXz.gif",
  "https://imgur.com/fCe2Jlt.gif",
  "https://imgur.com/rzAErOJ.gif",
  "https://imgur.com/ACvxfZ8.gif",
  "https://imgur.com/YhLkOss.gif",
  "https://imgur.com/rzXasVM.gif",
  "https://imgur.com/dC3yPUt.gif",
  "https://imgur.com/aO1xDVr.gif",
  "https://imgur.com/Gzf5kG3.gif",
  "https://imgur.com/oJynxud.gif",
  "https://imgur.com/Px95OQ2.gif",
  "https://imgur.com/98VUlfL.gif",
  "https://imgur.com/f1W9Qd6.gif",
  "https://imgur.com/XuB5mFD.gif",
  "https://imgur.com/VrYGpJq.gif",
  "https://imgur.com/des7F5S.gif",
  "https://imgur.com/3Sr8ZaQ.gif",
  "https://imgur.com/ZTpYSWn.gif",
  "https://imgur.com/E9OR2fy.gif",
  "https://imgur.com/lJoOn2h.gif",
  "https://imgur.com/i6ZM3zU.gif",
  "https://imgur.com/G2uveEv.gif",
  "https://imgur.com/0TYlGSH.gif",
];

export default {
  name: "stare",
  main: function (user, author) {
    const responses = [
      `${author} is staring at ${user}!`,
      `${user} is being stared at by ${author}!`,
    ];
    return [responses, gifs];
  },
};
