import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AppStyled } from "./AppStyled";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/pages/Main";
import Contato from "./components/pages/Contato";

function App() {
  return (
    <AppStyled>
      <Router basename="/curriculum">
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/contato" element={<Contato />} />
        </Routes>
        <Footer />
      </Router>
    </AppStyled>
  );
}

export default App;
