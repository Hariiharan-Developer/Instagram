import { useEffect, useState } from "react"

const Story = () => {
  const [stories,setStories]=useState([])

  useEffect(()=>{
    fetch('http://localhost:3000/stories')
    .then(res=>res.json())
    .then(res=>setStories(res))
    .catch(err=>console.log(err))
  },[])
  return (
     <div className="story mt-3">
      {stories.length>0 ?(
        <div className="d-flex">{stories.map((res,key)=>(
          <div key={key}>
            <div className="stories">
            <img className="rounded-circle"src={res.profileImage} alt="story" />
            </div>
            <p className="text-truncate text-center" style={{width:'80px'}}>{res.username}</p>
          </div>
        ))}</div>
      ):(<p>Loading...</p>)}
       
      </div>
  )
}

export default Story