import { useState } from "react";

export function CharacterCounter() {
  const [result, setResult] = useState<{
    nCharacter: number;
    nWord: number;
  }>({ nCharacter: 0, nWord: 0 });

  const counter = (text: string) => {
    const string = text.replaceAll(/(?:\r\n|\r|\n){1,}/g, " ");
    setResult({
      nCharacter: string.replaceAll(" ", "").length,
      nWord: string.split(" ").filter((el) => !!el).length,
    });
  };

  return (
    <>
      <label className="text-violet-700 font-semibold text-lg" htmlFor="text">
        Input your text
      </label>
      <textarea
        className="border rounded w-full p-1 mt-2 placeholder:italic"
        rows={1}
        name="text"
        id="text"
        placeholder="text"
        onChange={(e) => counter(e.target.value)}
      ></textarea>
      {result.nCharacter > 0 && (
        <p>
          Il testo selezionato contiene:
          <span className="font-bold text-violet-700 ml-1">
            {`${result.nCharacter} caratter${
              result.nCharacter > 1 ? "i" : "e"
            } / ${result.nWord} parol${result.nWord > 1 ? "e" : "a"}`}
          </span>
        </p>
      )}
    </>
  );
}
