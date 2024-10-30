import s from './card.module.css'
import i from '../../assets/notFound.png'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { OrderModal } from './../modal/modal'

export function Card({id, img=i, name='null', price='не определено', countLast=0}){
    const [modalIsOpen, setmodalIsOpen] = useState(false);
    function showModal(){
        setmodalIsOpen(true);
    }
    return(
        <div className={s.card}>
            <div className={s.img}>
                <img src={img} alt="img" />
            </div>
            <div className={s.name}>{name}</div>
            <div className={s.price}>
                <p>{price} ₽</p>
                {
                    countLast>0 ?
                    <Link to={`/${id}`}>Добавить в корзину</Link>
                    :
                    <button onClick={showModal} className={s.btn}>Заказать</button>
                }
            </div>
            <p>Остаток: {countLast}</p>
            <OrderModal modalIsOpen={modalIsOpen} setModalIsOpen={setmodalIsOpen}></OrderModal>
        </div>
    )
}
