const gifs = [
  "https://imgur.com/0Aj6lYh.gif",
  "https://imgur.com/7NzW4Uh.gif",
  "https://imgur.com/x1cU3hX.gif",
  "https://imgur.com/vafsFhb.gif",
  "https://imgur.com/9ZrrHTi.gif",
  "https://imgur.com/e8F9C8o.gif",
  "https://imgur.com/7VKblkq.gif",
  "https://imgur.com/EvrYvjj.gif",
  "https://imgur.com/3kxqieE.gif",
  "https://imgur.com/RezAuNV.gif",
  "https://imgur.com/uWqC8kr.gif",
  "https://imgur.com/vjnbZpN.gif",
  "https://imgur.com/4V88SP5.gif",
  "https://imgur.com/fkHe65r.gif",
  "https://imgur.com/7mgRQrn.gif",
  "https://imgur.com/tqdt8VK.gif",
  "https://imgur.com/3FIUowK.gif",
  "https://imgur.com/EBu4jrf.gif",
  "https://imgur.com/GUhVQKT.gif",
  "https://imgur.com/TdsZTP6.gif",
  "https://imgur.com/KKO4zxt.gif",
  "https://imgur.com/1eNF4XN.gif",
  "https://imgur.com/42nBYxK.gif",
  "https://imgur.com/CGLwmJs.gif",
  "https://imgur.com/qXPcYIt.gif",
  "https://imgur.com/v0LvPpQ.gif",
  "https://imgur.com/Lglktft.gif",
  "https://imgur.com/HRFkZu8.gif",
  "https://imgur.com/f5argRa.gif",
];

export default {
  name: "sleep",
  main: function (author) {
    var responses = [`${author} is sleeping!`];
    return [responses, gifs];
  },
};
