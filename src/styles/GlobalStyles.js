import { createGlobalStyle } from "styled-components";

// Definição do Tema (Engenheiros usam temas para facilitar mudanças globais)
export const theme = {
  colors: {
    primary: "#232323",    // Seu grafite escuro
    secondary: "#e2e2e2",  // Seu cinza claro
    accent: "#707070",     // Realce
    background: "#FFFFFF",
    success: "#28A745",
    warning: "#FFC107",
    info: "#007BFF",
    textLight: "#FFFFFF",
    textDark: "#232323",
    border: "#F0F0F0"
  },
  fonts: {
    main: "'Inter', 'Arial', sans-serif", // 'Inter' é mais moderna para Tech
  },
  transition: "all 0.3s ease-in-out"
};

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.primary};
    font-family: ${props => props.theme.fonts.main};
    line-height: 1.6;
    overflow-x: hidden;
  }

  a {
    text-decoration: none;
    color: inherit;
    transition: ${props => props.theme.transition};
  }

  ul {
    list-style: none;
  }

  h1, h2, h3 {
    font-weight: 700;
  }

  /* Scrollbar customizada para um look mais Pro */
  ::-webkit-scrollbar {
    width: 8px;
  }
  ::-webkit-scrollbar-track {
    background: ${props => props.theme.colors.secondary};
  }
  ::-webkit-scrollbar-thumb {
    background: ${props => props.theme.colors.primary};
    border-radius: 10px;
  }
`;