import styled from "styled-components";


const corPrimaria = "#232323"; 
const corSecundaria = "#FFFFFF"; 
const corRealce = "#707070"; 
const cinzaClaro = "#F0F0F0"; 

export const MainStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  font-family: 'Arial', sans-serif; 
  font-size: 16px; 
  line-height: 1.6; 
  color: ${corPrimaria};
  background-color: ${corSecundaria};

  
  .quemsou {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10vh 0;
  }

  .divquemsou {
    width: 80%; 
    max-width: 1200px;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
  }

  .quemsouperg {
    font-size: 2.5rem; 
    font-weight: 700;
    color: ${corRealce};
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

  
  .cards {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${cinzaClaro}; 
    box-shadow: none; 
    padding: 10vh 0;
  }

  .divcards {
    width: 80%;
    max-width: 1200px;
    display: flex;
    justify-content: space-between;
    gap: 30px; 
  }

  .card1 {
    width: 33.33%; 
    background-color: ${corSecundaria};
    padding: 30px;
    border-radius: 10px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1); 
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
    color: ${corPrimaria};
    margin: 0 0 10px 0;
  }

  .cardsect2 {
    font-size: 1rem;
    color: ${corRealce};
    border-top: 1px solid ${cinzaClaro};
    border-bottom: 1px solid ${cinzaClaro};
    padding: 15px 0;
    margin-bottom: 20px;
  }

  .cardsect3 {
    font-size: 1rem;
    flex-grow: 1; 
    display: block; 
  }

  
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
    flex-direction: row; 
    justify-content: space-between;
    gap: 50px;
  }
  
  .h1 {
      font-size: 2rem;
      font-weight: 700;
      color: ${corPrimaria};
      margin-bottom: 30px;
  }

  .divhabilidades {
    width: 50%;
    
  }

  .divaside {
    width: 50%;
    padding-left: 30px; 
    border-left: 1px solid ${cinzaClaro}; 
    
    strong {
        color: ${corPrimaria};
        font-size: 1.1rem;
        display: block;
        margin-top: 25px;
        margin-bottom: 5px;
    }
    
    p {
        margin-top: 15px; 
        font-size: 1rem;
    }
  }

  .divstatus {
    width: 100%;
    margin-top: 15px; 
    border-radius: 5px;
  }

  
  @media (max-width: 992px) {
    .divprincipalint {
        flex-direction: column; 
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