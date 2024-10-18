/* eslint-disable react/prop-types */
export default function BarraStatus(props) {
  let tamBarraCalc = Number((100 / props.baseCalc) * props.tamBarra);

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
          backgroundColor: props.corBarra,
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
