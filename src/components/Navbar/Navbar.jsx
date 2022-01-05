import s from './Navbar.module.css';
import img1 from '../../assets/images/Navbar/1.png'
import img2 from '../../assets/images/Navbar/2.png'
import img3 from '../../assets/images/Navbar/3.png'
import img4 from '../../assets/images/Navbar/4.png'
import img5 from '../../assets/images/Navbar/5.png'
import img6 from '../../assets/images/Navbar/6.png'
import img7 from '../../assets/images/Navbar/7.png'
import plus from '../../assets/images/Navbar/plus.png'

function Navbar() {
    return (
        <div className={s.navbar}>

            <div className={s.column}>
                <div className={s.points}>
                    <a href='' className={s.point + ' ' + s.red}></a>
                    <a href='' className={s.point + ' ' + s.yellow}></a>
                    <a href='' className={s.point + ' ' + s.green}></a>
                </div>

                <div className={s.images}>
                    <img src={img1} alt="img1" />
                    <img src={img2} alt="img2" />
                    <img src={img3} alt="img3" />
                    <img src={img4} alt="img4" />
                    <img src={img5} alt="img5" />
                    <img src={img6} alt="img6" />
                    <img src={img7} alt="img7" />
                </div>
            </div>

            <div className={s.plus}>
                <img src={plus} alt="plus" className={s.plusAnimation}/>
            </div>

        </div>
    );
}

export default Navbar;
