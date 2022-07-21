import React, { useState } from 'react'

const TimerForm = ({id,title,project,onFormClose,onFormSubmit}) => {
    const [titles, setTitles] = useState(title)
    const [projects, setProjects] = useState(project)
    const submitText = title ? 'Update' : 'Create';

    const handleSubmit = () =>{
        onFormSubmit({titles,projects})
    }
    const handleTitleChange = (e) =>{
        e.preventDefault()
        setTitles(e.target.value)
    }
    const handleProjectChange = (e) =>{
        e.preventDefault()
        setProjects(e.target.value)
    }
 
    return (
              <div className="form">
                  <div className="field">
                      <label htmlFor="">Title</label><br />
                      <input type="text"
                       value={titles} 
                       onChange={ handleTitleChange }/>
                  </div>
                  <div className="field">
                      <label htmlFor="">Project</label><br />
                      <input type="text"
                       value={projects} 
                       onChange={ handleProjectChange } />
                  </div>
                  <div className="bottom">
                      <button className="blue"
                      onClick={handleSubmit}>
                          {submitText}
                      </button>
                      <button className="red"
                      onClick={onFormClose} >
                          Cancel
                      </button>
                  </div>
              </div>
    )
}
export default TimerForm
