import { useEffect, useState } from "react";

/* eslint-disable react/prop-types */
import {
  ProgressBarContainer,
  ProgressBarFill,
  SkillLabel,
  PercentageText,
  Colors,
} from "./BarraStatusStyled";

export default function BarraStatus(props) {
  const tamBarraCalc = Number((100 / props.baseCalc) * props.tamBarra).toFixed(
    0
  );

  const [corBarra, setCorBarra] = useState("#000");

  const { defaultColor, middleColor, highColor, darkText } = Colors;

  useEffect(() => {
    let newColor = defaultColor;
    if (tamBarraCalc >= 90) {
      newColor = highColor;
    } else if (tamBarraCalc >= 80) {
      newColor = middleColor;
    }
    setCorBarra(newColor);
  }, [tamBarraCalc, defaultColor, middleColor, highColor]);

  return (
    <>
      <SkillLabel>{props.texto}</SkillLabel>
      <ProgressBarContainer
        width={`${props.tamQuadro}%`}
        height={`${props.largQuadro}px`}
        corBack={props.corBack}
      >
        <ProgressBarFill calcWidth={`${tamBarraCalc}%`} color={corBarra}>
          {tamBarraCalc >= 20 && (
            <PercentageText>{tamBarraCalc}%</PercentageText>
          )}
        </ProgressBarFill>
        {tamBarraCalc < 20 && (
          <PercentageText
            style={{
              color: darkText,
              position: "absolute",
              right: 0,
              paddingRight: "10px",
            }}
          >
            {tamBarraCalc}%
          </PercentageText>
        )}
      </ProgressBarContainer>
    </>
  );
}
