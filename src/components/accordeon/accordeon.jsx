import s from './accoreon.module.css'
import { useState } from 'react';

export function Accordeon({title, content}){
    const [isActive, setIsActive] = useState(false);

    return(
        
        <div className={s.accordion_item}>
            <div className={s.accordion_title} onClick={() => setIsActive(!isActive)}>
                <div>{title}</div>
                <div>{isActive ? '-' : '+'}</div>
            </div>
            {isActive && <div className="accordion-content">{content}</div>}
        </div>
        
    )
}