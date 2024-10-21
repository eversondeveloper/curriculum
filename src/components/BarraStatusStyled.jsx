import styled from "styled-components";

export const BarraStatusStyled = styled.div`
  /* Estilo do quadro principal */
  width: ${({ tamQuadro }) => tamQuadro || 100}%;
  height: ${({ largQuadro }) => largQuadro || 10}%;
  background-color: ${({ corBack }) => corBack || "#e2e2e2"};
  border-radius: 10px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  position: relative;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1); /* Sombras sutis para um visual mais moderno */
  margin-bottom: 10px;
  
  /* Texto dentro da barra */
  .barra-texto {
    position: absolute;
    left: 10px;
    color: ${({ corTexto }) => corTexto || "#000"};
    font-size: ${({ tamTexto }) => tamTexto || "14px"};
    font-weight: bold;
    z-index: 1;
    pointer-events: none; /* Impede que o texto interfira nos cliques */
  }

  /* Barra de progresso */
  .barra-preenchimento {
    height: 100%;
    background-color: ${({ corBarra }) => corBarra || "#4caf50"};
    width: ${({ animatedWidth }) => animatedWidth || 0}%;
    transition: width 0.5s ease-in-out; /* Animação suave ao preencher */
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding-right: 10px; /* Espaço para o percentual aparecer */
    box-shadow: inset 0 2px 5px rgba(0, 0, 0, 0.2); /* Sombras internas sutis */
  }

  /* Texto percentual dentro da barra */
  .barra-preenchimento span {
    color: ${({ corTexto }) => corTexto || "#fff"};
    font-size: ${({ tamTexto }) => tamTexto || "14px"};
    font-weight: bold;
  }
`;
