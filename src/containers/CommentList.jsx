import React from "react";

const CommentList = () => {
  return (
    <div className="container mt-5 mb-5">
      <div className="d-flex justify-content-center row">
        <div className="d-flex flex-column col-md-12">
          <div className="d-flex flex-row align-items-center text-left comment-top p-2 bg-white border-bottom px-4">
            <div className="d-flex flex-column ms-3">
              <div className="d-flex flex-row post-title ms-3 ">
                <h2 className="">Add Comment</h2>
                <div className="d-flex flex-row align-items-center align-content-center post-title ms-3 d-none">
                  <span
                    className="me-2 comments small "
                    style={{
                      textDecoration: "underline",
                      textUnderlinePosition: "under",
                      cursor: "pointer",
                    }}
                  >
                    13 comments&nbsp;
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="coment-bottom bg-white p-2 px-4">
            <div className="d-flex flex-row add-comment-section mt-4 mb-4">
              <img
                className="img-fluid img-responsive rounded-circle me-2"
                src="https://i.imgur.com/qdiP4DB.jpg"
                width="60"
                alt="Profile"
              />
              <input
                type="text"
                className="form-control me-3 py-2 shadow-none rounded-pill"
                placeholder=" Add comment"
              />
              <button className="btn btn-primary rounded-pill" type="button">
                Comment
              </button>
            </div>
            <hr />
            {/* Comments */}
            <div className="commented-section mt-2">
              <div className="d-flex flex-row align-items-center commented-user">
                <div className="profile-image">
                  <img
                    className="rounded-circle"
                    src="https://i.imgur.com/t9toMAQ.jpg"
                    width="45"
                    alt="Profile"
                  />
                </div>
                <h4 className="ms-3">Roshan Nyaupane</h4>
                <br />
                <span className=" ms-2 small text-muted">4 hours ago</span>
              </div>
              <div className="comment-text-sm ms-5 ps-1 text-muted">
                <span>
                  The product looks too expensive but if it is negotiable I can
                  consider.
                </span>
              </div>
              <hr />
            </div>
            <div className="commented-section mt-2">
              <div className="d-flex flex-row align-items-center commented-user">
                <div className="profile-image">
                  <img
                    className="rounded-circle"
                    src="https://i.imgur.com/qdiP4DB.jpg"
                    width="45"
                    alt="Profile"
                  />
                </div>
                <h4 className="ms-3">Roshan Nyaupane</h4>
                <br />
                <span className=" ms-2 small text-muted">4 hours ago</span>
              </div>
              <div className="comment-text-sm ms-5 ps-1 text-muted">
                <span>
                  {" "}
                  The product looks too expensive but if it is negotiable I can
                  consider.
                </span>
              </div>
              <hr />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommentList;
