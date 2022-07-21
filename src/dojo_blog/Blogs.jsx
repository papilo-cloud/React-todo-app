import React from 'react'

const Blogs = ({species,name,food}) => {
  return (
    <div>
        <h2>Name: {name}</h2>
        <p>Species: {species}</p>
        <ul>
           <b> Foods</b>
            <li>likes: <ul style={{display:'flex'}}>
                {food.likes.map((x,i) => <li key={i} style={{marginLeft:25}}>{x}</li>)}   
                </ul>
            </li>
            <li>dislike: <ul style={{display:'flex'}}>
                {food.dislike.map((x,i) => <li key={i} style={{marginLeft:25}}>{x}</li>)}   
                </ul>
            </li>
        </ul>
    </div>
  )
}

export default Blogs