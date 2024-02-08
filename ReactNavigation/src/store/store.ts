import {create} from 'zustand';

export const userInfoStore = create(set => ({
  userInfo: {},
  setUserInfo: (userInfo: any) => set({userInfo: userInfo}),
}));
