import { Link } from 'react-router-dom'
import s from './header.module.css'
import img from '../../assets/avtotorgLogo.svg'

export function Header(){
    return(
        <header>
            <div className={`${s.header} ${s.content}`}>
                <nav className={s.nav}>
                    <Link>О нас</Link>
                    <Link>Каталог</Link>
                    <Link>Где нас найти</Link>
                </nav>

                <div className={s.logo}>
                    <img src={img} alt="logo" />
                </div>

                <div className={s.profile_btns}>
                    <button>Регистрация</button>
                    <button>Вход</button>
                </div>
            </div>
        </header>
    )
}