import enquirer from "enquirer";
import AnimalGroup from "./animal_group.js";

const { Quiz: EnquirerQuiz } = enquirer;

export default class Quiz {
  constructor(level) {
    this.animalGroups = AnimalGroup.getGroupsByLevel(level);
  }

  async run() {
    for (const group of this.animalGroups) {
      await this.#askQuestion(group);
    }
  }

  async #askQuestion(group) {
    const shuffledGroups = Quiz.shuffleArray([...this.animalGroups]);
    const choices = shuffledGroups.map((group) => group.collectiveNoun);
    const correctChoice = choices.indexOf(group.collectiveNoun);

    const prompt = new EnquirerQuiz({
      name: "animalGroup",
      message: `a _____ of ${group.animal}`,
      choices,
      correctChoice,
    });

    const answer = await prompt.run();

    if (answer.correct) {
      console.log("Correct!");
    } else {
      console.log(`Wrong! Correct answer is ${answer.correctAnswer}`);
    }
  }

  // Fisher-Yatesアルゴリズムを使用
  static shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
}
