import React, { useContext } from 'react'
import { GlobalContext } from './Contsxt'


const THEMES =  [
    { primaryColor: 'deepskyblue', secondaryColor: 'coral' },
    { primaryColor: 'green', secondaryColor: 'purple' },
    { primaryColor: 'orange', secondaryColor: 'blue' },
    { primaryColor: 'orchid', secondaryColor: 'mediumseagreen' }
   ]
   
 
function ThemeItems({active, theme, onClick }) {
    return (
        <span onClick={onClick}>
          <button 
          style={{padding: active ? '7px': '0',
           margin: 6, cursor:'pointer',
           backgroundColor: active ? 'gray': ''}} ><span 
          style={{color: theme.primaryColor, backgroundColor: 'transparent'}} >Primary</span> / <span
          style={{color: theme.secondaryColor, backgroundColor: 'transparent'}} >Secondary</span></button>
            
        </span>
      )
}


const ChangeThemes = () => {
  const {theme, setTheme} = useContext(GlobalContext)

  function isActive(x) {
    return x.primaryColor === theme.primaryColor && x.secondaryColor === theme.secondaryColor
  }
  return(
    <div>
        Change Theme:
        {THEMES.map((t, i) => <ThemeItems key={i} 
        active={isActive(t)}
        theme={t}
        onClick={()=> setTheme(t)} /> )}
    </div>
  )
}

export default ChangeThemes