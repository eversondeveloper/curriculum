import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  flex-direction: column;
  background-color: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.secondary};
  padding: 40px 10% 60px 10%;
  clip-path: polygon(0 0, 100% 0, 100% 90%, 0% 100%); /* Um corte diagonal moderno */

  @media (max-width: 768px) {
    padding: 30px 5% 50px 5%;
    text-align: center;
  }
`;

export const TopBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 50px;

  .nav-links {
    display: flex;
    gap: 20px;
    font-weight: 500;
    font-size: 0.9rem;
    text-transform: uppercase;
    letter-spacing: 1px;

    a:hover {
      color: ${props => props.theme.colors.info};
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 20px;
  }
`;

export const HeroContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 40px;

  .text-content {
    flex: 1;
    
    h1 {
      font-size: 3.5rem;
      line-height: 1;
      margin-bottom: 20px;
      color: #fff;
      
      span {
        display: block;
        color: ${props => props.theme.colors.secondary};
        opacity: 0.8;
      }
    }

    p {
      font-size: 1.2rem;
      max-width: 500px;
      border-left: 3px solid ${props => props.theme.colors.info};
      padding-left: 20px;
      font-style: italic;
      color: ${props => props.theme.colors.secondary};
    }
  }

  .image-container {
    flex-shrink: 0;
    
    img {
      width: 250px;
      height: 250px;
      border-radius: 50%;
      object-fit: cover;
      border: 5px solid rgba(255, 255, 255, 0.1);
      box-shadow: 0 10px 30px rgba(0,0,0,0.3);
      transition: ${props => props.theme.transition};

      &:hover {
        transform: scale(1.05);
        border-color: ${props => props.theme.colors.info};
      }
    }
  }

  @media (max-width: 992px) {
    h1 { font-size: 2.5rem !important; }
  }

  @media (max-width: 768px) {
    flex-direction: column-reverse;
    
    .text-content p {
      margin: 0 auto;
      border-left: none;
      border-top: 3px solid ${props => props.theme.colors.info};
      padding: 20px 0 0 0;
    }
    
    img {
      width: 180px !important;
      height: 180px !important;
    }
  }
`;