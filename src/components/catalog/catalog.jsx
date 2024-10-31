import s from "./catalog.module.css"
import products from '../../data/data'
import { Card } from "../card/card"
import { Search } from "../../components/search/search";
import { useState } from "react";

export function Catalog(){
    const [query,setQuery] = useState('');
    const [sorting,setSorting] = useState('');

    function sort(e){
        setSorting(e.target.value);
    }
    function handleChange(e){
        setQuery(e.target.value);
    }

    const filteredProducts = products.filter((product) => {
        return product.name.toLowerCase().includes(query.toLowerCase())
    });

    const sortProducts = (sotring, products)=>{
        switch(sorting){
            case 'price_asc':
                return [...products].sort((a,b) => a.price - b.price)
            case 'price_desc':
                return [...products].sort((a,b) => b.price - a.price)
            default:
                return products;
        }
    }

    const sortedFilteredProducts = sortProducts(sorting, filteredProducts);

    return(
        <section className={`${s.content} ${s.catalog}`}>
            <h2>Каталог товаров</h2>
            <Search handleChange={handleChange}></Search>
            <div className={s.categories}>
                <select name="aboba" onChange={sort}>
                    <option value="price_asc">По возрастанию цены</option>
                    <option value="price_desc">По убыванию цены</option>
                </select>
            </div>
            <div className={s.card_list}>
                {
                    sortedFilteredProducts.length ?
                    sortedFilteredProducts.map((item) => {
                        return <Card key={item.id} id={item.id} img={item.img} name={item.name} price={item.price} countLast={item.countLast}/>
                    }):
                    <p className="error">Не найдено</p>
                }
            </div>
        </section>
    )
}