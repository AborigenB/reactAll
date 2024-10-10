import s from './banner.module.css'
import img from '../../assets/bannerAuto.png'
import { Header } from '../header/header'

export function Banner(){
    return(
        <div className={s.banner}>
            <Header></Header>
            <img className={s.bannerImg} src={img} alt="" />
            <p>О компании <span>АвтоТорг</span></p>
        </div>
    )
}