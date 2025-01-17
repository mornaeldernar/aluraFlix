import styled from "styled-components";

const FooterEstilizado = styled.footer`
   @media screen and (max-width: 767px) {
        display: none;
    }
display:flex;
justify-content: center;
align-items: center;
    width: 100%;
    height: 125px;
    background-color: black;
    .logo{
        width: 168px;
        height: 40px;
    }
`

const Footer = () => {
    return <FooterEstilizado>
        <img src="/img/Logo.svg" alt="logo Aluraflix" className="logo"/>
    </FooterEstilizado>
}

export default Footer;