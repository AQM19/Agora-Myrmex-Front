import { create } from "zustand";

interface State {
    isDarkModeEnabled: boolean;
    enableDarkMode: () => void;
    disableDarkMode: () => void;
}

export const useDarkModeStatus = create<State>()((set) => ({
    isDarkModeEnabled: false,

    enableDarkMode: () => set({isDarkModeEnabled: true}),
    disableDarkMode: () => set({isDarkModeEnabled: false})

}))