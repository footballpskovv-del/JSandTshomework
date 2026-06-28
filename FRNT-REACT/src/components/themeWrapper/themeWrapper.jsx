import "./themeWrapper.css";

function ThemeWrapper({ theme, children }) {
  return <div className={theme === "light" ? "theme-light" : "theme-dark"}>{children}</div>;
}

export default ThemeWrapper;