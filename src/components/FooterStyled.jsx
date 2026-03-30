import styled from "styled-components";

export const FooterContainer = styled.footer`
  background-color: ${props => props.theme.colors.border}; /* Um tom quase branco/cinza muito suave */
  color: ${props => props.theme.colors.primary};
  padding: 60px 10% 30px 10%;
  border-top: 1px solid rgba(0,0,0,0.05);

  .footer-content {
    display: grid;
    grid-template-columns: 2fr 1fr 1fr;
    gap: 40px;
    margin-bottom: 50px;
  }

  .brand-section {
    h3 {
      font-size: 1.5rem;
      margin-bottom: 15px;
      color: ${props => props.theme.colors.primary};
    }
    p {
      max-width: 300px;
      font-size: 0.9rem;
      opacity: 0.8;
    }
  }

  .nav-section {
    h4 {
      margin-bottom: 20px;
      text-transform: uppercase;
      font-size: 0.8rem;
      letter-spacing: 1px;
    }
    ul {
      display: flex;
      flex-direction: column;
      gap: 10px;
      font-size: 0.9rem;
    }
    a:hover {
      color: ${props => props.theme.colors.info};
      padding-left: 5px;
    }
  }

  .bottom-bar {
    padding-top: 30px;
    border-top: 1px solid rgba(0,0,0,0.1);
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 0.8rem;
    opacity: 0.6;
  }

  @media (max-width: 768px) {
    padding: 40px 5%;
    .footer-content {
      grid-template-columns: 1fr;
      text-align: center;
    }
    .brand-section p {
      margin: 0 auto;
    }
    .bottom-bar {
      flex-direction: column;
      gap: 15px;
    }
  }
`;