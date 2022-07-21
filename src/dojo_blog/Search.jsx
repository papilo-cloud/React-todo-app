import React,{useState} from 'react'
import {users} from './Users'

const Search = () => {
    const [query, setQuery] = useState('')

    const keys = ['first_name','last_name','email']
    
    const search = (data)=>{
      return data.filter(x =>
        keys.some(key => x[key].toLowerCase().includes(query.toLowerCase()))) 
    }
    
  return (
    <div>
        <input
        onChange={e => setQuery(e.target.value)}
         type="text"
         placeholder='search'
          className="search" />
        
        <Table data={search(users)} />
    </div>
  )
}

const Table = ({data}) => {
  return(
    <table>
      <tr>
        <th>Name</th>
        <th style={{marginLeft:40}}>Surname</th>
        <th>Email</th>
      </tr>
      {data.map((item, i) => 
      <tr>
        <td>{item.first_name}</td>
        <td>{item.last_name}</td>
        <td>{item.email}</td>
      </tr>
      )}
    </table>
  )
}

export default Search