const gifs = [
  "https://imgur.com/fTsRW8L.gif",
  "https://imgur.com/4matReV.gif",
  "https://imgur.com/u0EFgXV.gif",
  "https://imgur.com/dMZN8md.gif",
  "https://imgur.com/RbRUQK0.gif",
  "https://imgur.com/lStgIvn.gif",
  "https://imgur.com/K6ShTNn.gif",
  "https://imgur.com/nD8O8pl.gif",
  "https://imgur.com/lqiWlHk.gif",
  "https://imgur.com/N6u2dXe.gif",
  "https://imgur.com/ShnXlI1.gif",
  "https://imgur.com/AzCjJGE.gif",
  "https://imgur.com/qJDiU47.gif",
  "https://imgur.com/NGxaKHh.gif",
  "https://imgur.com/Xjf04v0.gif",
  "https://imgur.com/6e7QMXa.gif",
  "https://imgur.com/15snaim.gif",
  "https://imgur.com/WVitl8T.gif",
  "https://imgur.com/6n77WAl.gif",
  "https://imgur.com/SZutaCx.gif",
  "https://imgur.com/so6e0lu.gif",
  "https://imgur.com/aezSGwK.gif",
  "https://imgur.com/yEmXXZk.gif",
];

export default {
  name: "sadrain",
  main: function (author) {
    var responses = [`${author}... :pensive:`];
    return [responses, gifs];
  },
};
