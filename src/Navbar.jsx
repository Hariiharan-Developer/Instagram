import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div className="sidebar d-none d-md-flex flex-column gap-3">

      <img
        src="/Instagram_logo.svg.png"
        className="img-fluid mb-3 logo"
        alt="logo"
      />

      <div className="nav-item">
        <i className="bi bi-house-door"></i>
        <span>Home</span>
      </div>

      <div className="nav-item">
        <i className="bi bi-play-btn"></i>
        <span>Reels</span>
      </div>

      <div className="nav-item">
        <i className="bi bi-send"></i>
        <span>Message</span>
      </div>

      <div className="nav-item">
        <i className="bi bi-search"></i>
        <span>Search</span>
      </div>

      <div className="nav-item">
        <i className="bi bi-compass"></i>
        <span>Explore</span>
      </div>

      <div className="nav-item">
        <i className="bi bi-suit-heart"></i>
        <span>Notification</span>
      </div>

      <div className="nav-item">
        <i className="bi bi-plus-square"></i>
        <span>Create</span>
      </div>

      <div className="nav-item" onClick={() => navigate("/profile")}>
        <i className="bi bi-person-circle"></i>
        <span>Profile</span>
      </div>

      <div className="mt-auto nav-item">
        <i className="bi bi-list"></i>
        <span>More</span>
      </div>

    </div>
  );
};

export default Navbar;