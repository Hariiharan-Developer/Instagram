import { useEffect, useState } from "react"
import Story from "./Story"

const Post = () => {
const[post , setPost] = useState([])

useEffect(()=>{
  fetch('http://localhost:3000/posts').
  then((res)=>res.json()).
  then((data)=>setPost(data)).
  catch((err)=>console.log(err))
},[])

  return (
    <div className="">
      <div>
        { 
          
        }
      </div>
      </div>
  )
}

export default Post