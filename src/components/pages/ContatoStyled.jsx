import styled from "styled-components";

export const ContactContainer = styled.section`
  max-width: 800px;
  margin: 0 auto;
  padding: 80px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ContactCard = styled.div`
  background: #fff;
  width: 100%;
  padding: 50px;
  border-radius: 15px;
  border: 1px solid ${props => props.theme.colors.border};
  box-shadow: 0 10px 30px rgba(0,0,0,0.03);

  h1 {
    font-size: 2.2rem;
    margin-bottom: 10px;
    color: ${props => props.theme.colors.primary};
  }

  p {
    color: ${props => props.theme.colors.accent};
    margin-bottom: 40px;
  }

  @media (max-width: 768px) {
    padding: 30px 20px;
  }
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;

  .input-group {
    display: flex;
    flex-direction: column;
    gap: 8px;

    label {
      font-size: 0.9rem;
      font-weight: 600;
      color: ${props => props.theme.colors.primary};
    }

    input, textarea {
      padding: 12px 15px;
      border-radius: 8px;
      border: 2px solid ${props => props.theme.colors.border};
      font-family: inherit;
      font-size: 1rem;
      transition: ${props => props.theme.transition};

      &:focus {
        outline: none;
        border-color: ${props => props.theme.colors.info};
        background-color: rgba(0, 123, 255, 0.01);
      }
    }
  }

  button {
    margin-top: 10px;
    padding: 15px;
    background-color: ${props => props.theme.colors.primary};
    color: #fff;
    border: none;
    border-radius: 8px;
    font-weight: 700;
    font-size: 1rem;
    cursor: pointer;
    transition: ${props => props.theme.transition};

    &:hover {
      background-color: ${props => props.theme.colors.info};
      transform: translateY(-2px);
    }

    &:disabled {
      background-color: ${props => props.theme.colors.accent};
      cursor: not-allowed;
    }
  }
`;