import styled from "styled-components";

export const FooterStyled = styled.div`
  background-color: #232323;
  color: rgb(226, 226, 226);
  height: 20vh;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  .footerint {
    width: 90%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }

  .diautor {
    width: 50%;
  }

  .divbtnfooter1 {
    width: 50%;
    display: flex;
    justify-content: end;
    align-items: center;
  }

  .divbtnfooter2 {
    width: 50%;
  }

  @media (max-width: 600px) {
    .footer {
      background-color: #232323;
      color: rgb(226, 226, 226);
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      padding-top: 5vh;
      padding-bottom: 5vh;
    }

    .footerint {
      flex-direction: column;
      width: 90%;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .divautor {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 2vh;
    }

    .divbtnfooter1 {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .divbtnfooter2 {
      width: 70%;
    }
  }

  @media (max-width: 400px) {

  }
`;
