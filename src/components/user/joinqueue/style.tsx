import styled from 'styled-components';

export const Wrapper = styled.div`

  z-index: -1;
  position: fixed;
  inset: 0; 
  display: flex;
  justify-content: center;
  align-items: center;    


  .modal {
    width: 100%;
    max-width: 450px;
    max-height: 80vh; 
    background: #fff;
    border-radius: 12px;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
    padding: 24px;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  h1 {
    margin-bottom: 15px;
    color: #4B0082;
    text-align: center;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  input {
    padding: 8px 12px;
    border: none;
    border-radius: 10px;
    font-size: 1rem;
    font-style: italic;
  }

  input:focus {
    outline: none;
    border-color: #4B0082;
    box-shadow: 0 0 0 2px rgba(79, 70, 229, 0.2);
  }

  button {
    padding: 8px 12px;
    border: none;
    border-radius: 10px;
    background-color: #4B0082;
    color: white;
    font-size: 1rem;
    font-weight: bold;
    cursor: pointer;
  }

  @keyframes animate-spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.animate-spin {
  animation: slow-spin 3.5s linear infinite;
}

`;
