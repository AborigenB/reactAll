import { Link } from 'react-router-dom'
import s from './header.module.css'
import img from '../../assets/avtotorgLogo.svg'

export function Header(){
    return(
        <header>
            <div className={`${s.header} ${s.content}`}>
                <nav className={s.nav}>
                    <Link className={s.home} to='/home'>На главную</Link>
                    <Link>О нас</Link>
                    <Link>Каталог</Link>
                    <Link to='/users'>Пользователи</Link>
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