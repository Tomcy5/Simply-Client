import axios from 'axios';
import React,{useState}from 'react';
import './Navbar.css'
import { useNavigate } from 'react-router-dom';

function Addpost(props) {
    const [title,setTitle]=useState()
    const [description,setDescription]=useState()
    const [file,setFile]=useState()

    const navigate = useNavigate()
    
    const handleSubmit =(e)=>{
        e.preventDefault()
        const formData = new FormData()
        formData.append('title',title)
        formData.append('description',description)
        formData.append('file',file)

        axios.post('https://simply-server.onrender.com/addpost',formData, {
  withCredentials: true  // <--- Add this to send cookies!
})
        .then(result => {console.log("login");
            console.log(result.data);
            if(result.data ==='post added success'){
                // if(result.data.role === 'admin'){
                //     navigate('/admin')
                // }
                // else{
                //     navigate('/home')
                // }
                navigate('/home')
            }
          
                   
        })
       .catch(err => console.log(err))

    }

    return (
        <div className='mainpost'>
           <div className="headpost"> <h3>Create Post</h3></div>
            <div className='post'>
                <form action="">
                    <input type="text"
                     name="" id="" placeholder='title'
                     onChange={(e)=>setTitle(e.target.value)}/>
                    <textarea name="desc"
                     id="desc" cols="30" rows="15" 
                     placeholder='description'
                     onChange={(e)=>setDescription(e.target.value)} ></textarea>
                    <input type="file" name="" id=""
                     onChange={(e)=>setFile(e.target.files[0])} />
                    <button id='addpost-btn' onClick={handleSubmit}>Add Post</button>
                </form>
            </div>
           
        </div>
    );
}

export default Addpost;