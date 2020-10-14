/* eslint-disable no-restricted-syntax */
export default class Settings {
  constructor(...rest) {
    this.defaultSettings = new Map([
      ['theme', 'dark'],
      ['music', 'trance'],
      ['difficulty', 'easy']]);
    this.settingsAll = [
      { theme: ['dark', 'light', 'gray'] },
      { music: ['trance', 'pop', 'rock', 'chillout', 'off'] },
      { difficulty: ['easy', 'normal', 'hard', 'nightmare'] },
    ];
    this.usersSettings = new Map(this.defaultSettings);

    // было так
    // rest.forEach((elem) => {
    //   for (const key in elem) {
    //     if (Object.prototype.hasOwnProperty.call(elem, key)) {
    //       this.usersSettings.set(key, elem[key]);
    //     }
    //   }
    // });

    rest.forEach((elem) => {
      for (const [key, value] of Object.entries(elem)) {
        this.usersSettings.set(key, value);
      }
    });
  }

  get setting() {
    return this.usersSettings;
  }
}
