const gifs = [
  "https://imgur.com/FPtAoAK.gif",
  "https://imgur.com/fiVnE0C.gif",
  "https://imgur.com/nHIxsTe.gif",
  "https://imgur.com/KchoRhu.gif",
  "https://imgur.com/LidkUt4.gif",
  "https://imgur.com/IzoNByU.gif",
  "https://imgur.com/v75iujs.gif",
  "https://imgur.com/8IvsSM0.gif",
  "https://imgur.com/PTEaCGU.gif",
  "https://imgur.com/GbRYCkD.gif",
  "https://imgur.com/c4az59V.gif",
  "https://imgur.com/7qn47ok.gif",
  "https://imgur.com/wMwG5v8.gif",
  "https://imgur.com/xxYNt3n.gif",
  "https://imgur.com/YtLTZoL.gif",
  "https://imgur.com/f4Ykzbr.gif",
  "https://imgur.com/KpsvbnZ.gif",
  "https://imgur.com/NtVxSED.gif",
  "https://imgur.com/ZG8Mubn.gif",
  "https://imgur.com/PsbNrLP.gif",
  "https://imgur.com/7RABT3t.gif",
  "https://imgur.com/omglciq.gif",
  "https://imgur.com/Rzwx39A.gif",
  "https://imgur.com/CzR7Mhe.gif",
];

export default {
  name: "kiss",
  main: function (user, author) {
    const responses = [
      `${user} was kissed by ${author}!`,
      `${author} kisses ${user}!`,
      `${user} and ${author} are kissing!`,
    ];
    return [responses, gifs];
  },
};
