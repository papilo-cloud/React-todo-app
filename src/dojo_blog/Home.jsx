import React,{useState, useEffect} from 'react'
import Bloglists from './Bloglists'

const Home = () => {
    const [blogs, setBlogs] = useState(null)
    const [pending, setPending] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        setTimeout(() =>{
            fetch(' http://localhost:8000/blogs')
            .then(res => {
                if (!res.ok) {
                    throw Error('Could not get message from that resourcces')
                }
                return res.json()
            })
            .then( data =>{
                setBlogs(data)
                setPending(false)
                setError(null)
            })
            .catch(err => {
                setError(err.message);
                setPending(false)
            })
    }, 1000
        )
    }, [])
    
    
  return (
   
    <div style={{fontSize:20}} >
        {error && <div>{error}</div> }
        {pending && <div><h2>Loading...</h2></div> }
        {blogs && <Bloglists blogs={blogs}/>}
    </div>
  )
}

export default Home