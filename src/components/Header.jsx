import { useEffect } from "react";
import { useLocalStorageState } from "../hook/useLocalStorageState";

function Header() {
  const [theme, setTheme] = useLocalStorageState("blue");

  const switchTheme = (mode) => {
    setTheme((_) => mode);
  };

  useEffect(() => {
    console.log(theme);
    document.body.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <header className="flex items-center justify-between">
      <h1>calc</h1>

      <div className="flex items-end justify-between gap-7 text-sm uppercase tracking-wider">
        <p>theme</p>

        <div>
          <span className="flex items-center justify-between">
            <p>1</p>
            <p>2</p>
            <p>3</p>
          </span>

          <span className="theme-switcher-panel flex items-center justify-between rounded-[3rem] px-2 py-1 *:h-4 *:w-4 *:rounded-full">
            <button
              className={`theme-switcher ${theme !== "blue" ? "bg-transparent" : ""}`}
              onClick={() => switchTheme("blue")}
            ></button>
            <button
              className={`theme-switcher ${theme !== "light" ? "bg-transparent" : ""}`}
              onClick={() => switchTheme("light")}
            ></button>
            <button
              className={`theme-switcher ${theme !== "dark" ? "bg-transparent" : ""}`}
              onClick={() => switchTheme("dark")}
            ></button>
          </span>
        </div>
      </div>
    </header>
  );
}

export default Header;
