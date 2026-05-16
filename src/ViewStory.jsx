import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const ViewStory = () => {
  const [story, setStory] = useState(null);
  const navigate = useNavigate();

  const { id, total } = useParams();

  useEffect(() => {
    const storyId = Number(id);
    const totalCount = Number(total);

    if (storyId > totalCount || storyId <= 0) {
      navigate("/");
      return;
    }

    fetch(`http://localhost:3000/stories/${storyId}`)
      .then((res) => res.json())
      .then((res) => setStory(res))
      .catch((err) => console.log(err));
  }, [id, total, navigate]);

  return (
    <div className="container-fluid vh-100 d-flex justify-content-center align-items-center bg-dark">

      {story ? (
        <div className="d-flex align-items-center gap-3">

          {/* LEFT */}
          <button
            className="btn btn-light btn-sm"
            onClick={() =>
              navigate(`/story/${Number(id) - 1}/${total}`)
            }
          >
            <i className="bi bi-arrow-left"></i>
          </button>

          {/* STORY IMAGE */}
          <img
            src={story.story}
            alt="story"
            className="img-fluid rounded"
            style={{
              maxHeight: "90vh",
              maxWidth: "100%",
              objectFit: "contain",
            }}
          />

          {/* RIGHT */}
          <button
            className="btn btn-light btn-sm"
            onClick={() =>
              navigate(`/story/${Number(id) + 1}/${total}`)
            }
          >
            <i className="bi bi-arrow-right"></i>
          </button>

        </div>
      ) : (
        <p className="text-white">Loading...</p>
      )}

    </div>
  );
};

export default ViewStory;