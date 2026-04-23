import animalGroupsData from "../data/animal_groups.js";

export default class AnimalGroup {
  constructor(animalGroup) {
    this.animal = animalGroup.animal;
    this.animalJa = animalGroup.animalJa;
    this.collectiveNoun = animalGroup.collectiveNoun;
    this.collectiveNounJa = animalGroup.collectiveNounJa;
    this.emoji = animalGroup.emoji;
    this.level = animalGroup.level;
    this.explanation = animalGroup.explanation;
  }

  static getGroupsByLevel(level) {
    return animalGroupsData
      .filter((animalGroup) => animalGroup.level === level)
      .map((animalGroup) => new AnimalGroup(animalGroup));
  }
}
