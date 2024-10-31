import s from './home.module.css'
import { Header } from '../../components/header/header.jsx'
import { Banner } from '../../components/banner/banner.jsx'
import { Catalog } from '../../components/catalog/catalog.jsx'
import { SimpleSlider } from '../../components/slider/slider.jsx'
import { Accordeon } from '../../components/accordeon/accordeon.jsx'

export function Home(){
    return(
        <section className={s.homepage}>
            <Banner/>
            <div className={s.accordeon}>
                <Accordeon title={"Название аккордиона"} content={'Контент аккордиона'}></Accordeon>
                <Accordeon title={"Php"} content={'Язык препроцессор для html'}></Accordeon>
            </div>
            <Catalog/>
            <SimpleSlider></SimpleSlider>
        </section>
    )
}