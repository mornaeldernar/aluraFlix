import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const Formulario = styled.form`
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 20px;
    background-color: black;
    width: 90%;
    margin: 0 auto;
    @media screen and (min-width: 768px) {
        width: 80%;
    }
    label {
        display: flex;
        flex-direction: column;
        color: #A5A5A5;
    }

    input, textarea {
        border: 2px solid #A5a5a5;
        border-radius: 5px;
        padding: 10px;
        color: #A5A5A5;
        background-color: #03122F;
    }

    textarea {
        resize: none;
    }

    .button-container {
        display: flex;
        justify-content: space-between;
    }

    button {
        border-radius: 5px;
        padding: 10px;
        border: 2px solid #2271D1;
        background-color: black;
        cursor: pointer;
    }

    button[type="submit"] {
        color: #2271D1;
    }

    button[type="button"] {
        color: white;
        border-color: white;
    }
`;

const TituloModal = styled.h2`
    color: #2271D1;
`;

const NuevoVideo = () => {
    const [categorias, setCategorias] = useState([]);
    const [formData, setFormData] = useState({
        titulo: '',
        categoria: '',
        link_imagen: '',
        link_video: '',
        descripcion: ''
    });

    useEffect(() => {
        fetch('http://localhost:3001/categorias')
            .then(response => response.json())
            .then(data => setCategorias(data))
            .catch(error => console.error('Error fetching categories:', error));
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newVideo = {
            ...formData,
            id: Date.now().toString(), // Generar un ID único
        };

        fetch('http://localhost:3001/videos', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newVideo)
        })
            .then(response => response.json())
            .then(data => {
                console.log('Video guardado:', data);
                // Limpiar el formulario después de guardar
                setFormData({
                    titulo: '',
                    categoria: '',
                    link_imagen: '',
                    link_video: '',
                    descripcion: ''
                });
            })
            .catch(error => console.error('Error saving video:', error));
    };
    const handleClearForm = () => {
        setFormData({
            titulo: '',
            categoria: '',
            link_imagen: '',
            link_video: '',
            descripcion: ''
        });
    };

    return (
        <div>
            <Formulario id="nuevoVideoForm" onSubmit={handleSubmit}>
                <TituloModal>Alta de Nuevo Video</TituloModal>
                <label>
                    Título:
                    <input type="text" name="titulo" value={formData.titulo} onChange={handleChange} />
                </label>
                <label>
                    Categoría:
                    <select name="categoria" value={formData.categoria} onChange={handleChange}>
                        <option value="">Seleccione una categoría</option>
                        {categorias.map(categoria => (
                            <option key={categoria.id} value={categoria.id}>{categoria.nombre}</option>
                        ))}
                    </select>
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
                    <button type="button" onClick={handleClearForm}>Limpiar</button>
                </div>
            </Formulario>
        </div>
    );
};

export default NuevoVideo;