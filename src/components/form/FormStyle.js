import styled from "styled-components";

export const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
padding: 50px;
margin:40px auto;
gap: 10px;
border-radius: 10px;
width:min(90%, 600px);

background: white;
box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);

@media (max-width: 768px) {
    width: 90%;
    margin: 10px auto;
};

`;

export const Title = styled.h2`
font-size: 1.5rem;
color: #333;
text-align: center;

@media (max-width: 768px) {
font-size: 1.25rem;
};
`;

export const Formulario = styled.form`
display: flex;
justify-content: space-between;
margin-bottom: 20px;

@media (max-width: 768px) {
flex-direction: column;
width: 80%;
gap:10px;
};

`;

export const Input = styled.input`
flex: 1;
padding: 8px 20px;
border: 1px solid #ddd;
border-radius: 5px;
font-size: 14px;
width: 350px;
margin-right: 10px;

&::placeholder {
color: #999;
};

@media (max-width: 768px) {
margin-right: 0;
width: 90%;
margin-bottom:10px ;
};


`;

export const Button = styled.button`
padding: 10px 20px;
border-radius: 5px;
border: none;
background: #1a73e8;
color: white;
font-size: 14px;
cursor: pointer;
transition: background 0.3s;

&:hover {
background: #1557b0;
};
@media (max-width: 768px) {
width: 90%;
};
`;

export const Error = styled.span`
color: red;
font-size: 14px;

`;



