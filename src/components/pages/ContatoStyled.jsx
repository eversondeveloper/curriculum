import styled from "styled-components";

export const ContatoStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  background-color: #f9f9f9;
  min-height: 100vh;

  .container {
    background-color: #fff;
    padding: 30px;
    border-radius: 10px;
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
    width: 100%;
    max-width: 600px;
  }

  h1 {
    text-align: center;
    color: #232323;
    margin-bottom: 10px;
    font-size: 2rem;
  }

  p {
    text-align: center;
    margin-bottom: 20px;
    color: #555;
    font-size: 1rem;
  }

  form {
    display: flex;
    flex-direction: column;
  }

  label {
    margin-bottom: 8px;
    font-size: 1rem;
    color: #333;
  }

  input,
  textarea {
    margin-bottom: 20px;
    padding: 10px;
    border-radius: 5px;
    border: 1px solid #ccc;
    font-size: 1rem;
    transition: border 0.3s ease;
  }

  input:focus,
  textarea:focus {
    border: 1px solid #232323;
    outline: none;
  }

  textarea {
    resize: vertical;
  }

  .checkbox-group {
    margin-bottom: 20px;
  }

  .checkboxes {
    display: flex;
    gap: 10px;
  }

  .checkboxes label {
    display: flex;
    align-items: center;
  }

  button {
    padding: 12px;
    font-size: 1rem;
    background-color: #232323;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }

  button:hover {
    background-color: #444;
  }

  @media (max-width: 768px) {
    .container {
      padding: 20px;
    }

    h1 {
      font-size: 1.8rem;
    }

    p {
      font-size: 0.9rem;
    }

    button {
      font-size: 0.9rem;
    }
  }
`;
