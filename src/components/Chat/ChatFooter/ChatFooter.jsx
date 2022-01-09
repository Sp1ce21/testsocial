import s from './ChatFooter.module.css';
import importFile from '../../../assets/images/Chat/importFile.png'
import micro from '../../../assets/images/Chat/micro.png'
import smiles from '../../../assets/images/Chat/smiles.png'

function ChatFooter(props) {
    return (
        <footer className={s.footer}>
            <hr className={s.line}/>
            <div className={s.row}>
                <div className={s.leftPart}>
                    <img src={importFile} alt="import file" />
                    <img src={micro} alt="microphone" />
                    <input type="text" className={s.text} placeholder='Type a message...'/>
                </div>
                <img src={smiles} alt="smiles" />
            </div>
        </footer>
    );
}

export default ChatFooter;
