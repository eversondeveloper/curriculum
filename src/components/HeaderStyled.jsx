import styled from "styled-components";

export const HeaderStyled = styled.div`
  background-color: #232323;
  color: #e2e2e2;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  .divmenu {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 50px;
    width: 90%;
  }

  .menu {
    display: flex;
  }

  .linkmenu:nth-child(-n + 2) {
    margin-right: 20px;
  }

  .linkmenu {
    text-decoration: none;
    font-weight: bold;
    color: rgb(226, 226, 226);
  }

  .linkmenu:hover {
    color: #c1c1c1;
  }

  .divredessociais {
    width: 15%;
  }

  .logoimage {
    width: 90%;
    display: flex;
    justify-content: space-between;
    align-items: end;
    height: 100%;
  }

  .divlogo {
    height: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
  }

  .divlogo a {
    text-decoration: none;
    font-weight: bold;
    color: rgb(226, 226, 226);
    font-size: 9vw;
  }

  .divlogo p {
    width: 70%;
  }

  .divimage {
    width: 45%;
    height: auto;
    display: flex;
    justify-content: end;
  }

  .fotoimagem {
    width: 100%;
    height: 100%;
  }

  @media (max-width: 900px) {
    .divredessociais{
      width: 30%;
    }
  }

  @media (max-width: 600px) {
    .header {
      background-color: #232323;
      color: #e2e2e2;
      width: 100%;
      height: 100vh;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
    }

    .divmenu {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 10vh;
      width: 90%;
    }

    .menu {
      display: flex;
    }

    .linkmenu {
      font-size: 17pt;
    }

    .linkmenu:hover {
      color: #c1c1c1;
    }

    .divredessociais {
      width: 40%;
    }

    .logoimage {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      height: 100%;
    }

    .divlogo {
      display: flex;
      justify-content: center;
      width: 100%;
      align-items: center;
      flex-direction: column;
    }

    .divlogo a {
      text-decoration: none;
      font-weight: bold;
      color: #e2e2e2;
      font-size: 9vw;
      display: flex;
      justify-content: center;
      text-align: center;
    }

    .divlogo p {
      width: 50%;
      text-align: center;
    }

    .divimage {
      width: 50%;
      height: auto;
      display: flex;
      justify-content: center;
    }
  }

  @media (max-width: 500px) {
    
    .divredessociais {
      width: 60%;
    }

    .divlogo a {
      font-size: 15vw;
    }

    .divimage {
      width: 100%;
      height: auto;
      display: flex;
      justify-content: center;
    }
  }
`;
