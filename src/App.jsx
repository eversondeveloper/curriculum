import { AppStyled } from "./AppStyled";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main"

function App() {
  return (
    <AppStyled>
      <Header />
      <Main />
      <Footer />
    </AppStyled>
  );
}

export default App;
