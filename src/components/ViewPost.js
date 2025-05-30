import React,{useEffect,useState} from 'react';
import {useParams, Link, useNavigate} from 'react-router-dom'
import axios from 'axios'
import './Navbar.css'

function ViewPost(props) {
    const {id} = useParams()
    const [post,setPost]=useState({})
    const navigate = useNavigate()
    useEffect(()=>{
        axios.get('https://simply-server.onrender.com/viewpost/'+id)
        .then(result => setPost(result.data))
        .catch(err => console.log(err))
    })

    const handledelete =(id)=>{
        axios.delete('https://simply-server.onrender.com/deletepost/'+id)
        .then(result => { console.log(result)
            // alert('post deleted')
            navigate('/home')})
        .catch(err => console.log(err))

    }
    return (
        <div className='view-home-main'>  
          
                <div className="view-post-display">
                    
                    <img src={`https://simply-server.onrender.com/Images/${post.file}`} alt="" srcset="" />
                    <div className="editdelebtn">
                        <Link to={`/editpost/${post._id}`}>edit</Link>
                        <button onClick={(e)=>handledelete(post._id)}>delete</button>
                    </div>
                    <div className="view-post-dis-text">
                        <h2>{post.title}</h2>
                        <p>{post.description}</p>
                    </div>
                </div>
               
             
</div>
    );
}

export default ViewPost;