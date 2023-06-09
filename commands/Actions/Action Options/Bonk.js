const gifs = [
  "https://imgur.com/MhHFnAb.png",
  "https://imgur.com/EJGHctn.jpg",
  "https://imgur.com/IN4rGM8.png",
  "https://imgur.com/djws140.gif",
  "https://imgur.com/iKnUapo.jpg",
  "https://imgur.com/KjznOP5.jpg",
  "https://imgur.com/noEEL5d.jpg",
  "https://imgur.com/W4VXpV3.gif",
  "https://imgur.com/DA1CTCN.gif",
  "https://imgur.com/a9jPxJH.gif",
  "https://imgur.com/u6qOYrW.gif",
  "https://imgur.com/aJe1ufq.jpg",
  "https://imgur.com/rsP9TjQ.jpg",
  "https://imgur.com/RSjUyqZ.gif",
  "https://imgur.com/zDwIUtI.jpg",
  "https://imgur.com/q6yCzFE.jpg",
  "https://imgur.com/UouR7X9.jpg",
  "https://imgur.com/uykyvDG.gif",
  "https://imgur.com/v29H6Sf.gif",
  "https://imgur.com/i8xFhq8.gif",
  "https://imgur.com/ys7gsVE.gif",
  "https://imgur.com/KGeQm5J.gif",
  "https://imgur.com/ROZAwQ6.gif",
  "https://imgur.com/wvU9rjP.gif",
  "https://imgur.com/7K35H3H.gif",
  "https://imgur.com/9TmdeQT.gif",
];

export default {
  name: "bonk",
  main: function (user, author) {
    var responses = [
      `${user} was bonked by ${author}!`,
      `${author} is bonking ${user}!`,
      `${author} bonks ${user}!`,
    ];
    return [responses, gifs];
  },
};
