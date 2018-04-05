import { strings } from './Strings';

describe('Testing strings', () => {
  const supportedLanguages = ['en', 'fr'];
  supportedLanguages.forEach((language) => {
    const otherLanguages = Object.keys(strings).filter(element => element !== language);
    otherLanguages.forEach((anotherLanguage) => {
      Object.keys(strings[language]).forEach((key) => {
        it('Should have same key', () => {
          // We don't test for the value, since they wouldn't be equals in most cases
          expect(strings[anotherLanguage][key]).toBeTruthy();
        });
      });
    });
  });
});
