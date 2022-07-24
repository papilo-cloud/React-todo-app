import {BiMenuAltLeft, BiSearch} from 'react-icons/bi'
import {BsBell} from 'react-icons/bs'


const Header = ({users,getUser, first, tasks}) => {
    const handleClick = () =>{
        getUser(!first)
    }
    const len1 = tasks.filter(task => task.taskType)
    const len2 = tasks.filter(task => !task.taskType)
    const length1 = len1.length
    const length2 = len2.length
    const plural1 = length1 <= 1? 'task': 'tasks'
    const plural2 = length2 <= 1? 'task': 'tasks'

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
            <h2>What's up, {users}! </h2>
            <p>categories</p>
            <div className="categories">
                <div className="business">
                    <span>{length1} {plural1}</span><br />
                    <h4>Business</h4>
                    <p className='bus'><span></span></p>
                </div>
                <div className="personal">
                    <span>{length2} {plural2}</span><br />
                    <h4>Personal</h4>
                    <p className='per'><span></span></p>
                </div>
            </div>
        </header>
    )
}

export default Header
