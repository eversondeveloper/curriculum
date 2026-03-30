import styled, { keyframes } from "styled-components";

const fillAnimation = keyframes`
  from { width: 0; }
  to { width: ${props => props.percent}%; }
`;

export const SkillWrapper = styled.div`
  margin-bottom: 20px;
  width: 100%;
`;

export const SkillInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
  
  label {
    font-weight: 600;
    font-size: 0.95rem;
    color: ${props => props.theme.colors.primary};
  }

  span {
    font-size: 0.85rem;
    font-weight: 700;
    color: ${props => props.color || props.theme.colors.accent};
  }
`;

export const ProgressContainer = styled.div`
  width: 100%;
  height: 8px;
  background-color: ${props => props.theme.colors.secondary};
  border-radius: 10px;
  overflow: hidden;
`;

export const ProgressFill = styled.div`
  height: 100%;
  width: ${props => props.percent}%;
  background-color: ${props => props.color};
  border-radius: 10px;
  animation: ${fillAnimation} 1.5s ease-out forwards;
`;