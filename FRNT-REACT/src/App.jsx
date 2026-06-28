import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/home";
import WorksPage from "./pages/worksPage";
import BlogPage from "./pages/blogPage";
import BlogPostPage from "./pages/blogPostPage";

import ThemeWrapper from "./components/themeWrapper/themeWrapper";
import { ThemeContext } from "./context/themeContext";

function App() {
  const [theme, setTheme] = useState("light");

  function toggleTheme() {
    setTheme((currentTheme) => (currentTheme === "light" ? "dark" : "light"));
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <ThemeWrapper theme={theme}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/works" element={<WorksPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:id" element={<BlogPostPage />} />
        </Routes>
      </ThemeWrapper>
    </ThemeContext.Provider>
  );
}

export default App;
