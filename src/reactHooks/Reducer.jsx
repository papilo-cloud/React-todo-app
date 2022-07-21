
 const userReducer = (state, action) =>{
    switch(action.type) {
        case 'LOGIN':
        case 'REGISTER':
          return action.username
        case 'LOGOUT':
          return ''
        default :
        return state
    }
 }
  const postsReducer = (state, action) =>{
    switch(action.type) {
      case 'CREATE_POST':
        const newPost = {title: action.title, 
          content: action.content, author: action.author}
        return [newPost, ...state]
      default:
        return state
    }
 }

 export default function appReducer(state, action) {
    return{
        users: userReducer(state.users, action),
        posts: postsReducer(state.posts, action)
    }
 }