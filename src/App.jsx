import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
// Se o erro persistir, verifique se o arquivo se chama GlobalStyles.js ou GlobalStyles.jsx
import { GlobalStyles, theme } from "./styles/GlobalStyles";

// Importação de Componentes de Layout
import Footer from "./components/Footer";
import Header from "./components/Header";

// Importação de Páginas
import Main from "./components/pages/Main";
import Contato from "./components/pages/Contato";

/**
 * Componente principal da aplicação.
 * Aqui centralizamos o Tema Global e a estrutura de Roteamento.
 */
function App() {
  return (
    <ThemeProvider theme={theme}>
      {/* GlobalStyles reseta o CSS e aplica as fontes/cores do tema em todo o body */}
      <GlobalStyles />
      
      <div className="app-container">
        <Header />
        
        <main role="main">
          <Routes>
            <Route path="/curriculum" element={<Main />} />
            <Route path="/contato" element={<Contato />} />
            {/* Rota padrão para a home ser o seu currículo */}
            <Route path="/" element={<Main />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;