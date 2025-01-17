import styled from "styled-components";
import Category from "../Category"
import { useEffect, useState } from "react";
const SectionEstilizada = styled.section`
    background-color: black;
    padding: 0px 0px 0px 0px;
    border: 1px solid green;
`;
const CategoriesContainer = () => {
    const [categorias, setCategorias] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3001/categorias')
            .then(res => res.json())
            .then(data => setCategorias(data))
            .catch(e => console.log(e));
    },[])
    return (
        <SectionEstilizada>
            {categorias.map(categoria => (
                <Category
                    key={categoria.id}
                    id={categoria.id}
                    titulo={categoria.nombre}
                    mainColor={categoria.color}
                    altColor="#f3f3f3" />
            ))}
        </SectionEstilizada>
    )
}
export default CategoriesContainer