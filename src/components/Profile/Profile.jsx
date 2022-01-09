import s from './Profile.module.css';

function Profile(props) {
    return (
        <div className={s.profile}>
           <div className={s.arrow}>
               <span className={s.first}></span>
               <span className={s.second}></span>
           </div>
        </div>
    );
}

export default Profile;
