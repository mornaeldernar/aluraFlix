import { Link } from "react-router-dom";
import styled from "styled-components";

const NotFoundContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #03122F;
    color: white;
    text-align: center;
    padding: 20px;
`;

const Title = styled.h1`
    font-size: 4rem;
    margin-bottom: 20px;
    color: #6BD1FF;
`;

const Message = styled.p`
    font-size: 1.5rem;
    margin-bottom: 20px;
`;

const HomeButton = styled(Link)`
    padding: 10px 20px;
    border: 2px solid #6BD1FF;
    border-radius: 5px;
    color: #6BD1FF;
    text-decoration: none;
    font-size: 1.2rem;

    &:hover {
        background-color: #6BD1FF;
        color: #03122F;
    }
`;

const NotFound = () => {
    return (
        <NotFoundContainer>
            <Title>404</Title>
            <Message>Lo sentimos, la página que buscas no existe.</Message>
            <HomeButton to="/">Volver al Inicio</HomeButton>
        </NotFoundContainer>
    );
}

export default NotFound;