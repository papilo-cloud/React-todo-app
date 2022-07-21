import {BiMenuAltLeft, BiSearch} from 'react-icons/bi'
import {BsBell} from 'react-icons/bs'


const Header = () => {
    return (
        <header className="header">
            <div className="top-menu">
                <button><BiMenuAltLeft style={{fontSize:26}} /></button>
                <ul>
                    <li><BiSearch /></li>
                    <li><BsBell /></li>
                </ul>
            </div>
            <h1>What's up Abdul </h1>
            <p>categories</p>
            <div className="categories">
                <div className="business">
                    <h4>Business</h4>
                </div>
                <div className="personal">
                    <h4>personal</h4>
                </div>
            </div>
        </header>
    )
}

export default Header
