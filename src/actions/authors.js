import axios from "axios"

export const setAuthors=(authors)=>{
    return{
        type:'SET_AUTHORS',
        payload:authors
    }
}
export const startSetPosts=()=>{
    return(dispatch)=>{
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response=>{
            const posts=response.data
            dispatch(setPosts(posts))
        })
    }
}
export const startSetPosts=()=>{
    return(dispatch)=>{
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response=>{
            const users=response.data
            dispatch(setAuthors(users))
        })
    }
}