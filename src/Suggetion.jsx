import { useEffect, useState } from "react"

const Suggetion = () => {
  const [profile,setProfile] = useState(null)
  const [suggestion,setSuggetion]= useState([])

  useEffect(()=>{
    fetch('http://localhost:3000/profile')
      .then(res=>res.json())
      .then(res=>setProfile(res))
      .catch(err=>console.log(err))
    

    fetch('http://localhost:3000/suggetion')
    .then(res=>res.json())
    .then(res=>setSuggetion(res))
    .catch(err=>console.log(err))
  },[])
  return (
    <div className="suggetion w-75" >
      {profile?(<div className="d-flex mt-4">
        <img className="dp rounded-circle mx-2" src={profile.profileImage} alt="user" />
        <h5>{profile.username}</h5>
        <small className="ms-auto text-primary">switch</small>
        </div>)
        :(<p>Loading...</p>)
      }

      <div className="d-flex mt-3">
        <p>Suggested for you</p>
        <b className=" ms-auto">See All</b>
        </div>
        {suggestion.length >0 ? (
      <div className="mt-2">
          {suggestion.map((res,key)=>(
            <div className="d-flex my-4" key={key}>
              <img className="dp rounded-circle mx-3" src={res.profileImage} alt="" />
              <h5>{res.username}</h5>
              <b className="ms-auto text-primary">follow</b>
            </div>
          ))}</div>
        ) :(<p>Loading...</p>)}
      


      
      
     
      </div>
  )
}

export default Suggetion