import React, { useContext, useState } from 'react'
import { GlobalContext } from '../Contsxt'

const CreatePost = () => {
    const [ title, setTitle ] = useState('')
    const [ content, setContent ] = useState('')
    const {state, dispatch } = useContext(GlobalContext)
    const {users } = state

    function handleTitle (evt) {
        setTitle(evt.target.value)
        
    }
    function handleContent (evt) {
        setContent(evt.target.value)
       
    }
    function handleCreate () {
        dispatch({type: 'CREATE_POST', title, content, author: users});
        setTitle('')
        setContent('')
    }

    return (
        <form onSubmit={e => {e.preventDefault(); handleCreate()}}>
            <div>Author: <b>{users}</b></div>
            <div>
                <label htmlFor="create-title">Title:</label>
                <input type="text"
                value={title}
                onChange={handleTitle}
                name="create-title" id="createtitle" />
            </div>
            <textarea value={content}
            onChange={handleContent} />
            <input
             type="submit" value="Create" disabled={content.length === 0 || title.length === 0}/>
        </form>
    )
   }

   
   export default CreatePost