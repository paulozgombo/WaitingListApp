import styled from "styled-components";

export const Wrapper = styled.div`

height: 100vh;
display: flex;
justify-content: center;
align-items: center;

.container {
    width: 450px;
    height: 250px;
    border-radius: 10px;
    padding: 20px;
    background-color: white;
    box-shadow: 0px 4px 9px rgba(0, 0, 0, 0.1);
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    
    &_content {

        display: flex;
        flex-direction: column;
        gap: 15px;

        h1 {
            color: #4B0082;
        }

        .button_active {

            padding: 8px 12px;
            border: none;
            border-radius: 10px;
            background-color: red;
            color: white;
            font-size: 1rem;
            font-weight: bold;
            cursor: pointer;

        }

    }
}

`;