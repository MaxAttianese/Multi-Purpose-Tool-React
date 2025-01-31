import { useState } from "react";

export function Theme() {
  const [themeActive, setThemeActive] = useState<string>();

  const changeTheme = (color: string) => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      tabs.forEach((tab) => {
        if (tab.url && tab.url.startsWith("chrome://")) {
          return;
        }
        chrome.scripting?.executeScript({
          target: { tabId: tab.id ?? 0 },
          func: (bgColor) => {
            if (bgColor === "dark") {
              document.body.style.backgroundColor = "black";
              document.body.style.setProperty(
                "background-color",
                "black",
                "important"
              );
              document.body.style.color = "white";
              document.body.style.setProperty("color", "white", "important");
            }

            if (bgColor === "light") {
              document.body.style.backgroundColor = "white";
              document.body.style.setProperty(
                "background-color",
                "white",
                "important"
              );
              document.body.style.color = "black";
              document.body.style.setProperty("color", "black", "important");
            }
          },
          args: [color],
        });
      });
    });
  };

  return (
    <menu className="flex justify-evenly items-center dark">
      <button
        className={`${
          themeActive === "dark" ? "bg-violet-400 text-white" : ""
        }`}
        onClick={() => {
          changeTheme("dark");
          setThemeActive("dark");
        }}
      >
        Dark
      </button>
      <button
        className={`${
          themeActive === "light" ? "bg-violet-400 text-white" : ""
        }`}
        onClick={() => {
          changeTheme("light");
          setThemeActive("light");
        }}
      >
        Light
      </button>
      <button
        className={`${
          themeActive === "system" ? "bg-violet-400 text-white" : ""
        }`}
        onClick={() => {
          changeTheme("system");
          setThemeActive("system");
        }}
      >
        System
      </button>
    </menu>
  );
}
