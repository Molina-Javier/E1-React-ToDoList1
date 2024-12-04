import styled from "styled-components";

export const ListContainer = styled.div`
display: flex;
width: 500px;
justify-content: space-between;
align-items: center;
padding: 10px 20px;
border-bottom: 1px solid #ddd;

@media (max-width: 768px) {
  width: 80%;
};
`;

export const ButtonDelete = styled.button`
background-color: #ff4d4f;
padding: 5px 15px;
font-size: 16px;
color: white;
border: none;
border-radius: 5px;
cursor: pointer;
`;

export const ButtonDeleteAll = styled.button`
background-color: #ff4d4f;
padding: 10px 20px;
font-size: 14px;
color: white;
border: none;
border-radius: 5px;
cursor: pointer;
margin-top: 20px;

`;