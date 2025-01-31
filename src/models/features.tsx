import { ReactNode } from "react";
import { CharacterCounter } from "../components/functional/characterCounter";
import { Theme } from "../components/functional/changeTheme";

export type Features = {
  [key: string]: { id: string; title: string; component: ReactNode };
};

export const features: Features = {
  theme: { id: "theme", title: "Theme", component: <Theme /> },
  "character-counter": {
    id: "character-counter",
    title: "Character Counter",
    component: <CharacterCounter />,
  },
};
