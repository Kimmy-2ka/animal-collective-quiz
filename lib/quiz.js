import enquirer from "enquirer";
import AnimalGroup from "./animal_group.js";

const { Quiz: EnquirerQuiz } = enquirer;

export default class Quiz {
  static TOTAL_QUESTIONS = 10;

  constructor({ level }) {
    this.level = level;
    this.animalGroups = AnimalGroup.getGroupsByLevel(level);
    this.score = 0;
  }

  async run() {
    const shuffledGroups = Quiz.shuffleArray([...this.animalGroups]);
    let count = 1;
    for (const group of shuffledGroups) {
      this.#showHeader(count);
      await this.#askQuestion(group);
      console.log();
      count++;
    }
    this.#showResult();
  }

  #showHeader(count) {
    console.log(
      `⭐ Score: ${this.score} ⭐ [${count}/${Quiz.TOTAL_QUESTIONS}]`,
    );
    console.log();
  }

  async #askQuestion(correctGroup) {
    const message = this.#buildMessage(correctGroup);
    const choices = this.#buildChoices(correctGroup);
    const correctChoice = choices.indexOf(correctGroup.collectiveNoun);

    const prompt = new EnquirerQuiz({
      name: "animalGroup",
      message,
      choices,
      correctChoice,
    });

    const answer = await prompt.run();

    if (answer.correct) {
      console.log("Correct!");
      this.score++;
    } else {
      console.log(`Wrong! Correct answer is ${answer.correctAnswer}`);
    }
  }

  #buildMessage(correctGroup) {
    const message = [
      `${correctGroup.emoji}  {What are we called?`,
      "",
      `a _____ of ${correctGroup.animal}`,
    ];
    return message.join("\n");
  }

  #buildChoices(correctGroup) {
    const incorrectGroups = Quiz.shuffleArray([...this.animalGroups])
      .filter((animalGroup) => animalGroup !== correctGroup)
      .slice(0, 3);

    return Quiz.shuffleArray([...incorrectGroups, correctGroup]).map(
      (animalGroup) => animalGroup.collectiveNoun,
    );
  }

  #showResult() {
    const message =
      this.score === Quiz.TOTAL_QUESTIONS
        ? "  Congratulations!!🎉"
        : "  Keep trying!";
    const results = [
      "🌟=======================🌟",
      "  finished!",
      `  Your score is ${this.score} / ${Quiz.TOTAL_QUESTIONS}!`,
      message,
      "🌟=======================🌟",
    ];

    console.log(results.join("\n"));
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
