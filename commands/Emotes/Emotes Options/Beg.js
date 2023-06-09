const gifs = [
  "https://media.giphy.com/media/vRwmQ4az7ugWk/giphy.gif",
  "https://media1.tenor.com/images/4b168fa314d83adb22b73e661cf68c35/tenor.gif?itemid=5584978",
  "https://media1.tenor.com/images/35b65b5121ff2d1531d23c295d0ae402/tenor.gif?itemid=12802079",
  "https://media.giphy.com/media/UONddWA0rnfdw3m8CG/giphy.gif",
  "https://data.whicdn.com/images/104453480/original.gif",
  "https://plyasm.files.wordpress.com/2018/01/chuunibyou-beg.gif",
  "https://uploads.disquscdn.com/images/d79560617ace149e79b9ad297a68e68d62e1ced1eb22af93a0faf0de51193c2c.gif",
  "https://i.pinimg.com/originals/c2/fa/da/c2fadaea88e77e3adc1ded7f6c35cfa0.gif",
  "https://64.media.tumblr.com/c4856e25d7e12ed057541ca3a1753b0f/tumblr_pqjnah9kgo1th206io1_250.gif",
  "https://forums-images.oneplus.net/attachments/74/74924-7b9e25600fb0663dfbd0e3c74c61ab61.gif",
  "https://pa1.narvii.com/6431/1a1f1a47a3e56c6a79841c3c7af6e3d5d19127ee_hq.gif",
  "https://media.tenor.com/images/6fee6b851b635764c1d1358758920e15/tenor.gif",
  "https://media.giphy.com/media/3oxHQfvDzo7VhSRy8M/giphy.gif",
  "https://media.tenor.com/images/c3fbe586c9a17760aa891e09d2751941/tenor.gif",
  "https://i.pinimg.com/originals/6c/9c/45/6c9c4597982ff8b95e7089efa99bd599.gif",
  "https://i.pinimg.com/originals/f7/56/f7/f756f7579ece3f79c30d034b4e9e07ca.gif",
  "https://media.tenor.com/images/0b2e5ad0c3eb9d749352560f22b6b86e/tenor.gif",
  "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/8d8aa80d-a00f-4ca5-817d-30fbc6bf33be/da1dpsh-5e0c0e74-6d9e-477d-9eb9-a32222e94767.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzhkOGFhODBkLWEwMGYtNGNhNS04MTdkLTMwZmJjNmJmMzNiZVwvZGExZHBzaC01ZTBjMGU3NC02ZDllLTQ3N2QtOWViOS1hMzIyMjJlOTQ3NjcuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.KlJn0A1Ko2BN_niTk1TnTHjhtIgIGca3znSth2im3NA",
  "https://i.gifer.com/LAXD.gif",
  "https://1.bp.blogspot.com/-6Fu53YNno38/WgyapImEg0I/AAAAAAAA_iQ/BHViJTXn9swyeIL86mMgJRiom22SWlkXACKgBGAs/s1600/Omake%2BGif%2BAnime%2B-%2BKonohana%2BKitan%2B-%2BEpisode%2B7%2B-%2BSakura%2Band%2BYuzu%2BBeg.gif",
  "https://image.myanimelist.net/ui/2PIY8zCfahMAh_yfMRmdcR6IqIjFBcTuy63F5OPIheQM2j1zvtLBsbLwCFaQpya-8wf1nS71bjP9POJOZTV9APmkBF6ZPn1TIXUfudJGaEY",
  "https://i.gifer.com/7Cc.gif",
  "http://mrwgifs.com/wp-content/uploads/2014/05/James-Looks-Incredibly-Excited-With-Big-Green-Anime-Eyes-Begging-Hands-On-Pokemon.gif",
  "https://i.redd.it/ya7oue5zsq551.gif",
  "https://thumbs.gfycat.com/TameMiniatureHedgehog-size_restricted.gif",
  "https://i.imgur.com/rmOehfz.gif",
  "https://pa1.narvii.com/7108/200974b9068dfa4698173d5182ccaeed19088a92r1-500-364_hq.gif",
  "https://gifimage.net/wp-content/uploads/2018/10/begging-anime-girl-gif-2.gif",
  "https://i.imgur.com/7UgQQt9.gif",
  "https://c.tenor.com/8s1ka1K5QqsAAAAM/sad-eyes-puppy-eyes.gif",
  "https://64.media.tumblr.com/16ec23804d2d467c3e45ebeceb0b0d57/tumblr_n5fi7h8dNs1tx9dtlo1_400.gif",
  "https://66.media.tumblr.com/39d849d3afff79f0dfd66f222a25a990/tumblr_ofn6j4Jzy21tydz8to1_400.gif",
  "https://c.tenor.com/NrQT6QdnMeUAAAAC/anime-cry.gif",
];

export default {
  name: "beg",
  main: function (author) {
    var responses = [`${author} is begging! :pleading_face:`];
    return [responses, gifs];
  },
};
