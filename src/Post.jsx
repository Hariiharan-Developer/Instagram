import { useEffect, useState } from "react";

const Post = () => {
  const [post, setPost] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/posts")
      .then((res) => res.json())
      .then((data) => setPost(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="container py-3">
      <div className="row justify-content-center">
        <div className="col-12 col-md-8 col-lg-6">

          {post.length > 0 ? (
            post.map((res, key) => (
              <div
                key={key}
                className="card border-0 shadow-sm mb-4 rounded-3"
              >

                {/* HEADER */}
                <div className="card-header bg-white border-0 d-flex align-items-center">
                  <img
                    src={res.profileImage}
                    className="rounded-circle"
                    style={{
                      width: "42px",
                      height: "42px",
                      objectFit: "cover",
                    }}
                    alt="profile"
                  />
                  <h6 className="mb-0 ms-2 fw-semibold">
                    {res.username}
                  </h6>
                </div>

                {/* IMAGE */}
                <img
                  src={res.imageUrl}
                  className="w-100"
                  style={{
                    maxHeight: "550px",
                    objectFit: "cover",
                  }}
                  alt="post"
                />

                {/* ACTIONS */}
                <div className="card-body py-2">

                  <div className="d-flex gap-3 fs-5">
                    <i className="bi bi-heart post-icon"></i>
                    <i className="bi bi-chat post-icon"></i>
                    <i className="bi bi-send post-icon"></i>
                  </div>

                  <div className="mt-2">
                    <b>{res.likes} likes</b>
                  </div>

                  <div className="text-muted small mt-1">
                    <b className="text-dark">{res.username}</b>{" "}
                    {res.caption}
                  </div>

                </div>

              </div>
            ))
          ) : (
            <p className="text-center mt-5 text-muted">
              Loading posts...
            </p>
          )}

        </div>
      </div>
    </div>
  );
};

export default Post;