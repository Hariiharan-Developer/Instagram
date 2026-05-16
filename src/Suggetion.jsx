import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Suggetion = () => {
  const [profile, setProfile] = useState(null);
  const [suggestion, setSuggetion] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    fetch("/dummyData.json")
      .then((res) => res.json())
      .then((res) => setProfile(res.profile))
      .catch((err) => console.log(err));

    fetch("/dummyData.json")
      .then((res) => res.json())
      .then((res) => setSuggetion(res.suggetion))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="d-none d-lg-block mt-4">

      {/* PROFILE SECTION */}
      {profile ? (
        <div className="d-flex align-items-center mb-3">

          <img
            className="dp rounded-circle"
            src={profile.profileImage}
            alt="user"
            style={{ width: "45px", height: "45px", objectFit: "cover" }}
          />

          <div className="ms-2">
            <h6 className="mb-0">{profile.username}</h6>
            <small className="text-muted">My account</small>
          </div>

          <small
            onClick={() => navigate("/profile")}
            className="ms-auto text-primary"
            style={{ cursor: "pointer" }}
          >
            Switch
          </small>
        </div>
      ) : (
        <p>Loading...</p>
      )}

      {/* HEADER */}
      <div className="d-flex mb-2">
        <small className="text-muted">Suggested for you</small>
        <small className="ms-auto fw-bold">See All</small>
      </div>

      {/* SUGGESTIONS */}
      {suggestion.length > 0 ? (
        suggestion.map((res, key) => (
          <div
            className="d-flex align-items-center mb-2"
            key={key}
          >
            <img
              className="rounded-circle"
              src={res.profileImage}
              alt=""
              style={{
                width: "40px",
                height: "40px",
                objectFit: "cover",
              }}
            />

            <div className="ms-2">
              <h6 className="mb-0 small">{res.username}</h6>
              <small className="text-muted">Suggested for you</small>
            </div>

            <b
              className="ms-auto text-primary small"
              style={{ cursor: "pointer" }}
            >
              Follow
            </b>
          </div>
        ))
      ) : (
        <p className="text-muted">Loading...</p>
      )}

    </div>
  );
};

export default Suggetion;