import React, { useEffect, useState } from "react";
import CommentItem from "../components/CommentItem";
import { fetchComments, fetchComment } from "../redux/actions/ashop";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import LoadingSpinner from "../components/LoadingSpinner";
import { postComment } from "../redux/actions/ashop";
import default_user from "../assets/defaults/user.png";

const CommentList = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [totalComments, setTotalComments] = useState([]);
  const [form_comment, setForm_comment] = useState("");

  const comments = useSelector((state) => state.ashop.comments);
  useEffect(() => {
    const fetchCommentsData = async () => {
      try {
        const commentsData = await dispatch(fetchComments(id));
        console.log(comments);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching comments:", error);
        setLoading(false);
      }
    };

    fetchCommentsData();
  }, [dispatch, id]);

  const handleSubmit = () => {
    console.log(form_comment);
    const formData = new FormData();
    formData.append("text", form_comment);
    dispatch(postComment({ id, formData }));

    setForm_comment("");

    dispatch(fetchComments(id));
  };
  if (loading) {
    return <LoadingSpinner />;
  } else if (!loading) {
    return (
      <div>
        <div className="container mt-5 mb-5">
          <div className="d-flex justify-content-center row">
            <div className="d-flex flex-column col-md-12">
              <div className="flex-row p-2 px-4 text-left bg-white d-flex align-items-center comment-top border-bottom">
                <div className="d-flex flex-column ms-3">
                  <div className="flex-row d-flex post-title ms-3 ">
                    <h2 className="">Add Comments</h2>
                    <div className="flex-row d-flex align-items-center align-content-center post-title ms-3 d-none">
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
              <div className="p-2 px-4 bg-white coment-bottom">
                <div className="flex-row mt-4 mb-4 d-flex add-comment-section">
                  <img
                    className="img-fluid img-responsive rounded-circle me-2"
                    src={default_user}
                    width="60"
                    alt="Profile"
                  />
                  <input
                    type="text"
                    value={form_comment}
                    onChange={(e) => setForm_comment(e.target.value)}
                    className="py-2 shadow-none form-control me-3 rounded-pill"
                    placeholder=" Add comment"
                  />
                  <button
                    className="btn btn-primary rounded-pill"
                    type="button"
                    onClick={handleSubmit}
                  >
                    Comment
                  </button>
                </div>
                <hr />

                {Array.isArray(comments) ? (
                  comments.map((comment, index) => (
                    <CommentItem
                      text={comment.text}
                      user={comment.user}
                      date_added={comment.date_added}
                      key={index}
                    />
                  ))
                ) : (
                  <p>No comments found.</p>
                )}
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
