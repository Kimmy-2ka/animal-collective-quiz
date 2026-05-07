import enquirer from "enquirer";
import AnimalGroup from "./animal_group.js";

const { Quiz: EnquirerQuiz } = enquirer;

export default class Quiz {
  static TOTAL_QUESTIONS = 10;

  #japaneseHint;
  #studyMode;
  #animalGroups;
  #score;

  constructor({ level, japaneseHint, studyMode }) {
    this.#animalGroups = AnimalGroup.getGroupsByLevel(level);
    this.#japaneseHint = japaneseHint;
    this.#studyMode = studyMode;
    this.#score = 0;
  }

  async run() {
    if (this.#studyMode) {
      this.#showStudyMode();
    }

    const shuffledGroups = Quiz.#shuffleGroups([...this.#animalGroups]);
    let count = 1;

    for (const group of shuffledGroups) {
      this.#showHeader(count);
      await this.#askQuestion(group);
      console.log();
      count++;
    }

    this.#showResult();
  }

  #showStudyMode() {
    console.log("\n--- Study ---\n");
    for (const group of this.#animalGroups) {
      console.log(this.#buildExplanation(group));
      console.log();
    }
    console.log("\n--- Quiz Start!! ---\n");
  }

  #buildExplanation(group) {
    const lines = [
      group.emoji,
      `動物: ${group.animalWithJa}`,
      `集合名詞: ${group.collectiveNounWithJa}`,
      `説明: ${group.explanation}`,
    ];
    return lines.join("\n");
  }

  #showHeader(count) {
    console.log(
      `⭐ Score: ${this.#score} ⭐ [${count}/${Quiz.TOTAL_QUESTIONS}]`,
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
      this.#score++;
    } else {
      console.log(`Wrong! Correct answer is ${answer.correctAnswer}`);
    }
  }

  #buildMessage(correctGroup) {
    const lines = [
      `${correctGroup.emoji}  { What are we called?`,
      "",
      `a _____ of ${correctGroup.animal}`,
    ];
    if (this.#japaneseHint) {
      lines.push(`Hint: ${correctGroup.animalWithJa}`);
    }
    return lines.join("\n");
  }

  #buildChoices(correctGroup) {
    const incorrectGroups = Quiz.#shuffleGroups([...this.#animalGroups])
      .filter((animalGroup) => animalGroup !== correctGroup)
      .slice(0, 3);

    return Quiz.#shuffleGroups([...incorrectGroups, correctGroup]).map(
      (animalGroup) => animalGroup.collectiveNoun,
    );
  }

  #showResult() {
    const message =
      this.#score === Quiz.TOTAL_QUESTIONS
        ? "  Congratulations!!🎉"
        : "  Keep trying!";
    const lines = [
      "🌟=======================🌟",
      "  finished!",
      `  Your score is ${this.#score} / ${Quiz.TOTAL_QUESTIONS}!`,
      message,
      "🌟=======================🌟",
    ];

    console.log(lines.join("\n"));
  }

  // Fisher-Yatesアルゴリズムを使用
  static #shuffleGroups(groups) {
    for (let i = groups.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [groups[i], groups[j]] = [groups[j], groups[i]];
    }
    return groups;
  }
}
