import s from "./catalog.module.css"
import products from '../../data/data'
import { Card } from "../card/card"

export function Catalog(){
    return(
        <section className={`${s.content} ${s.catalog}`}>
            <h2>Каталог товаров</h2>
            <div className={s.categories}>
                <p>Категории</p>
                <button className={`${s.button} ${s.active}`}>Все товары</button>
                <button className={`${s.button}` }>Шины/колеса</button>
                <button className={`${s.button}` }>Масла</button>
                <button className={`${s.button}` }>Ароматизаторы</button>
            </div>
            <div className={s.card_list}>
                {
                    products.map((item) => {
                        return <Card id={item.id} img={item.img} name={item.name} price={item.price}/>
                    })
                }
            </div>
        </section>
    )
}