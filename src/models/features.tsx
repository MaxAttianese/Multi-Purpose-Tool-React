import { ReactNode } from "react";
import { CharacterCounter } from "../components/features/character-counter";
import { Theme } from "../components/features/change-theme";

export type Features = {
  [key: string]: { title: string; component: ReactNode };
};

export const features: Features = {
  theme: { title: "Theme", component: <Theme /> },
  "character-counter": {
    title: "Character Counter",
    component: <CharacterCounter />,
  },
};
