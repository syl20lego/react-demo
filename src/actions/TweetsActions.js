import { CHANGE_PROFILE, PROFILE_CHANGED } from './Types';

export const changeProfile = () => {
    return {
        type: CHANGE_PROFILE
    };
};

export const profileChanged = (profile) => {
    return {
        type: PROFILE_CHANGED,
        data: profile
    };
};