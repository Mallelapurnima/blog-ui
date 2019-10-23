import React from 'react'
import {BrowserRouter, Route, Link} from 'react-router-dom'
import PostsList from './Posts.js'
import Authors from './Authors.js'
import PostShow from './postShow.js'
import AuthorShow from './AuthorShow.js'
import Recent from './Recent'

function App(props) {
    return (
        <BrowserRouter>
        <div className="main">
            
            
           <div className="post"><button>
               <Link to="/Posts">Posts</Link></button><br /></div> 
           <div className="authors">
               <button><Link to="/Authors">Authors</Link></button><br /></div>
            
            <Route path="/Posts" component={PostsList} exact={true}/>
            <Route path="/Posts/:id" component={PostShow}/>
            <Route path="/Authors" component={Authors} exact={true}/>
            <Route path="/Authors/:id" component={AuthorShow}/>
            <Recent  />
            
              
        </div>
        </BrowserRouter>
    )
}

export default App