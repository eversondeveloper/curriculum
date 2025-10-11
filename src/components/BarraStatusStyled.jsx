import styled from "styled-components";

const primaryColor = "#232323";
const middleColor = "#007BFF";
const highColor = "#28A745";

export const BarraStatusStyled = styled.div``;

export const ProgressBarContainer = styled.div`
  width: ${(props) => props.width || "100%"};
  height: ${(props) => props.height || "20px"};
  background-color: ${(props) => props.corBack || "#e2e2e2"};
  border-radius: 10px;
  overflow: hidden;
  position: relative;
  margin-top: 5px;
  box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.1);
`;

export const ProgressBarFill = styled.div`
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

export const SkillLabel = styled.div`
  font-weight: 600;
  font-size: 1rem;
  color: ${primaryColor};
  margin-bottom: 5px;
`;

export const PercentageText = styled.span`
  font-weight: bold;
  font-size: 0.7rem;
  color: #bcbcbc;
  padding-right: 10px;
  white-space: nowrap;
`;

export const Colors = {
  defaultColor: primaryColor,
  middleColor: middleColor,
  highColor: highColor,
  lightText: "#fff",
  darkText: primaryColor,
};
