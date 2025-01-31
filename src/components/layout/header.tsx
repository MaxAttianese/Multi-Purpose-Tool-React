import { Features, features } from "../../models/features";

type HeaderProps = {
  state: keyof Features;
  setState: (par: string) => void;
};

export function Header({ state, setState }: HeaderProps) {
  return (
    <header>
      <nav className="flex items-center p-2 justify-between">
        <h1 className="text-violet-700 font-bold text-xl">
          {features[state]?.title ?? ""}
        </h1>
        <select
          className={`${state ? "bg-violet-400 text-white" : ""}`}
          name="fratures"
          id="fratures"
          value={state}
          onChange={(e) => {
            setState(e.target.value);
          }}
        >
          {Object.entries(features).map(([k, value]) => (
            <option key={k} value={k}>
              {value.title}
            </option>
          ))}
        </select>
      </nav>
    </header>
  );
}
