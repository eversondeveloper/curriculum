import styled from "styled-components";

// Definição da Paleta de Cores
const primaryColor = "#232323"; // Preto/cinza escuro para texto e fundo do header/footer
const secondaryColor = "#FFFFFF"; // Branco puro para a maioria dos fundos
const accentColor = "#007BFF"; // Azul moderno para destaques
const lightGrey = "#F0F0F0"; // Cinza claro para seções de fundo

export const MainStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  font-family: 'Arial', sans-serif; /* Use a fonte real do seu projeto */
  font-size: 16px; /* Ajuste para pixels para melhor controle */
  line-height: 1.6; /* Melhor legibilidade */
  color: ${primaryColor};
  background-color: ${secondaryColor};

  /* SEÇÃO QUEM SOU? */
  .quemsou {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10vh 0;
  }

  .divquemsou {
    width: 80%; /* Reduzido o max-width para melhor leitura */
    max-width: 1200px;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
  }

  .quemsouperg {
    font-size: 2.5rem; /* Ajuste para rems */
    font-weight: 700;
    color: ${accentColor};
    width: 25%;
    min-width: 150px;
    margin-right: 5%;
  }

  .quemsoutexto {
    width: 70%;
    font-size: 1.1rem;
    
    p {
      margin-bottom: 1.5em;
    }
  }

  /* SEÇÃO CARDS (EXPERIÊNCIA) */
  .cards {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${lightGrey}; /* Fundo cinza claro para contraste */
    box-shadow: none; /* Removendo o box-shadow interno, use um estilo mais sutil */
    padding: 10vh 0;
  }

  .divcards {
    width: 80%;
    max-width: 1200px;
    display: flex;
    justify-content: space-between;
    gap: 30px; /* Espaço entre os cards */
  }

  .card1 {
    width: 33.33%; /* Usando percentual para 3 colunas */
    background-color: ${secondaryColor};
    padding: 30px;
    border-radius: 10px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1); /* Sombra suave */
    transition: transform 0.3s ease-in-out;
    display: flex;
    flex-direction: column;
    
    &:hover {
        transform: translateY(-5px);
    }
  }

  .cardsect1 {
    font-size: 1.5rem;
    font-weight: 700;
    color: ${primaryColor};
    margin: 0 0 10px 0;
  }

  .cardsect2 {
    font-size: 1rem;
    color: ${accentColor};
    border-top: 1px solid ${lightGrey};
    border-bottom: 1px solid ${lightGrey};
    padding: 15px 0;
    margin-bottom: 20px;
  }

  .cardsect3 {
    font-size: 1rem;
    flex-grow: 1; /* Garante que o texto preencha o espaço */
    display: block; /* Remove o display: flex desnecessário aqui */
  }

  /* SEÇÃO PRINCIPAL (HABILIDADES E VOLUNTÁRIO) */
  .divprincipal {
    width: 100%;
    padding: 10vh 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .divprincipalint {
    width: 80%;
    max-width: 1200px;
    display: flex;
    flex-direction: row; /* Alterado para duas colunas no desktop */
    justify-content: space-between;
    gap: 50px;
  }
  
  .h1 {
      font-size: 2rem;
      font-weight: 700;
      color: ${primaryColor};
      margin-bottom: 30px;
  }

  .divhabilidades {
    width: 50%;
    
  }

  .divaside {
    width: 50%;
    padding-left: 30px; /* Espaço para separar visualmente */
    border-left: 1px solid ${lightGrey}; /* Linha de separação */
    
    strong {
        color: ${primaryColor};
        font-size: 1.1rem;
        display: block;
        margin-top: 25px;
        margin-bottom: 5px;
    }
    
    p {
        margin-top: 15px; /* Ajuste para não ter tanto espaço entre parágrafos de voluntariado */
        font-size: 1rem;
    }
  }

  .divstatus {
    width: 100%;
    margin-top: 15px; /* Reduzido a margem para um visual mais compacto */
    border-radius: 5px;
  }

  /* MEDIA QUERIES (Responsividade) */
  @media (max-width: 992px) {
    .divprincipalint {
        flex-direction: column; /* Habilidades e Voluntário em coluna */
    }
    
    .divhabilidades, .divaside {
        width: 100%;
        padding-left: 0;
        border-left: none;
    }
    
    .divaside {
        margin-top: 5vh;
    }
  }

  @media (max-width: 800px) {
    .divquemsou {
      width: 90%;
      flex-direction: column;
      align-items: center;
    }

    .quemsouperg {
      width: 100%;
      text-align: center;
      margin-bottom: 5vh;
      margin-right: 0;
    }

    .quemsoutexto {
      width: 100%;
    }

    .divcards {
      width: 90%;
      flex-direction: column;
      gap: 30px;
    }

    .card1 {
      width: 100%;
    }
    
    .divprincipalint {
        width: 90%;
    }
  }
`;