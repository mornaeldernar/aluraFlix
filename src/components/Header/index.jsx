import styled from "styled-components"
import ItemNavegacion from "../ItemNavegacion"
import { useLocation } from "react-router-dom";

const HeaderEstilizado = styled.header`

display: flex;
justify-content: space-between;
align-items: center;
width: 100%;
max-width: 100vw;
padding: 10px 20px;
box-sizing: border-box;
background-color: #262626;
position: fixed;
bottom: 0;
left: 0;
right: 0;
z-index: 1000;
@media screen and (min-width: 768px){
    position: static;
    bottom: auto;
}


.logo{
    width: 168px;
    height: 40px;
    display: none;
    
@media screen and (min-width: 768px){
    display: block;
}
}
`;
const NavContainer = styled.div`
    display:flex;
    gap: 20px;
    width: 100%;
    justify-content: space-around;
    @media screen and (min-width: 768px) {
        justify-content: flex-end;
    }
`;


const Header = () => {
    const location = useLocation();
    return (
        <HeaderEstilizado>
            <img src="/img/Logo.svg" alt="Logo Aluraflix" className="logo" />
            <NavContainer>
                <ItemNavegacion to="/" activo={location.pathname === '/'}><span>Home</span></ItemNavegacion>
                <ItemNavegacion to="/nuevo"activo={location.pathname === '/nuevo'}><span>Nuevo Video</span></ItemNavegacion>
            </NavContainer>
        </HeaderEstilizado>
    )
}
export default Header