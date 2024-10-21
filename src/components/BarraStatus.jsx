/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { BarraStatusStyled } from "./BarraStatusStyled";

export default function BarraStatus(props) {
  const [animatedWidth, setAnimatedWidth] = useState(0);
  const tamBarraCalc = (100 / props.baseCalc) * props.tamBarra;

  useEffect(() => {
    // Animação para preenchimento suave da barra
    setTimeout(() => {
      setAnimatedWidth(tamBarraCalc);
    }, 300);
  }, [tamBarraCalc]);

  return (
    <BarraStatusStyled
      tamQuadro={props.tamQuadro}
      largQuadro={props.largQuadro}
      corBack={props.corBack}
      corBarra={props.corBarra}
      tamTexto={props.tamTexto}
      corTexto={props.corTexto}
      animatedWidth={animatedWidth}
    >
      <div className="barra-texto">{props.texto}</div>
      <div className="barra-preenchimento">
        <span>{tamBarraCalc}%</span>
      </div>
    </BarraStatusStyled>
  );
}
