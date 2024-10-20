import { Routes, Route } from "react-router-dom";
import { AppStyled } from "./AppStyled";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";

function App() {
  return (
    <AppStyled>
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
      <Header />
      <Main />
      <Footer />
    </AppStyled>
  );
}

export default App;
