import s from './modal.module.css'
import Modal from 'react-modal'

export function OrderModal({modalIsOpen, setModalIsOpen}){
    function closeModal(){
        setModalIsOpen(false);
    }
    return(
        <Modal className={s.modal} isOpen={modalIsOpen}>
            <p>Модалочка</p>
            <button onClick={closeModal} className={s.btn}>Закрыть</button>
        </Modal>
    )
}