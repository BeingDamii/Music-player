import { v4 as uuidv4 } from "uuid";

function musicData() {
  return [
    {
      name: "Summer vibe",
      cover:
        "https://chillhop.com/wp-content/uploads/2023/02/71374d07888a8b1b3fbef53b82d283f53209cc1a-1024x1024.jpg",
      artist: "Evil Needle, Misha",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=51088",
      color: ["#AF8647", "#2BD160"],
      id: uuidv4(),
      active: true,
    },

    {
      name: "Daydream",
      cover:
        "https://chillhop.com/wp-content/uploads/2023/05/a553b95f790409f69feabdd6279f1153a11f14b3-1024x1024.jpg",
      artist: "Shofel",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=58856",
      color: ["#E0C9B0", "#AA4123"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Cabriolet",
      cover:
        "https://chillhop.com/wp-content/uploads/2023/02/492202568b0d18312224043686735f7f1a47f67b-1024x1024.jpg",
      artist: "Plusma, Ben Bada Boom",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=49369",
      color: ["#E0C9B0", "#AA4123"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "In Circles",
      cover:
        "https://chillhop.com/wp-content/uploads/2023/05/9e6aaa4e04b9e4054f8ed2586d331113e82247da-1024x1024.jpg",
      artist: "J.Folk",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=58836",
      color: ["#EABE62", "#AEC8CC"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Peaceful Dissociation",
      cover:
        "https://chillhop.com/wp-content/uploads/2023/04/a32d2ec47ba20c985c2b2425fd24d277a8f36d3e-1024x1024.jpg",
      artist: "Guillaume Muschalle, Aviino",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=55310",
      color: ["#D5A596", "#AEC8CC"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "The Field From Spirited Away",
      cover:
        "https://chillhop.com/wp-content/uploads/2022/10/1c9e8f008e40a1d5c496a85b2aaf8c96a14a3c88-1024x1024.jpg",
      artist: "Sleepy Fish, coa",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=36919",
      color: ["#A4110D", "#014144"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Serenity",
      cover: "https://i.scdn.co/image/ab67616d0000b2731188e93ed10fd31fd93b635b",
      artist: "Poldoore",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=32843",
      color: ["#61B6DB", "#FAF5BB"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "After Hours",
      cover:
        "https://chillhop.com/wp-content/uploads/2022/10/36fcc61f2d1c707e99f36706700d73229e2e8dff-1024x1024.jpg",
      artist: "Poldoore",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=58833",
      color: ["#C4181A", "#C29201"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Indian Summer Rally",
      cover:
        "https://chillhop.com/wp-content/uploads/2022/03/c03fa64d8da9f1aa67db2a6b0c20cce262e9a976-1024x1024.jpg",
      artist: "oddfish, cocabona",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=32863",
      color: ["#FEB621", "#545F69"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "LA BOHÈME",
      cover:
        "https://chillhop.com/wp-content/uploads/2022/04/8cc8bdc59b30dd1f9d401cb485b8537d909e1f50-1024x1024.jpg",
      artist: "C Y G N",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=31598",
      color: ["#148F5C", "#F6E6E7"],
      id: uuidv4(),
      active: false,
    },
  ];
}

export default musicData;
