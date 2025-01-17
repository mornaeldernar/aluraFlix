import styled from "styled-components"

const TituloCategoria = styled.div`
    background-color: ${props => props.$backgroundColor || '#6BD1FF'};
    color:${props => props.$color || '#f3f3f3'};
    padding: 10px 20px;
    border-radius: 5px;
    display: inline-block;
    font-weight: bold;
    width:240px;
    text-align: center;
    align-items: center;
    justify-content: center;
    text-transform: uppercase;
    margin:4px 0;
`
export default TituloCategoria