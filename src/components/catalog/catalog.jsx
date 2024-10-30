import s from "./catalog.module.css"
import products from '../../data/data'
import { Card } from "../card/card"
import { Search } from "../../components/search/search";
import { useState } from "react";

export function Catalog(){
    const [query,setQuery] = useState('');

    function handleChange(e){
        setQuery(e.target.value);
    }

    const filteredProducts = products.filter((product) => {
        return product.name.toLowerCase().includes(query.toLowerCase())
    });

    return(
        <section className={`${s.content} ${s.catalog}`}>
            <h2>Каталог товаров</h2>
            <Search handleChange={handleChange}></Search>
            <div className={s.categories}>
                <p>Категории</p>
                <button className={`${s.button} ${s.active}`}>Все товары</button>
                <button className={`${s.button}` }>Шины/колеса</button>
                <button className={`${s.button}` }>Масла</button>
                <button className={`${s.button}` }>Ароматизаторы</button>
            </div>
            <div className={s.card_list}>
                {
                    filteredProducts.length ?
                    filteredProducts.map((item) => {
                        return <Card key={item.id} id={item.id} img={item.img} name={item.name} price={item.price} countLast={item.countLast}/>
                    }):
                    <p className="error">Не найдено</p>
                }
            </div>
        </section>
    )
}