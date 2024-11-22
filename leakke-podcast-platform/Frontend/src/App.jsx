import "./App.css";
import { Route, Routes } from "react-router-dom";
import { HomePage, AboutPage, ContactPage } from "Pages";
import { Header, Footer, ShamelessPlug  } from "Components";

function App() {
  return (
    <main className="App">
      <Header />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>

      <Footer />

      <ShamelessPlug /> 
    </main>
  );
}

export default App;
