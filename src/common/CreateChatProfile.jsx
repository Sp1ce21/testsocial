import {useState } from 'react';
import s from '../components/Chat/ChatMain/ChatMain.module.css'

function CreateChatProfile(props) {

    let [count, setCount] = useState(0)

    return (
        <div className={`${s.row} ${s.block}`}>
            <img src={props.friends.image} alt="image" />
            <div>
                <div className={s.row}>
                    <div className={s.name}>{props.friends.fullName}</div>
                    <div className={s.time}>{props.time}</div>
                </div>
                <div className={s.message}>
                    {props.span && <span className={s.span}>{props.span}</span>} {props.message}
                </div>
                {props.image && <div className={s.span}>SomePhoto.png</div>}
                {props.image &&
                    <div className={s.container}>
                        <img src={props.image} alt='image' onClick={()=>{setCount(count + 1);}}/>
                        <div className={s.position}>
                            {count !== 0 && <div className={s.content}>
                            &#128525; {count}
                            </div>}
                        </div>
                    </div>}
            </div>
        </div>
    );
}

export default CreateChatProfile;
