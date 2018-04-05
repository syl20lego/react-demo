import { changeProfile } from './Twiter';

describe('Testing Twitter actions', () => {
  it('When no profile should change profile to Trump', () => {
    expect(changeProfile()).toEqual({
      name: 'Donald Trump',
      profile: 'realDonaldTrump',
    });
  });
  it('When Trump should change profile to Hilary', () => {
    expect(changeProfile('realDonaldTrump')).toEqual({
      name: 'Hillary Clinton',
      profile: 'HillaryClinton',
    });
  });
  it('When Hilary should change profile to Trump', () => {
    expect(changeProfile('HillaryClinton')).toEqual({
      name: 'Donald Trump',
      profile: 'realDonaldTrump',
    });
  });
});
