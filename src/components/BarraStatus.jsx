import { useEffect, useState } from "react";
import styled from "styled-components";

/* eslint-disable react/prop-types */

const ProgressBarContainer = styled.div`
  width: ${(props) => props.width || "100%"};
  height: ${(props) => props.height || "20px"};
  background-color: ${(props) => props.corBack || "#e2e2e2"};
  border-radius: 10px; 
  overflow: hidden; 
  position: relative;
  margin-top: 5px; 
  box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.1); 
`;

const ProgressBarFill = styled.div`
  width: ${(props) => props.calcWidth || "0%"};
  height: 100%;
  background-color: ${(props) => props.color};
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: flex-end; 
  transition: width 0.7s ease-out, background-color 0.3s ease-in; 
  position: relative;
`;

const SkillLabel = styled.div`
    font-weight: 600;
    font-size: 1rem;
    color: #232323;
    margin-bottom: 5px;
`;

const PercentageText = styled.span`
    font-weight: bold;
    font-size: 0.9rem;
    color: #fff;
    padding-right: 10px;
    white-space: nowrap;
`;


export default function BarraStatus(props) {
  const tamBarraCalc = Number((100 / props.baseCalc) * props.tamBarra).toFixed(0);

  
  const [corBarra, setCorBarra] = useState("#000");

  
  const defaultColor = "#232323";
  const middleColor = "#007BFF";
  const highColor = "#28A745";

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
      <SkillLabel>
        {props.texto}
      </SkillLabel>
      <ProgressBarContainer
        width={`${props.tamQuadro}%`}
        height={`${props.largQuadro}px`} 
        corBack={props.corBack}
      >
        <ProgressBarFill
          calcWidth={`${tamBarraCalc}%`}
          color={corBarra}
        >
          {tamBarraCalc >= 20 && (
            <PercentageText>{tamBarraCalc}%</PercentageText>
          )}
        </ProgressBarFill>
        {tamBarraCalc < 20 && (
            <PercentageText style={{ color: '#232323', position: 'absolute', right: 0, paddingRight: '10px' }}>
                {tamBarraCalc}%
            </PercentageText>
        )}
      </ProgressBarContainer>
    </>
  );
}