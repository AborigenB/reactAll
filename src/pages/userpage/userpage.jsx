import s from "./userpage.module.css"
import { useState, useEffect } from "react"
import { Header } from "../../components/header/header"

export function UserPage(){
    const [users, setUsers] = useState([])
    const [message, setMessage] = useState()

    function handleSubmit(e){
        e.preventDefault();
        const formdata = new FormData(e.target);
        fetch('https://jsonplaceholder.typicode.com/users', {
            method: 'POST',
            body: formdata
        });
        e.target.reset();
        setMessage('Форма отправлена');
    }
    async function fetchUsers() {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const users = await response.json();
        setUsers(users);
    }

    useEffect(()=>{
        fetchUsers();
    }, [])

    return(

        <section className={s.UserPage}>
            <Header></Header>
            <div className={s.container}>
                <h1>Пользователи</h1>
                <div className={s.addUser}>
                    <h2>Добавить пользователя </h2>
                    <form onSubmit={handleSubmit}>
                        <input type="text" name="name" placeholder="Имя"/>
                        <input type="text" name="username" placeholder="Логин"/>
                        <input type="email" name="email" placeholder="Почта"/>
                        <input type="submit" value='Отправить'/>
                        <p>{message}</p>
                    </form>
                </div>
                <div className={s.users_list}>
                {
                    users.map(user=>{
                        return(
                            <div className={s.user}>
                                <p>name: {user.name}</p>
                                <p>username: {user.username}</p>
                                <p>email: {user.email}</p>
                            </div>
                        )
                    })
                }
                </div>
            </div>
        </section>
    )
}