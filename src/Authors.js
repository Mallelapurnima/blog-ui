import React from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

class Authors extends React.Component{
    constructor(){
        super()
        this.state = {
            users: []
        }
    }
    componentDidMount(){
        axios.get(`https://jsonplaceholder.typicode.com/users/`)
            .then(response=>{
                const users=response.data
                this.setState({users})

            })
        
    }

    render(){
        return(
            <div className="listauthors">
                {Boolean(this.state.users.length) && <h3>List of Authors - {this.state.users.length}</h3>}
                <ul>
                    {Boolean(this.state.users.length) && this.state.users.map(user => <li key={user.id}><Link to={`/Authors/${user.id}`}>{user.name}</Link></li>)}
                </ul>
            </div>
        )
    }
}
export default Authors