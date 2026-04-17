import animalGroupsData from "../data/animal_groups.js";

export default class AnimalGroup {
  constructor(animalGroup) {
    this.animal = animalGroup.animal;
    this.collectiveNoun = animalGroup.collectiveNoun;
    this.emoji = animalGroup.emoji;
    this.level = animalGroup.level;
  }

  static getGroupsByLevel(level) {
    return animalGroupsData
      .filter((animalGroup) => animalGroup.level === level)
      .map((animalGroup) => new AnimalGroup(animalGroup));
  }
}
