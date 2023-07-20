import React, { useEffect, useState } from "react";
import CommentItem from "../components/CommentItem";
import { fetchComments, fetchComment } from "../redux/actions/ashop";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import LoadingSpinner from "../components/LoadingSpinner";

import default_user from "../assets/defaults/user.png";

const CommentList = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [totalComments, setTotalComments] = useState([]);

  const comments = useSelector((state) => state.ashop.comments);

  useEffect(() => {
    const fetchCommentsData = async () => {
      try {
        const commentsData = await dispatch(fetchComments(id));
        setTotalComments(commentsData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching comments:", error);
        setLoading(false);
      }
    };

    fetchCommentsData();
  }, [dispatch, id]);

  if (loading) {
    return <LoadingSpinner />;
  } else if (!loading) {
    return (
      <div>
        <div className="container mt-5 mb-5">
          <div className="d-flex justify-content-center row">
            <div className="d-flex flex-column col-md-12">
              <div className="d-flex flex-row align-items-center text-left comment-top p-2 bg-white border-bottom px-4">
                <div className="d-flex flex-column ms-3">
                  <div className="d-flex flex-row post-title ms-3 ">
                    <h2 className="">Add Comments</h2>
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
                    src={default_user}
                    width="60"
                    alt="Profile"
                  />
                  <input
                    type="text"
                    className="form-control me-3 py-2 shadow-none rounded-pill"
                    placeholder=" Add comment"
                  />
                  <button
                    className="btn btn-primary rounded-pill"
                    type="button"
                  >
                    Comment
                  </button>
                </div>
                <hr />

                {comments.map((comment, index) => {
                  return (
                    <CommentItem
                      text={comment.text}
                      user={comment.user}
                      date_added={comment.date_added}
                      key={index}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return <LoadingSpinner />;
  }
};

export default CommentList;
