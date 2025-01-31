import { Features, features } from "../../../models/features";
import { Feature } from "./features/feature";

type HeaderProps = {
  state: keyof Features;
  setState: (par: string) => void;
};

export function Header({ state, setState }: HeaderProps) {
  return (
    <header>
      <nav className="flex items-center p-2 justify-between">
        <h2>{features[state]?.title ?? ""}</h2>
        <select
          className={`${state ? "bg-violet-400 text-white" : ""}`}
          name="fratures"
          id="fratures"
          value={state}
          onChange={(e) => {
            setState(e.target.value);
          }}
        >
          <option value="none">Select Feature...</option>
          {Object.entries(features).map(([k, value]) => (
            <Feature key={k} k={k} v={value.title} />
          ))}
        </select>
      </nav>
    </header>
  );
}
