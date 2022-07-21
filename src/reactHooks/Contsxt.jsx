import React, {useReducer, useState} from "react";
import appReducer from "./Reducer";

const defaultPosts = [
    { title: 'React Hooks',
     content: 'The greatest thing since sliced bread!',
      author: 'Daniel Bugl' },
    { title: 'Using React Fragments',
     content: 'Keeping the DOM tree clean!',
      author: 'Daniel Bugl' }
   ]



export const GlobalContext = React.createContext()

export const AppProvider = ({children}) =>{
    const [state, dispatch] = useReducer(appReducer, {users: '', 
    posts: defaultPosts})
    const [theme, setTheme] = useState({
        primaryColor: 'deepskyblue', 
        secondaryColor: 'coral'
        })
    // const [users, dispatchUsers] = useReducer(userReducer, '')

    return(
        <GlobalContext.Provider value={{
            state,
            dispatch,
            theme,
            setTheme
        }} >
            {children}
        </GlobalContext.Provider>
    )

}