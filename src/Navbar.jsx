const Navbar = () => {
  return (
        <div className="d-flex flex-column position-fixed gap-3">
        <img src="/public/Instagram_logo.svg.png" style={{width:'180px'}} />
        <div> <i className="bi bi-house-door"></i> Home</div>
        <div> <i className="bi bi-play-btn"></i> Reels</div>
        <div> <i className="bi bi-send"></i> Message</div>
        <div> <i className="bi bi-search"></i> Search</div>
        <div> <i className="bi bi-compass"></i> Explore</div>
        <div> <i className="bi bi-suit-heart"></i> Notification</div>
        <div> <i className="bi bi-plus-square"></i> Create</div>
        <div> <i className="bi bi-person-circle"></i> Profile</div>

        <div className="d-flex flex-column position-fixed bottom-0 gap-3">
        <div> <i className="bi bi-list"></i> More</div>
        <div> <i className="bi bi-threads"></i> Also from meta</div>
        </div>
      </div>
      
  )
}

export default Navbar