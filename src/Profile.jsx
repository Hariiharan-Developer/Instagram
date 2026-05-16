import axios from "axios";
import { useEffect, useState } from "react";

const Profile = () => {
  const [profile, setProfile] = useState({
    username: "",
    profileImage: "",
  });

  useEffect(() => {
    axios
      .get("http://localhost:3000/profile")
      .then((res) => setProfile(res.data))
      .catch((err) => console.log(err));
  }, []);

  const handleOnchange = (e) => {
    setProfile((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleUpdate = async () => {
    try {
      await axios.put("http://localhost:3000/profile", profile);
      alert("Profile updated");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="container py-4">

      <h4 className="mb-4">User Profile</h4>

      {/* PROFILE PREVIEW */}
      {profile.profileImage ? (
        <div className="text-center mb-4">

          <img
            src={profile.profileImage}
            className="rounded-circle"
            style={{
              width: "120px",
              height: "120px",
              objectFit: "cover",
            }}
            alt="profile"
          />

          <h5 className="mt-2 text-muted">
            {profile.username}
          </h5>

        </div>
      ) : (
        <p className="text-muted">Loading...</p>
      )}

      {/* FORM */}
      <div className="mx-auto" style={{ maxWidth: "400px" }}>

        <input
          onChange={handleOnchange}
          value={profile.username}
          className="form-control my-3"
          type="text"
          name="username"
          placeholder="Username"
        />

        <input
          onChange={handleOnchange}
          value={profile.profileImage}
          className="form-control my-3"
          type="text"
          name="profileImage"
          placeholder="Profile Image URL"
        />

        <button
          onClick={handleUpdate}
          className="btn btn-primary w-100"
        >
          Update
        </button>

      </div>
    </div>
  );
};

export default Profile;