import { useEffect, useState } from "react";

/* eslint-disable react/prop-types */
export default function BarraStatus(props) {
  let tamBarraCalc = Number((100 / props.baseCalc) * props.tamBarra);
  const [corBarra, setCorBarra] = useState("#000");

  useEffect(() => {
    if (tamBarraCalc >= 80 && tamBarraCalc < 90) {
      setCorBarra("#252d68");
    } else if (tamBarraCalc >= 90) {
      setCorBarra("#244f3b");
    } else {
      setCorBarra(corBarra);
    }
  }, [tamBarraCalc, corBarra]);

  return (
    <div
      style={{
        height: `${props.largQuadro}%`,
        width: `${props.tamQuadro}%`,
        backgroundColor: props.corBack,
        color: props.corTexto,
      }}
    >
      <div
        style={{
          width: `${tamBarraCalc}%`,
          height: "100%",
          backgroundColor: corBarra,
          borderRadius: "5px",
          padding: "5px",
          fontWeight: "bold",
          fontSize: props.tamTexto,
        }}
      >
        {props.texto} {tamBarraCalc}%
      </div>
    </div>
  );
}
