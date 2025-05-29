import React,{useEffect,useState} from 'react';
import {  useNavigate , Link} from 'react-router-dom';
import axios from 'axios'
import './Navbar.css'

function Home(props) {
    const navigate = useNavigate()

    const [posts,setPosts]= useState([])
    useEffect(()=>{
        axios.get('http://localhost:3001/getposts')
            .then(result =>{
                // console.log(result);
                setPosts(result.data)
               
            })
            .catch(err => console.log(err))
    })


    return (
        <div className='home-main'>
           
                {
                    posts.map((post) => 
                        (
                            <Link to={`/viewpost/${post._id}`} className="postlink">
                        <div className="post-display">
                            <img src={`http://localhost:3001/Images/${post.file}`} alt="" srcset="" />
                            <div className="post-dis-text">
                                <h2>{post.title}</h2>
                                <p>{post.description}</p>
                            </div>
                        </div>
                        </Link>
                        )

                )
                }
           
        </div>
    );
}

export default Home;

