import animalGroupsData from "../data/animal_groups.js";

export default class AnimalGroup {
  #animal;
  #animalJa;
  #collectiveNoun;
  #collectiveNounJa;
  #emoji;
  #explanation;

  constructor(animalGroup) {
    this.#animal = animalGroup.animal;
    this.#animalJa = animalGroup.animalJa;
    this.#collectiveNoun = animalGroup.collectiveNoun;
    this.#collectiveNounJa = animalGroup.collectiveNounJa;
    this.#emoji = animalGroup.emoji;
    this.#explanation = animalGroup.explanation;
  }

  get animal() {
    return this.#animal;
  }

  get animalWithJa() {
    return `${this.animal}(${this.#animalJa})`;
  }

  get collectiveNoun() {
    return this.#collectiveNoun;
  }

  get collectiveNounWithJa() {
    return `${this.#collectiveNoun}(${this.#collectiveNounJa})`;
  }

  get emoji() {
    return this.#emoji;
  }

  get explanation() {
    return this.#explanation;
  }

  static getGroupsByLevel(level) {
    return animalGroupsData
      .filter((animalGroup) => animalGroup.level === level)
      .map((animalGroup) => new AnimalGroup(animalGroup));
  }
}
