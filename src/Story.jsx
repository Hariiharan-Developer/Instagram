import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Story = () => {
  const [stories, setStories] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:3000/stories")
      .then((res) => res.json())
      .then((res) => setStories(res))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="container mt-3 overflow-hidden">

      {stories.length > 0 ? (
        <div
          className="d-flex flex-nowrap gap-3 py-2"
          style={{ overflowX: "auto" }}
        >

          {stories.map((res, key) => (
            <div
              key={key}
              className="text-center flex-shrink-0"
              style={{ width: "75px" }}
            >

              <div
                className="stories"
                onClick={() =>
                  navigate(`/story/${res.id}/${stories.length}`)
                }
                style={{ cursor: "pointer" }}
              >
                <img
                  src={res.profileImage}
                  alt="story"
                  className="rounded-circle"
                />
              </div>

              <p className="small text-truncate mt-1 mb-0">
                {res.username}
              </p>

            </div>
          ))}

        </div>
      ) : (
        <p className="text-center text-muted">Loading...</p>
      )}
    </div>
  );
};

export default Story;