import {Link} from 'react-router-dom'
import style from './NavBar.module.css'
const NavBar = () => {
    return (
        <div className={StyleSheet.mainContainer}>
            <Link to ='/home'> Home </Link>
            <Link to ='/create'> FORM </Link>
        </div>
    )
}

export default NavBar