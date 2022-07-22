import {BiMenuAltLeft, BiSearch} from 'react-icons/bi'
import {BsBell} from 'react-icons/bs'


const Header = ({users,getUser, first, length}) => {
    const handleClick = () =>{
        getUser(!first)
    }
    const plural = length <= 1? 'task': 'tasks'
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
                    <span>{length} {plural}</span><br />
                    <h4>Business</h4>
                    <p className='bus'><span></span></p>
                </div>
                <div className="personal">
                    <span>{length} {plural}</span><br />
                    <h4>personal</h4>
                    <p className='per'><span></span></p>
                </div>
            </div>
        </header>
    )
}

export default Header
