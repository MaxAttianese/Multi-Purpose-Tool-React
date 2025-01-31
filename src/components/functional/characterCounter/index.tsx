import { useState } from "react";

export function CharacterCounter() {
  const [characterNumber, setCharacterNumber] = useState<number>(0);
  const [wordNumber, setWordNumber] = useState<number>(0);

  const counter = (text: string) => {
    const result = text.replaceAll(/(?:\r\n|\r|\n){1,}/g, " ");
    setCharacterNumber(result.replaceAll(" ", "").length);
    setWordNumber(result.split(" ").length);
  };

  return (
    <>
      <textarea
        className="border rounded w-full p-1"
        rows={1}
        name="text"
        id="text"
        onChange={(e) => counter(e.target.value)}
      ></textarea>
      {characterNumber > 0 && (
        <p>
          Il testo selezionato contiene:
          <span className="font-bold text-violet-700">{characterNumber}</span>
          caratteri
        </p>
      )}
      {wordNumber > 0 && (
        <p>
          Il testo selezionato contiene:{" "}
          <span className="font-bold text-violet-700">{wordNumber}</span> parole
        </p>
      )}
    </>
  );
}
