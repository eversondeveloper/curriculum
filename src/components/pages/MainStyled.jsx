import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

export const MainContainer = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  padding: 60px 20px 100px 20px;
  animation: ${fadeIn} 0.8s ease-out;
`;

export const SectionTitle = styled.h2`
  font-size: 2.2rem;
  margin-bottom: 40px;
  color: ${props => props.theme.colors.primary};
  display: flex;
  align-items: center;
  gap: 15px;

  &::after {
    content: '';
    flex: 1;
    height: 1px;
    background: ${props => props.theme.colors.border};
  }

  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
`;

// --- SEÇÃO QUEM SOU ---
export const AboutSection = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 60px;
  margin-bottom: 100px;

  .bio {
    font-size: 1.1rem;
    color: ${props => props.theme.colors.accent};
    
    p { 
      margin-bottom: 20px;
      strong { color: ${props => props.theme.colors.primary}; }
    }
  }

  @media (max-width: 992px) {
    grid-template-columns: 1fr;
    gap: 30px;
  }
`;

// --- SEÇÃO DE PROJETOS ---
export const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 50px;
  margin-bottom: 100px;
`;

export const ProjectCard = styled.div`
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  background: #fff;
  border-radius: 16px;
  border: 1px solid ${props => props.theme.colors.border};
  overflow: hidden;
  transition: ${props => props.theme.transition};

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 40px rgba(0,0,0,0.05);
    border-color: ${props => props.theme.colors.info};
  }

  .project-image {
    background-color: ${props => props.theme.colors.secondary};
    min-height: 300px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      position: absolute;
    }
  }

  .project-info {
    padding: 40px;
    display: flex;
    flex-direction: column;

    h3 { 
      font-size: 1.8rem; 
      margin-bottom: 15px; 
      color: ${props => props.theme.colors.primary};
    }

    p { 
      font-size: 1rem; 
      line-height: 1.7;
      margin-bottom: 25px; 
      color: ${props => props.theme.colors.accent};
    }

    .tech-tags {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
      margin-top: auto;

      span {
        background: ${props => props.theme.colors.secondary};
        color: ${props => props.theme.colors.primary};
        padding: 6px 14px;
        border-radius: 6px;
        font-size: 0.75rem;
        font-weight: 700;
        text-transform: uppercase;
        letter-spacing: 0.5px;
      }
    }
  }

  @media (max-width: 992px) {
    grid-template-columns: 1fr;
    .project-image { min-height: 250px; }
    .project-info { padding: 30px; }
  }
`;

// --- SEÇÃO DE MICROCERTIFICAÇÕES (Elegante e Chamativa) ---
export const CertificacoesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 25px;
  margin-bottom: 100px;
  padding: 10px;
`;

export const CertificadoCard = styled.div`
  background: #fff;
  padding: 30px;
  border-radius: 16px;
  border: 1px solid ${props => props.theme.colors.border};
  position: relative;
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  display: flex;
  flex-direction: column;
  box-shadow: 0 4px 6px rgba(0,0,0,0.02);

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 4px;
    background: linear-gradient(90deg, ${props => props.theme.colors.info}, ${props => props.theme.colors.success});
    opacity: 0.7;
    transition: ${props => props.theme.transition};
  }

  &:hover {
    transform: translateY(-8px) scale(1.02);
    box-shadow: 0 20px 40px rgba(0,0,0,0.08);
    border-color: rgba(0,0,0,0.05);

    &::before {
      opacity: 1;
      height: 6px;
    }

    .icon-badge {
      transform: rotate(10deg) scale(1.1);
      color: ${props => props.theme.colors.info};
    }
  }

  .card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;

    .icon-badge {
      font-size: 1.8rem;
      transition: ${props => props.theme.transition};
    }

    .carga-horaria {
      font-size: 0.75rem;
      font-weight: 800;
      color: ${props => props.theme.colors.info};
      background: rgba(0, 123, 255, 0.1);
      padding: 5px 12px;
      border-radius: 20px;
      text-transform: uppercase;
      letter-spacing: 1px;
    }
  }

  h4 {
    font-size: 1.1rem;
    color: ${props => props.theme.colors.primary};
    margin-bottom: 15px;
    text-transform: uppercase;
    line-height: 1.4;
    font-weight: 700;
    flex-grow: 1;
  }

  .skills-cert {
    font-size: 0.85rem;
    color: ${props => props.theme.colors.accent};
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    border-top: 1px solid ${props => props.theme.colors.border};
    padding-top: 15px;
    margin-top: auto;

    span {
      display: flex;
      align-items: center;
      gap: 5px;
      
      &::before {
        content: '✓';
        color: ${props => props.theme.colors.success};
        font-weight: 900;
        font-size: 0.8rem;
      }
    }
  }
`;

// --- SEÇÃO DE EXPERIÊNCIA ---
export const GridCards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 25px;
  margin-bottom: 100px;
`;

export const ExperienceCard = styled.div`
  background: #fff;
  padding: 35px;
  border-radius: 12px;
  border: 1px solid ${props => props.theme.colors.border};
  position: relative;

  h3 { font-size: 1.3rem; margin-bottom: 8px; color: ${props => props.theme.colors.primary}; }
  
  .date { 
    color: ${props => props.theme.colors.info}; 
    font-weight: 800; 
    font-size: 0.8rem;
    text-transform: uppercase;
    display: block;
    margin-bottom: 15px;
  }

  p { 
    font-size: 0.95rem; 
    line-height: 1.6;
    color: ${props => props.theme.colors.accent};
  }
`;

// --- SEÇÃO DE HABILIDADES E IMPACTO SOCIAL ---
export const SkillsLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: start;

  .technical-skills {
    background: #fff;
  }

  .volunteer-info {
    background-color: ${props => props.theme.colors.secondary};
    padding: 40px;
    border-radius: 16px;
    
    p { 
      font-size: 0.95rem; 
      line-height: 1.8;
      margin-bottom: 25px; 
      color: ${props => props.theme.colors.accent}; 
    }

    h4 { 
      margin: 30px 0 10px 0; 
      color: ${props => props.theme.colors.primary};
      font-size: 1.1rem;
      border-bottom: 2px solid rgba(0,0,0,0.05);
      padding-bottom: 5px;
      display: inline-block;
    }
  }

  @media (max-width: 992px) {
    grid-template-columns: 1fr;
    gap: 40px;
  }
`;