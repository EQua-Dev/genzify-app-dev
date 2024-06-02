import { string } from "zod";
import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

export type UserData = {
  username: string;
  phone: string;
  nationality: string;
  state: string;
  address: string;
  gender?: string;
  dateOfBirth?: string;
};

export type State = {
  step: number;
  entries: UserData;
};

type Actions = {
  actions: {
    addUserData: (data: UserData) => void;
    removeEntry: (index: number) => void;
    goToNextStep: () => void;
    goToPrevStep: () => void;
    resetStore: () => void;
  };
};

export const useRegistrationStore = create<State & Actions>()(
  immer((set) => ({
    step: 1,
    entries: {} as UserData,
    actions: {
      addUserData: (data) => {
        set((state) => {
          const existingIndex = state.entries.username === data.username;

          if (existingIndex) {
            state.entries = data;
          } else {
            state.entries = data;
          }
        });
      },
      removeEntry: (index) => {
        set((state) => {
          state.entries = {} as UserData;
        });
      },
      goToNextStep: () => {
        set((state) => {
          state.step += 1;
        });
      },
      goToPrevStep: () => {
        set((state) => {
          state.step -= 1;
        });
      },
      resetStore: () => {
        set((state) => {
          state.entries = {} as UserData;

          state.step = 1;
        });
      },
    },
  }))
);
