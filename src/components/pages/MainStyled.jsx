import styled from "styled-components";

export const MainStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  font-size: 16px; /* Tamanho de texto padrão */
  line-height: 1.6; /* Melhor legibilidade */
  color: #333; /* Cor de texto mais moderna */

  .quemsou {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .divquemsou {
    width: 90%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 10vh;
    margin-bottom: 10vh;
  }

  .quemsouperg {
    font-size: 2.5rem; /* Tamanho maior para títulos */
    font-weight: bold;
    color: #232323; /* Cor mais destacada */
    margin-bottom: 1.5rem; /* Espaçamento abaixo do título */
  }

  .quemsoutexto {
    width: 75%;
    font-size: 1rem; /* Tamanho do texto para parágrafos */
    color: #555; /* Cor de texto para melhor contraste */
    line-height: 1.8; /* Mais espaçamento entre linhas */
  }

  .cards {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .divcards {
    width: 90%;
    margin-top: 10vh;
    margin-bottom: 10vh;
    display: flex;
    justify-content: space-between;
    gap: 2rem; /* Espaçamento entre os cards */
  }

  .card1 {
    width: 30%;
    height: auto;
    background-color: #f9f9f9; /* Cor de fundo moderna */
    padding: 20px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1); /* Sombra suave para destaque */
    border-radius: 8px;
  }

  .cardsect1 {
    font-size: 1.5rem;
    font-weight: bold;
    color: #333;
    margin-bottom: 10px;
  }

  .cardsect2 {
    font-size: 1.2rem;
    font-weight: 600;
    border-top: solid #ddd 1px;
    border-bottom: solid #ddd 1px;
    padding-top: 1rem;
    padding-bottom: 1rem;
    margin-bottom: 1rem;
    color: #666;
  }

  .cardsect3 {
    font-size: 1rem;
    line-height: 1.6;
    color: #666;
  }

  .divprincipal {
    padding-top: 10vh;
    padding-bottom: 10vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .divprincipalint {
    width: 90%;
    display: flex;
    justify-content: space-between;
  }

  .divhabilidades {
    width: 48%;
  }

  .divaside {
    width: 48%;
  }

  .divaside p {
    margin-top: 5vh;
    font-size: 1rem;
    color: #555;
    line-height: 1.8;
  }

  .divstatus {
    width: 100%;
    margin-top: 3vh;
    border-radius: 5px;
  }

  @media (max-width: 768px) {
    .divquemsou {
      width: 100%;
      flex-direction: column;
      align-items: center;
      margin-top: 5vh;
      margin-bottom: 5vh;
    }

    .quemsouperg {
      font-size: 2rem;
      text-align: center;
    }

    .quemsoutexto {
      width: 100%;
      font-size: 1rem;
      text-align: center;
    }

    .divcards {
      width: 100%;
      flex-direction: column;
      gap: 1.5rem;
    }

    .card1 {
      width: 90%;
    }

    .divprincipalint {
      flex-direction: column;
      width: 100%;
    }

    .divhabilidades,
    .divaside {
      width: 100%;
      margin-bottom: 3rem;
    }
  }

  @media (max-width: 480px) {
    .quemsouperg {
      font-size: 1.8rem;
    }

    .quemsoutexto {
      font-size: 0.9rem;
    }

    .cardsect1 {
      font-size: 1.3rem;
    }

    .cardsect2 {
      font-size: 1rem;
    }

    .cardsect3 {
      font-size: 0.9rem;
    }

    .divaside p {
      font-size: 0.9rem;
    }
  }
`;
