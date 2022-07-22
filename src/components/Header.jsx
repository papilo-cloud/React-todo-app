import {BiMenuAltLeft, BiSearch} from 'react-icons/bi'
import {BsBell} from 'react-icons/bs'


const Header = ({users,getUser}) => {
    const handleClick = () =>{
        getUser()
    }
    return (
        <header className="header">
            <div className="top-menu">
                <button 
                onClick={handleClick}><BiMenuAltLeft style={{fontSize:26}} /></button>
                <ul>
                    <li><BiSearch /></li>
                    <li><BsBell /></li>
                </ul>
            </div>
            <h2>What's up {users} </h2>
            <p>categories</p>
            <div className="categories">
                <div className="business">
                    <h4>Business</h4>
                    <p className='bus'><span></span></p>
                </div>
                <div className="personal">
                    <h4>personal</h4>
                    <p className='per'><span></span></p>
                </div>
            </div>
        </header>
    )
}

export default Header
