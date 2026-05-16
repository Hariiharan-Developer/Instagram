import { useEffect, useState } from "react"
import {  useParams ,useNavigate,Link} from "react-router-dom"

const ViewStory = () => {
    const[story,setStory]=useState(null)
    const navigate =useNavigate()
    const {id,total} = useParams()
    useEffect(()=>{
         if(id>total || id<=0){
        navigate('/')}
        fetch(`http://localhost:3000/stories/${id}`)
        .then(res=>res.json())
        .then(res=>setStory(res))
        .catch(err=>console.log(err))
    }
    
    ,[id,total])
    
   
   
  return (
    <div>

    {story ?
        <div className="d-flex justify-content-center align-items-center">
            <Link to={`http://localhost:5173/story/${Number(id)-1}/${total}`}><i className="bi bi-arrow-left-square-fill"></i></Link>
            <img className="vh-100" src={story.story} alt="story" />
            <Link to={`http://localhost:5173/story/${Number(id)+1}/${total}`}><i className="bi bi-arrow-right-square-fill"></i></Link>
        </div>
    :<p>Loading...</p>}
    </div>
  )
}

export default ViewStory