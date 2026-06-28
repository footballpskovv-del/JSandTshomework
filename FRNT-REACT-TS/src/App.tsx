import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import RegisterForm from "./components/RegisterForm/RegisterForm";
import Slider from "./components/Slider/Slider";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <Slider />
        <RegisterForm />
      </main>
    </div>
  );
}

export default App;
