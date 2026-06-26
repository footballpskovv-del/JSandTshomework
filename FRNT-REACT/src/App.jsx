import { Routes, Route } from "react-router-dom";

import Home from "./pages/home";
import WorksPage from "./pages/worksPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/works" element={<WorksPage />} />
    </Routes>
  );
}

export default App;
