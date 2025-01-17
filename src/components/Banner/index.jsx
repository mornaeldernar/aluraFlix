
import styled from "styled-components"
import TituloCategoria from "../TituloCategoria"

const FigureEstilizada = styled.figure`
    background-image: ${props => `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${props.$backgroundImage})`};
    background-repeat: no-repeat;
    background-position: center;
    margin: 0px;
    max-width:100%;
    padding-bottom: 40px;
    background-size: cover;
    max-height:300px;
`
const Contenido = styled.div`
    width: 100%;
    margin: 0 auto;
    @media screen and (min-width:768px){
        width: 90%;
    }
    @media screen and (min-width: 1024px)
    {
        height: fit-content;
        display: flex;
        justify-content: space-between;
        padding: 5rem 0;
        width: 80%;
        max-width: 1440px;
    }
`
const BannerDescripcion = styled.div`
    flex:1;
    color: #fff;
    height: fit-content;
`
const BannerTitulo = styled.h1``
const BannerParrafo = styled.p``
const BannerVinculo = styled.a`
    display: none;
    @media screen and (min-width:1024px) {
        display: initial;
        width: 40%;
        height: auto;
        align-self: flex-end;
    }
`
const BannerImagen = styled.img`
    width:100%;
    border: 2px solid #6bd1ff;
    max-height: 100%;
    object-fit: cover;
    @media screen and (min-width: 768px) {
        max-height: 100%;
    }
    @media screen and (min-width: 1024px) {
        max-height: 100%;
    }
    border-radius: 15px;
`

const Banner = ({ backgroundImage }) => {
    return <FigureEstilizada $backgroundImage={backgroundImage}>
        <Contenido>
            <BannerDescripcion>
                <TituloCategoria>FRONT END</TituloCategoria>
                <BannerTitulo>Challenge React</BannerTitulo>
                <BannerParrafo>Este challenge es una forma de aprendizaje. Es un mecanismo donde podrás comprometerte en la resolución de un problema para poder aplicar todos los conocimientos adquiridos en la formación React.</BannerParrafo>
            </BannerDescripcion>
            <BannerVinculo>
                <BannerImagen src='https://ik.imagekit.io/noj6wnuqy/AluraFLix/tr:f-webp/video.2d556f83d1075ca96dc0.png?updatedAt=1683685012733'/>
            </BannerVinculo>
        </Contenido>
    </FigureEstilizada>
}
export default Banner