import { Outlet } from "react-router-dom"
import Header from "../../components/Header"
import Footer from "../../components/Footer"
import styled from "styled-components";

const MainContainer = styled.main`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    width: 100%;
    overflow: hidden;
`;

const Content = styled.div`
    flex: 1;
    padding-bottom: 60px;
    width: 100%;
    overflow-x: hidden;
    background-color: black;
    
    @media screen and (min-width: 768px) {
        padding-bottom: 0;
    }
`;

const Layout = () => {
    return (
        <MainContainer>
            <Header />
            <Content>
                <Outlet />
            </Content>
            <Footer />
        </MainContainer>
    )
}
export default Layout