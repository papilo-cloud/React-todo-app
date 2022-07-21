import React from 'react'

const Page = ({posts, loading,query}) => {

  
    if (loading) {
        return <h2>Loading</h2>
    }
    // const currentPosts = posts.slice(0, 10)
  return (
    <ul>
        {posts.filter(x => x.title.toLowerCase().includes(query)).map(post => <li>
            {post.title}</li> )}
    </ul> 
  )
}

export default Page