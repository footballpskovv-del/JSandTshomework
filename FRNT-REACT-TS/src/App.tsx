import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import RegisterForm from "./components/RegisterForm/RegisterForm";
import Slider from "./components/Slider/Slider";
import Boards from "./Pages/Boards";
import "./App.css";
import ReduxPage from "./Pages/ReduxPage";

function HomePage() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  function openForm() {
    setIsFormOpen(true);

    setTimeout(() => {
      document
        .getElementById("registration")
        ?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  }

  return (
    <>
      <Header />
      <main>
        <Hero onOpenForm={openForm} />
        <Slider />
        {isFormOpen && <RegisterForm />}
      </main>
    </>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/boards" element={<Boards />} />
      <Route path="/redux" element={<ReduxPage />} />
    </Routes>
  );
}

export default App;
