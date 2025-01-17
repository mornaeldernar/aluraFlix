import styled from "styled-components"
import Card from "../Card"
import TituloCategoria from "../TituloCategoria"
import { useEffect, useState } from "react"

const Categorias = styled.section`
    display: grid;
    gap: 20px;
    overflow-x: auto;
    padding: 10px 0;
    grid-auto-flow: column;
    grid-template-columns: repeat(1, minmax()(0,1fr));
    


    &::-webkit-scrollbar {
        height: 8px;
    }
    &::-webkit-scrollbar-track{
        background: transparent;
    }
    &::-webkit-scrollbar-thumb {
        background-color: ${props => props.$mainColor};
        border-radius: 10px;
    }
`
const Category = ({ id, titulo, mainColor, altColor }) => {
    const [videos, setVideos] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:3001/videos?categoria=${id}`)
            .then(response => response.json())
            .then(data => {
                setVideos(data);
                console.log(data);
            })
            .catch(error => console.error('Error fetching videos:', error));
    }, [id]);

    const handleDelete = (videoId) => {
        setVideos(videos.filter(video => video.id !== videoId));
    };

    const handleUpdate = (updatedVideo) => {
        setVideos(videos.map(video => (video.id === updatedVideo.id ? updatedVideo : video)));
    };

    return (
        <section>
            <TituloCategoria $backgroundColor={mainColor} $color={altColor} >{titulo}</TituloCategoria>
            <Categorias $mainColor={mainColor}>
                {videos.map(video => (
                    <Card
                        key={video.id}
                        mainColor={mainColor}
                        title={video.titulo}
                        image={video.link_imagen}
                        video={video.link_video}
                        description={video.descripcion}
                        onDelete={handleDelete}
                        onUpdate={handleUpdate}
                    />
                ))}
            </Categorias>
        </section>
    )
}
export default Category