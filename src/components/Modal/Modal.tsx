interface ModalProps {
    children: React.ReactNode,
    title: string,
    onClose: () => void,
}

export const Modal = ({children, title, onClose} : ModalProps) => 
    <>
        <div className="modal-bg" onClick={() => onClose()}/>
        <div className="modal-field">
            <h1 className="modal-title">{title}</h1>
            {children}
        </div>
    </>