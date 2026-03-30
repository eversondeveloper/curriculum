import styled from "styled-components";

export const MainContainer = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  padding: 80px 20px;
`;

export const SectionTitle = styled.h2`
  font-size: 2.2rem;
  margin-bottom: 40px;
  position: relative;
  color: ${props => props.theme.colors.primary};

  &::after {
    content: '';
    display: block;
    width: 60px;
    height: 4px;
    background-color: ${props => props.theme.colors.info};
    margin-top: 10px;
  }
`;

export const AboutSection = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 60px;
  margin-bottom: 100px;

  .bio {
    font-size: 1.1rem;
    color: ${props => props.theme.colors.accent};
    p { margin-bottom: 20px; }
  }

  @media (max-width: 992px) {
    grid-template-columns: 1fr;
    gap: 30px;
  }
`;

export const GridCards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  margin-bottom: 100px;
`;

export const ExperienceCard = styled.div`
  background: #fff;
  padding: 40px;
  border-radius: 12px;
  border: 1px solid ${props => props.theme.colors.border};
  transition: ${props => props.theme.transition};

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 40px rgba(0,0,0,0.05);
    border-color: ${props => props.theme.colors.info};
  }

  h3 { font-size: 1.4rem; margin-bottom: 5px; }
  .date { 
    color: ${props => props.theme.colors.info}; 
    font-weight: 700; 
    font-size: 0.85rem;
    margin-bottom: 20px;
    display: block;
  }
  p { font-size: 0.95rem; opacity: 0.9; }
`;

export const SkillsLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;

  .volunteer-info {
    background-color: ${props => props.theme.colors.border};
    padding: 40px;
    border-radius: 12px;
    
    h4 { margin: 25px 0 10px 0; color: ${props => props.theme.colors.primary}; }
    p { font-size: 0.9rem; margin-bottom: 15px; opacity: 0.8; }
  }

  @media (max-width: 992px) {
    grid-template-columns: 1fr;
    gap: 40px;
  }
`;