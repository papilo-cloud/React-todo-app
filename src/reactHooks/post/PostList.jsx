import { useContext } from "react"
import { GlobalContext } from "../Contsxt"
import Post from "./Post"

const PostList = () => {
  const {state} = useContext(GlobalContext)
  const {posts} = state
  // console.log(sta);
  return (
    <div className="list">
        {posts.map((p, i) => < div key={i} >
            <Post {...p} />
            <hr />
        </div> )}
    </div>
  )
}

export default PostList