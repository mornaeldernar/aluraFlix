import styled from "styled-components";
import Modal from "../Modal";
import { Link } from "react-router-dom";
import { useState } from "react";

const ContenedorEstilizado = styled.div`
    margin: 10px;
    width: 282px;
    border-radius: 10px;
    border: ${props => `3px solid ${props.$color}`};
    overflow:hidden; 
`
const LinkEstilizado = styled(Link)`
    display: block;
    width: 100%;
    border: none;
    padding: 0;
    margin: 0;
`;
const ImagenEstilizada = styled.img`
    width: 100%;
    border:none;
    object-fit: cover;
`
const PieImagen = styled.div`
color:white;
width: 100%;
display: flex;
flex-direction: row;
justify-content: space-around;
align-items: center;
padding:15px 0;
`
const IconoEstilizado = styled.img`
height: 20px;
`

const Formulario = styled.form `
display: flex;
flex-direction: column;
gap:10px;
padding: 0 40px;
label{
    display: flex;
    flex-direction: column;
    color: #a5a5a5;
}
input,textarea {
    border: 2px solid #2271d1;
    border-radius: 5px;
    padding: 10px;
    color: #a5a5a5;
    background-color: #03122F;
}
textarea{
    resize: none;
}
.button-container {
    display: flex;
    justify-content: space-between;
}
button{ 
    border-radius: 5px;
    padding: 10px;
    border: 2px solid #2271d1;
    background-color: black;
    cursor:pointer;
}
button[type="submit"]{
    color: #2271D1;
}
button[type="button"]{
    color:white;
    border-color: white;
}
`
const TituloModal = styled.h2 `
    color: #2271d1;
`
const Card = ({mainColor, id, title, video, image,description, onDelete}) => {
    

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [formData, setFormData] = useState({
        titulo: title,
        link_imagen: image,
        link_video: video,
        descripcion: description
    });
    const handleEditClick = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };
    const handleClearForm = () => {
        document.getElementById("editForm").reset();
    };
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        const updatedVideo = {
            ...formData,
            id
        };

        fetch(`http://localhost:3001/videos/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updatedVideo)
        })
            .then(response => response.json())
            .then(data => {
                onUpdate(data);
                setIsModalOpen(false);
            })
            .catch(error => console.error('Error updating video:', error));
    };
    const handleDelete = () => {
        fetch(`http://localhost:3001/videos/${id}`, {
            method: 'DELETE'
        })
            .then(response => {
                if (response.ok) {
                    onDelete(id);
                } else {
                    console.error('Error deleting video');
                }
            })
            .catch(error => console.error('Error deleting video:', error));
    };
    return (
        <ContenedorEstilizado $color={mainColor}>
            <LinkEstilizado>
                <ImagenEstilizada src={image} alt="imagen" />
            </LinkEstilizado>
            <PieImagen>
                <span onClick={handleDelete}>
                    <IconoEstilizado src="/img/delete.png" className="icono"/> Borrar
                </span>
                <span onClick={handleEditClick}>
                    <IconoEstilizado src="/img/edit.png" /> Editar
                </span>
            </PieImagen>
            <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
                <Formulario id="editForm" onSubmit={handleSubmit}>
                    <TituloModal>Editar Card:</TituloModal>
                    <label>
                        Título:
                        <input type="text" name="titulo" value={formData.titulo} onChange={handleChange} />
                    </label>
                    <label>
                        Imagen:
                        <input type="text" name="link_imagen" value={formData.link_imagen} onChange={handleChange} />
                    </label>
                    <label>
                        Video:
                        <input type="text" name="link_video" value={formData.link_video} onChange={handleChange} />
                    </label>
                    <label>
                        Descripción:
                        <textarea name="descripcion" value={formData.descripcion} onChange={handleChange}></textarea>
                    </label>
                    <div className="button-container">
                        <button type="submit">Guardar</button>
                        <button type="button" onClick={handleCloseModal}>Cancelar</button>
                    </div>
                </Formulario>
            </Modal>
        </ContenedorEstilizado>
    )
}
export default Card;