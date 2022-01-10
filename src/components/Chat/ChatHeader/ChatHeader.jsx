import s from './ChatHeader.module.css';
import star from '../../../assets/images/Chat/star.png'
import users from '../../../assets/images/Chat/users.png'
import search from '../../../assets/images/Chat/search.png'
import messages from '../../../assets/images/Chat/messages.png'
import circles from '../../../assets/images/Chat/circles.png'
import { useEffect, useState } from 'react';

function ChatHeader(props) {


let [circle, setCircle] = useState(false);
let [timeout, setMyTimeout] = useState(true);

useEffect(()=>{
    if(timeout === true){
    setTimeout(doSomething, 2000)
    setMyTimeout(false)
    }
})

function doSomething(){
    setCircle(true)
}

    return (
        <header className={s.header}>
            <div className={s.row}>
                <div className={s.left}>
                    <h2 className={s.title}>#{props.channelsLink}</h2>
                    <img src={star} alt="star" />
                </div>
                <div className={s.rigth}>
                    <img src={users} alt="users" />
                    <div className={s.usersCount}>1,093</div>
                    <form action="#" className={s.form}>
                        <div>
                            <input type="text" className={s.input} placeholder='Search...' />
                            <img src={search} alt="search" className={s.search} />
                        </div>
                    </form>
                    <div className={s.relative}><img src={messages} alt="messages" className={s.img1} />
                    {circle && <div className={s.circle}></div>}
                    </div>
                    <img src={circles} alt="circles" />
                </div>
            </div>
            <hr className={s.line} />

        </header>
    );
}

export default ChatHeader;
