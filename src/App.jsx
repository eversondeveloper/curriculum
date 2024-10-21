import { Routes, Route } from "react-router-dom";
import { AppStyled } from "./AppStyled";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/pages/Main";
import Contato from "./components/pages/Contato";

function App() {
  return (
    <AppStyled>
      <Header />
      <Routes>
        <Route path="/curriculum" element={<Main />} />
        <Route path="/contato" element={<Contato />} />
      </Routes>
      <Footer />
    </AppStyled>
  );
}

export default App;
