import s from './home.module.css'
import { Header } from '../../components/header/header.jsx'
import { Banner } from '../../components/banner/banner.jsx'
import { Catalog } from '../../components/catalog/catalog.jsx'
import { SimpleSlider } from '../../components/slider/slider.jsx'

export function Home(){
    return(
        <section className={s.homepage}>
            <Banner/>
            <Catalog/>
            <SimpleSlider></SimpleSlider>
        </section>
    )
}