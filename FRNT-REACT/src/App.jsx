import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import WorksPage from "./pages/worksPage";
import BlogPage from "./pages/blogPage";
import BlogPostPage from "./pages/blogPostPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/works" element={<WorksPage />} />
      <Route path="/blog" element={<BlogPage />} />
      <Route path="/blog/:id" element={<BlogPostPage />} />
    </Routes>
  );
}

export default App;
