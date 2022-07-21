import React,{useState, useEffect} from 'react';
import './app.css'
import Page from './Page';

const App = () => {
    const [query, setQuery] = useState('')
    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(true)
    const [currentPage, setCurrentPage] = useState(1)
    const [postsPerPage] = useState(10)

    useEffect(() => {
      fetch(`http://localhost:8000/blogs?q=${query}`)
      .then( res => {
        // if (!res.ok) {
        //   throw Error('Error trying to load page')
        // }
        return res.json()  
      })
      .then( data => {
        setPosts(data)
        setLoading(false)
      })
      .catch(err => {
        console.log(err.message);
      })
    }, []) 

    // const currentPosts = posts.slice(0, 10) 
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
  
    
  return (
    <div>
      <input type="text"
       placeholder='search...'
       onChange={e => setQuery(e.target.value)} />
        <Page posts={currentPosts} loading={loading} query={query}/>
    </div>
  )
}

export default App