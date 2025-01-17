import styled from "styled-components";

const ModalOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
`
const ModalContent = styled.div`
    background: #03122F;
    padding: 20px;
    border-radius: 10px;
    border: 2px solid #6BD1FF;
    max-width: 500px;
    width: 100%;
    color: white;
    position:relative;
`;

const CloseButton = styled.button`
    position: absolute;
    top: 10px;
    right: 10px;
    background: none;
    border: none;
    color: white;
    font-size: 20px;
    cursor: pointer;
`

const Modal = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;

    return (
        <ModalOverlay onClick={onClose}>
            <ModalContent onClick={e => e.stopPropagation()}>
            <CloseButton onClick={onClose}>&times;</CloseButton>
                {children}
            </ModalContent>
        </ModalOverlay>
    );
};

export default Modal;