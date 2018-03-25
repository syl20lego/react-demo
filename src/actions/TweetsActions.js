import { CHANGE_PROFILE, PROFILE_CHANGED } from './Types';

export const changeProfile = (profile) => {
  return {
    type: CHANGE_PROFILE,
    data: profile,
  };
};

export const profileChanged = (timeline) => {
  return {
    type: PROFILE_CHANGED,
    data: timeline,
  };
};
