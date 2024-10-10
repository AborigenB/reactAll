import s from './card.module.css'
import i from '../../assets/notFound.png'
import { Link } from 'react-router-dom'

export function Card({id, img=i, name='null', price='не определено'}){
    return(
        <div className={s.card}>
            <div className={s.img}>
                <img src={img} alt="img" />
            </div>
            <div className={s.name}>{name}</div>
            <div className={s.price}>
                <p>{price} ₽</p>
                <Link to={`/${id}`}>Добавить в корзину</Link>
            </div>
        </div>
    )
}
