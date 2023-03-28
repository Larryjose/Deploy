import { Link } from 'react-router-dom';
import style from './NavBar.module.css';
const NavBar = () => {
   return (

      <ul>

         <Link to="/home" className={style.contain}>HOME</Link>

         <Link to="/create" className={style.contain}>CREATE</Link>

         <Link to="/about" className={style.contain}>ABOUT</Link>

      </ul>

   )

}
export default NavBar;