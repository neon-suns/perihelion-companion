import { defineStore } from 'pinia';

export const useStore = defineStore('currentSpell', {
  state: () => ({
    name: 'Solar Corona',
    recipe: [17, 18],
    classes: ['SP', 'B', 'R', 'C', 'T'],
    depends: 'morale',
    resistance: 'highTemperature',
    positiveModification: true,
    affectedValues: ['morale'],
  }),
});
