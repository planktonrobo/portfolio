import { Switch } from "@headlessui/react";
import { useState, useEffect } from "react";
const DarkSwitch = () => {
  const [enabled, setEnabled] = useState(false);
  function handleDark() {
    setEnabled((enabled) => !enabled);
    if (enabled) {
      localStorage.theme = "light";
    } else {
      localStorage.theme = "dark";
    }
  }
  useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
      setEnabled(true);
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [enabled]);
  return (
    <Switch.Group className=" flex px-3">
      <div className="flex items-center">
        <Switch.Label className="pr-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
            />
          </svg>
        </Switch.Label>
        <Switch
          checked={enabled}
          onChange={() => handleDark()}
          className={`${
            enabled ? "bg-purple-300" : "bg-blue-100"
          } relative inline-flex items-center h-6 rounded-full w-11 transition-colors focus:outline-none`}
        >
          <span
            className={`${
              enabled ? "translate-x-6" : "translate-x-1"
            } inline-block w-4 h-4 transform bg-white rounded-full transition-transform`}
          />
        </Switch>
      </div>
    </Switch.Group>
  );
};

export default DarkSwitch;
