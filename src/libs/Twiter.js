const tweetProfiles = [ 
    {
        name : 'Donald Trump',
        profile: 'realDonaldTrump'
    }, {
        name : 'Hillary Clinton',
        profile: 'HillaryClinton'
    }];

export const changeProfile = (profile) => {
    console.log('CHANGING PROFILE')
    // const current = tweetProfiles.filter((element) => element.profile === profile).reduce((prev, current) => current,[]);
    const [current] = tweetProfiles.filter((element) => element.profile === profile);
    // return next element or roll over
    return tweetProfiles[(tweetProfiles.indexOf(current) + 1) % (tweetProfiles.length)];
}