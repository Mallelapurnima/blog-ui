import React from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import { setPosts } from './actions/posts'
import { connect } from 'react-redux'
// import {
//     Card, CardBody,
//     CardTitle, CardSubtitle, Button
//   } from 'reactstrap';
  


class Posts extends React.Component{
   
    componentDidMount(){
        if (this.props.posts.length===0){
            axios.get(`https://jsonplaceholder.typicode.com/posts`)
                .then(response => {
                    const posts=response.data
                    console.log(posts)
                this.props.dispatch(setPosts(posts))
                })
        }
        

    }
    // load = () => {
    //     this.setState(prev => ({
    //         newPosts: prev.posts.slice(0,prev.newPosts.length+10)
            
    //     }))
   // }

    render(){
        return(
            <div>
                <h2>Listing Posts--{this.props.posts.length}</h2>
                <ul>
                    {this.props.posts.map((post)=>{
                        return <li key ={post.id}><Link to={`posts/${post.id}`}>{post.title}</Link></li>
                    })}
                </ul>
                
    </div>
        )
    }
}

const mapStatetoProps=(state)=>{
    return {
        posts:state.posts
    }
}
export default connect(mapStatetoProps) (Posts)

