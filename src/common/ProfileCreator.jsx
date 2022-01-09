import s from '../components/FriendsMenu/NomadList/Friends/Friends.module.css'
const ProfileCreator = ({isOnline = false, image, fullName}) => {
    return (
        <div className={s.profile} onClick={()=>{}}>
            {isOnline ? <span className={s.online}></span> : <span className={s.offline}></span>}
            <img src={image} alt="image" className={s.image}/>
            <div className={s.text}>{fullName}</div>
        </div>
    )
}
export default ProfileCreator