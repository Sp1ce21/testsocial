import s from '../components/Chat/ChatMain/ChatMain.module.css'

function LineDateCreator(props) {
    return (
       <div className={s.lineRow}>
           <hr className={s.line}/>
           <div className={s.date}>{props.date}</div>
           <hr className={s.line}/>
       </div>
    );
}

export default LineDateCreator;
