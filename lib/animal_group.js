import animalGroupsData from "../data/animal_groups.js";

export default class AnimalGroup {
  #animal;
  #animalJa;
  #collectiveNoun;
  #collectiveNounJa;
  #emoji;
  #level;
  #explanation;

  constructor(animalGroup) {
    this.#animal = animalGroup.animal;
    this.#animalJa = animalGroup.animalJa;
    this.#collectiveNoun = animalGroup.collectiveNoun;
    this.#collectiveNounJa = animalGroup.collectiveNounJa;
    this.#emoji = animalGroup.emoji;
    this.#level = animalGroup.level;
    this.#explanation = animalGroup.explanation;
  }

  get animal() {
    return this.#animal;
  }

  get animalJa() {
    return this.#animalJa;
  }

  get collectiveNoun() {
    return this.#collectiveNoun;
  }

  get collectiveNounJa() {
    return this.#collectiveNounJa;
  }

  get emoji() {
    return this.#emoji;
  }

  get level() {
    return this.#level;
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
