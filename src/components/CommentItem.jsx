import React from "react";
import default_user from "../assets/defaults/user.png";

const CommentItem = (props) => {
  const { text, date_added, user } = props;

  const getFormattedDate = (dateString) => {
    const formattedDate = new Date(dateString).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
    });
    return formattedDate;
  };
console.log(user,"Iam comment user");
  return (
    <div>
      <div className="commented-section mt-2">
        <div className="d-flex flex-row align-items-center commented-user">
          <div className="profile-image">
            <img
              className="rounded-circle"
              src={`http://localhost:8000${user.avatar ? user.avatar : default_user}`}
              width="45"
              alt="Profile"
            />
          </div>
          <h6 className="ms-3">{user.username ? user.username : user.email}</h6>
          <br />
          <span className=" ms-2 small text-muted">
            {getFormattedDate(date_added)}
          </span>
        </div>
        <div className="comment-text-sm ms-5 ps-1 text-muted">
          <span>{text}</span>
        </div>
        <hr />
      </div>
    </div>
  );
};

export default CommentItem;
