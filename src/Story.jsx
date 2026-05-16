import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

const Story = () => {
  const [stories,setStories]=useState([])
  const navigate =useNavigate()
  let total = 0

  useEffect(()=>{
    fetch('http://localhost:3000/stories')
    .then(res=>res.json())
    .then(res=>setStories(res))
    .catch(err=>console.log(err))
  },[])
  return (
     <div className="story mt-3">
      <div className="d-none">{total=stories.length}</div>
      {stories.length>0 ?(
        <div className="d-flex">{stories.map((res,key)=>(
          <div key={key}>
            <div className="stories">
            <img onClick={()=>{navigate(`/story/${res.id}/${total}`)}} className="rounded-circle"src={res.profileImage} alt="story" />
            </div>
            <p className="text-truncate text-center" style={{width:'80px'}}>{res.username}</p>
          </div>
        ))}</div>
      ):(<p>Loading...</p>)}
       
      </div>
  )
}

export default Story