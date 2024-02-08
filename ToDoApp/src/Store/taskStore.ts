import {create} from 'zustand';
import uuid from 'react-native-uuid';

export const userStore = create(set => ({
  objects: [],
  addObject: (name: string) =>
    set((state: any) => ({
      objects: [...state.objects, {id: {uuid}, name: name}],
    })),
}));
