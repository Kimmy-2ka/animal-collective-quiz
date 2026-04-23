const animalGroupsData = [
  {
    animal: "lions",
    animalJa: "ライオン",
    collectiveNoun: "pride",
    collectiveNounJa: "誇り",
    emoji: "🦁",
    level: "easy",
    explanation:
      "prideは「誇り」という意味ですが、ライオンの堂々としたイメージと結びついた表現だと考えられています。",
  },
  {
    animal: "cats",
    animalJa: "猫",
    collectiveNoun: "clowder",
    collectiveNounJa: "猫の群れ",
    emoji: "🐱",
    level: "easy",
    explanation:
      "clutterのような「散らかった集まり」に関係すると考えられています。猫が集まったり散らばったりする姿を想像すると覚えやすいです🐈",
  },
  {
    animal: "elephants",
    animalJa: "象",
    collectiveNoun: "parade",
    collectiveNounJa: "行進",
    emoji: "🐘",
    level: "easy",
    explanation:
      "paradeは「行進」という意味です。象たちが並んで進む姿を思い浮かべると覚えやすいです。",
  },
  {
    animal: "dolphins",
    animalJa: "イルカ",
    collectiveNoun: "pod",
    collectiveNounJa: "イルカやクジラなどの群れ",
    emoji: "🐬",
    level: "easy",
    explanation:
      "podはイルカやクジラなどの海洋哺乳類の集団を指す場合に使われます。",
  },
  {
    animal: "fish",
    animalJa: "魚",
    collectiveNoun: "school",
    collectiveNounJa: "学校",
    emoji: "🐟",
    level: "easy",
    explanation:
      "魚の学校のように考えると覚えやすいですね🐟。ただし、実際の語源は中世オランダ語のscholeとされており、学校のschoolとは別です。",
  },
  {
    animal: "cows",
    animalJa: "牛",
    collectiveNoun: "herd",
    collectiveNounJa: "主に大型草食動物の群れ",
    emoji: "🐄",
    level: "easy",
    explanation:
      "herdは一緒に生活したり移動したりする動物の群れを表します。特に牛などに使われることが多く、羊、象、鹿などにも使われます。",
  },
  {
    animal: "sheep",
    animalJa: "羊",
    collectiveNoun: "flock",
    collectiveNounJa: "主に鳥や羊の群れ",
    emoji: "🐑",
    level: "easy",
    explanation:
      "flockは鳥や小型の草食動物の群れを表します。特に羊ではよく使われる表現です。",
  },
  {
    animal: "wolves",
    animalJa: "オオカミ",
    collectiveNoun: "pack",
    collectiveNounJa: "主にオオカミや犬の群れ",
    emoji: "🐺",
    level: "easy",
    explanation: "packはオオカミのようなイヌ科の動物の群れを表す言葉です。",
  },
  {
    animal: "monkeys",
    animalJa: "猿",
    collectiveNoun: "troop",
    collectiveNounJa: "隊",
    emoji: "🐒",
    level: "easy",
    explanation:
      "troopは「隊」や「一団」という意味です。サルたちがまとまって行動する姿をイメージすると覚えやすいです🐵",
  },
  {
    animal: "geese",
    animalJa: "ガチョウ",
    collectiveNoun: "gaggle",
    collectiveNounJa: "ガチョウの群れ",
    emoji: "🪿",
    level: "easy",
    explanation:
      "gaggleはガチョウの群れを表す言葉です。ガチョウの鳴き声をまねた語に由来するとされています。",
  },

  {
    animal: "zebras",
    animalJa: "シマウマ",
    collectiveNoun: "dazzle",
    collectiveNounJa: "まばゆさ",
    emoji: "🦓",
    level: "normal",
    explanation:
      "dazzleは「まばゆさ」「目をくらませるもの」という意味です。シマウマの縞模様が集まり、見分けにくくなる様子を連想すると覚えやすいです。",
  },
  {
    animal: "owls",
    animalJa: "フクロウ",
    collectiveNoun: "parliament",
    collectiveNounJa: "議会",
    emoji: "🦉",
    level: "normal",
    explanation:
      "parliamentは「議会」という意味です。フクロウは昔から知恵の象徴とされることが多く、賢そうに集まっている姿が議会のように見えることから使われる表現だと考えられています。",
  },
  {
    animal: "giraffes",
    animalJa: "キリン",
    collectiveNoun: "tower",
    collectiveNounJa: "塔",
    emoji: "🦒",
    level: "normal",
    explanation:
      "towerは「塔」という意味です。キリンはとても背が高いので、群れで立っていると塔のように見えそうですね🦒",
  },
  {
    animal: "penguins",
    animalJa: "ペンギン",
    collectiveNoun: "colony",
    collectiveNounJa: "コロニー",
    emoji: "🐧",
    level: "normal",
    explanation:
      "colonyは、同じ場所に集まって暮らす動物の集団を表す言葉です。ペンギンがたくさん集まって暮らしている姿を想像すると覚えやすいです🐧",
  },
  {
    animal: "sharks",
    animalJa: "サメ",
    collectiveNoun: "shiver",
    collectiveNounJa: "震え、身震い",
    emoji: "🦈",
    level: "normal",
    explanation:
      "shiverは「震え」「身震い」という意味です。サメの群れに思わずぞくっとする感じを連想すると覚えやすいです🦈",
  },
  {
    animal: "otters",
    animalJa: "カワウソ",
    collectiveNoun: "romp",
    collectiveNounJa: "元気にはしゃぎ回ること",
    emoji: "🦦",
    level: "normal",
    explanation:
      "rompは「元気にはしゃぎ回ること」という意味です。カワウソが元気に遊びまわる姿を想像すると覚えやすいです🦦",
  },
  {
    animal: "kangaroos",
    animalJa: "カンガルー",
    collectiveNoun: "mob",
    collectiveNounJa: "群衆",
    emoji: "🦘",
    level: "normal",
    explanation:
      "mobは「群衆」という意味です。カンガルーの群れを表す言い方として使われ、特にオーストラリアらしい表現として知られています。",
  },
  {
    animal: "camels",
    animalJa: "ラクダ",
    collectiveNoun: "caravan",
    collectiveNounJa: "隊商",
    emoji: "🐪",
    level: "normal",
    explanation:
      "caravanは「隊商」という意味です。ラクダが列になって荷物や商品を運んでいく姿をイメージすると覚えやすいです。",
  },
  {
    animal: "bees",
    animalJa: "蜂",
    collectiveNoun: "swarm",
    collectiveNounJa: "主に虫の大群",
    emoji: "🐝",
    level: "normal",
    explanation: "swarmは、虫などが大群でまとまって動くことを表す言葉です。",
  },
  {
    animal: "frogs",
    animalJa: "カエル",
    collectiveNoun: "army",
    collectiveNounJa: "軍隊",
    emoji: "🐸",
    level: "normal",
    explanation:
      "armyは「軍隊」という意味です。カエルはかわいいので少し意外ですが、そのギャップが面白い表現ですね🐸",
  },

  {
    animal: "flamingos",
    animalJa: "フラミンゴ",
    collectiveNoun: "flamboyance",
    collectiveNounJa: "華やかさ",
    emoji: "🦩",
    level: "difficult",
    explanation:
      "flamboyanceは「華やかさ」や「派手さ」という意味です。フラミンゴの鮮やかで優雅な姿にぴったりですね🦩",
  },
  {
    animal: "boars",
    animalJa: "イノシシ",
    collectiveNoun: "sounder",
    collectiveNounJa: "イノシシの群れ",
    emoji: "🐗",
    level: "difficult",
    explanation:
      "sounderはイノシシや野生のブタの群れを表す言葉です。大人のメスと子どもたちがまとまって暮らしますが、オスは単独行動が多いです。",
  },
  {
    animal: "rhinoceroses",
    animalJa: "サイ",
    collectiveNoun: "crash",
    collectiveNounJa: "激突",
    emoji: "🦏",
    level: "difficult",
    explanation:
      "crashは「激突」という意味です。サイが突進してきたら、ひとたまりもなさそうですね。",
  },
  {
    animal: "swans",
    animalJa: "白鳥",
    collectiveNoun: "bevy",
    collectiveNounJa: "鳥の群れ",
    emoji: "🦢",
    level: "difficult",
    explanation:
      "bevyはもともと鳥の群れを表す言葉で、そこから女性たちなど同じ種類の集まりにも使われるようになりました。",
  },
  {
    animal: "butterflies",
    animalJa: "蝶",
    collectiveNoun: "kaleidoscope",
    collectiveNounJa: "万華鏡",
    emoji: "🦋",
    level: "difficult",
    explanation:
      "kaleidoscopeは「万華鏡」という意味です。蝶の美しい羽は、まるで万華鏡のようですね🦋",
  },
  {
    animal: "bats",
    animalJa: "コウモリ",
    collectiveNoun: "cauldron",
    collectiveNounJa: "大釜",
    emoji: "🦇",
    level: "difficult",
    explanation:
      "cauldronは「大釜」という意味です。暗闇で魔女が大釜をかき混ぜていて、そのまわりをコウモリが飛んでいるような、少し不気味でミステリアスな場面を想像すると覚えやすいです🦇",
  },
  {
    animal: "parrots",
    animalJa: "オウム",
    collectiveNoun: "pandemonium",
    collectiveNounJa: "大騒ぎ",
    emoji: "🦜",
    level: "difficult",
    explanation:
      "pandemoniumは「大騒ぎ」という意味です。オウムたちが集まって、わいわいお喋りしているかもしれませんね🦜",
  },
  {
    animal: "crocodiles",
    animalJa: "ワニ",
    collectiveNoun: "bask",
    collectiveNounJa: "日なたぼっこ",
    emoji: "🐊",
    level: "difficult",
    explanation:
      "baskは「日なたぼっこをする」という意味です。ワニが集まって川辺で日なたぼっこをする姿を想像すると覚えやすいです🐊",
  },
  {
    animal: "foxes",
    animalJa: "キツネ",
    collectiveNoun: "skulk",
    collectiveNounJa: "隠れ潜むこと",
    emoji: "🦊",
    level: "difficult",
    explanation:
      "skulkは「隠れ潜むこと」という意味です。キツネがこっそり身をひそめて動く姿をイメージすると覚えやすいです🦊",
  },
  {
    animal: "eagles",
    animalJa: "ワシ",
    collectiveNoun: "convocation",
    collectiveNounJa: "召集",
    emoji: "🦅",
    level: "difficult",
    explanation:
      "convocationは「召集」や「正式な集まり」という意味です。ワシたちが集まって、重要な会議をしているのが想像つきます。",
  },
];

export default animalGroupsData;
