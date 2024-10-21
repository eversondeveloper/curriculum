import styled from "styled-components";

export const HeaderStyled = styled.div`
  background-color: #232323;
  color: #e2e2e2;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  font-size: 15pt;
  line-height: 20pt;
  position: relative;

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
    line-height: normal;
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

  /* Ícone Mobile */
  .mobile-icon {
    display: none;
    color: #e2e2e2;
    cursor: pointer;
    position: absolute;
    top: 10px;
    right: 20px;
    z-index: 1000;
  }

  .mobile-menu {
    display: none;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    right: 0;
    width: 100%;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.95);
    transform: translateX(100%);
    transition: transform 0.4s ease-in-out;
    z-index: 999;
  }

  .mobile-menu.open {
    display: flex;
    transform: translateX(0);
  }

  .mobile-link {
    color: #e2e2e2;
    text-decoration: none;
    font-size: 20pt;
    margin-bottom: 20px;
    transition: color 0.3s ease;
  }

  .mobile-link:hover {
    color: #c1c1c1;
  }

  @media (max-width: 600px) {
    .divmenu {
      display: none;
    }

    .mobile-icon {
      display: block;
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
