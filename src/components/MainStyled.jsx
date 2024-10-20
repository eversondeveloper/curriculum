import styled from "styled-components";

export const MainStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  font-size: 15pt;
  line-height: 20pt;
  
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
    font-size: 30pt;
    font-weight: bold;
  }

  .quemsoutexto {
    width: 75%;
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
  }

  .card1 {
    width: 30%;
    height: 90%;
  }

  .cardsect1 {
    height: 20%;
    display: flex;
    align-items: center;
    font-weight: bold;
    margin-top: 3vh;
    margin-bottom: 3vh;
  }

  .cardsect2 {
    height: 15%;
    display: flex;
    align-items: center;
    border-top: solid #000000 1px;
    border-bottom: solid #000000 1px;
    padding-top: 3vh;
    padding-bottom: 3vh;
  }

  .cardsect3 {
    height: 65%;
    display: flex;
    align-items: center;
    margin-top: 5vh;
    margin-bottom: 5vh;
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
  }

  .divstatus {
    width: 100%;
    margin-top: 3vh;
    border-radius: 5px;
  }

  @media (max-width: 600px) {
    .quemsou {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .divquemsou {
      width: 80%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
    }

    .quemsouperg {
      font-size: 30pt;
      font-weight: bold;
      width: 100%;
      margin-bottom: 5vh;
      text-align: center;
    }

    .quemsoutexto {
      width: 100%;
    }

    .cards {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: #e2e2e2;
    }

    .divcards {
      width: 80%;
      margin-top: 10vh;
      margin-bottom: 10vh;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
    }

    .card1 {
      width: 100%;
      height: 90%;
    }

    .cardsect1 {
      height: 20%;
      display: flex;
      align-items: center;
      font-weight: bold;
      margin-top: 3vh;
      margin-bottom: 3vh;
    }

    .cardsect2 {
      height: 15%;
      display: flex;
      align-items: center;
      border-top: solid #000000 1px;
      border-bottom: solid #000000 1px;
      padding-top: 3vh;
      padding-bottom: 3vh;
    }

    .cardsect3 {
      height: 65%;
      display: flex;
      align-items: center;
      margin-top: 5vh;
      margin-bottom: 5vh;
    }

    .divprincipal {
      padding-top: 10vh;
      padding-bottom: 10vh;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .divprincipalint {
      width: 80%;
      display: flex;
      justify-content: space-between;
      flex-direction: column;
    }

    .divhabilidades {
      width: 100%;
      margin-bottom: 10vh;
    }

    .divaside {
      width: 100%;
    }

    .divaside p {
      margin-top: 5vh;
    }

    .divstatus {
      width: 100%;
      margin-top: 3vh;
      border-radius: 5px;
    }
  }
`;
