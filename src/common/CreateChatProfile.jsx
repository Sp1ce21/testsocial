import s from '../components/Chat/ChatMain/ChatMain.module.css'

function CreateChatProfile(props) {
    debugger
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
               {props.image && <div ></div>}
           </div>
       </div>
    );
}

export default CreateChatProfile;
