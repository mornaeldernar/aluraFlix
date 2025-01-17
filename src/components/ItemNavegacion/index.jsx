import { Link } from "react-router-dom"
import styled from "styled-components"

const ItemNavegacion = styled(Link)`
    color: ${props => (props.activo ? '#2271D1' : 'white')};
    border: 2px solid ${props => (props.activo ? '#2271D1' : 'white')};
    border-radius: 5px; 
    text-decoration: none;
    display: flex;
    align-items: center;
    gap: 5px;
    padding: 5px 10px;

    &:hover {
        color: #6bd1ff;
        border-color:#6bd1ff;
    }

    @media screen and (min-width: 768px) {
        gap: 10px;
    }

    @media screen and (max-width: 767px) {
        span {
            display: ${props => (props.activo ? 'inline' : 'none')};
        }
    }
`

export default ItemNavegacion