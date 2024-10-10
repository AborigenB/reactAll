import { Card } from "../../components/card/card";
import products from "../../data/data"
import { useParams } from "react-router-dom";
import s from './cardpage.module.css'
import { Header } from "../../components/header/header";
import { Link } from "react-router-dom";

export function CardPage(){
    const {id} = useParams();
    let card = products.find((item) => {if(item.id == id) return item})

    return(
        <>
            <Header/>
            <section className={`${s.cardpage} ${s.content}`}>
                <Link className={s.home} to='/home'>На главную</Link>
                <div className={s.card}>
                    <div className={s.img}>
                        <img src={card.img} alt="img" />
                    </div>
                    <div className={s.info}>
                        <h2>{card.name}</h2>
                        <p>{card.description}</p>
                        <div className={s.priceBox}>
                            <p>{card.price}</p>
                            <button className={s.btn}>Добавить в корзину</button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}