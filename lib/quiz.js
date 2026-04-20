import enquirer from "enquirer";
import AnimalGroup from "./animal_group.js";

const { Quiz: EnquirerQuiz } = enquirer;

export default class Quiz {
  constructor(level) {
    this.animalGroups = AnimalGroup.getGroupsByLevel(level);
  }

  async run() {
    const shuffledGroups = Quiz.shuffleArray([...this.animalGroups]);
    for (const group of shuffledGroups) {
      await this.#askQuestion(group);
    }
  }

  async #askQuestion(correctGroup) {
    const choices = this.#buildChoices(correctGroup);
    const correctChoice = choices.indexOf(correctGroup.collectiveNoun);

    const prompt = new EnquirerQuiz({
      name: "animalGroup",
      message: `a _____ of ${correctGroup.animal}`,
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

  #buildChoices(correctGroup) {
    const incorrectGroups = Quiz.shuffleArray([...this.animalGroups])
      .filter((animalGroup) => animalGroup !== correctGroup)
      .slice(0, 3);

    return Quiz.shuffleArray([...incorrectGroups, correctGroup]).map(
      (animalGroup) => animalGroup.collectiveNoun,
    );
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
