/* eslint-disable react/prop-types */
import React from "react";
import { useTheme } from "styled-components";
import { 
  SkillWrapper, 
  SkillInfo, 
  ProgressContainer, 
  ProgressFill 
} from "./BarraStatusStyled";

/**
 * Componente de Skill Progress Profissional
 * @param {string} label - Nome da tecnologia/habilidade
 * @param {number} level - Nível de 0 a 100
 */
export default function BarraStatus({ label, level }) {
  const theme = useTheme();

  // Lógica de cores centralizada: Engenharia de Design
  const getColor = (value) => {
    if (value >= 90) return theme.colors.success;
    if (value >= 70) return theme.colors.info;
    if (value >= 40) return theme.colors.accent;
    return "#bdc3c7"; // Cor neutra para iniciante
  };

  const barColor = getColor(level);

  return (
    <SkillWrapper>
      <SkillInfo color={barColor}>
        <label>{label}</label>
        <span>{level}%</span>
      </SkillInfo>
      
      <ProgressContainer>
        <ProgressFill percent={level} color={barColor} />
      </ProgressContainer>
    </SkillWrapper>
  );
}