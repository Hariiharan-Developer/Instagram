import { useEffect, useState } from "react"

const Post = () => {
const[post , setPost] = useState([])

useEffect(()=>{
  fetch('http://localhost:3000/posts').
  then((res)=>res.json()).
  then((data)=>setPost(data)).
  catch((err)=>console.log(err))
},[])

  return (
    <div className="d-flex justify-content-center">
     
      {post.length >0 ?(
        <div>{post.map((res,key)=>(
          <div className="my-3" key={key}>

            <div className="d-flex my-2">
            <img className="dp rounded-circle" src={res.profileImage} alt="profile" />
            <h5 className="mx-2">{res.username}</h5>
            </div>

            <div>
            <img className="post" src={res.imageUrl} alt="post" />
            </div>
            <div>
            <i className="bi bi-heart"></i>
            <i className="bi bi-chat"></i>
            <i className="bi bi-send"></i>
            </div>
            <div>
              <b>{res.likes} Likes </b> 
            </div>
            <div>{res.caption}</div>
          </div>
        ))}</div>
      ):(<></>)}
      
      </div>
  )
}

export default Post