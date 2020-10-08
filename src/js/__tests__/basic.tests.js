import Settings from '../Settings';

test('check class Settings', () => {
  function checkSetting() {
    const test = new Settings();
    return test.setting;
  }
  expect(checkSetting()).toEqual(new Map([['theme', 'dark'], ['music', 'trance'], ['difficulty', 'easy']]));
});

test('check class Settings', () => {
  function checkSetting() {
    const test = new Settings({ theme: 'gray' }, { music: 'pop' });
    return test.setting;
  }
  expect(checkSetting()).toEqual(new Map([['theme', 'gray'], ['music', 'pop'], ['difficulty', 'easy']]));
});
