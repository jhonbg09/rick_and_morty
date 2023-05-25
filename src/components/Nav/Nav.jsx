
import SearchBar from "../SearchBar/SearchBar"
import style from "./Nav.module.css"
import { Link } from "react-router-dom"

const Nav = (props) =>{
    const {onSearch} = props
    return(
        <div>
            <div className={style.container}>
            <div className={style.links}>
                <Link to='/home'>Home</Link>
            </div>
            <div className={style.links}>
                <Link to='/about'>About</Link>
            </div>
            <SearchBar onSearch={onSearch}/>
            </div>
           
        </div>
    )
}

export default Nav