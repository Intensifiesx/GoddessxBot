const gifs = [
  "https://imgur.com/sRAJZ0l.gif",
  "https://imgur.com/l9kv1r1.gif",
  "https://imgur.com/gNXPe21.gif",
  "https://imgur.com/lZLKr9C.gif",
  "https://imgur.com/DzejGhX.gif",
  "https://imgur.com/NK6ijB7.gif",
  "https://imgur.com/r4TWh1U.gif",
];

export default {
  name: "flip",
  main: function (author) {
    var responses = [`${author} is flipping!!`];
    return [responses, gifs];
  },
};
