import "./post.css";
import { MoreVert } from "@mui/icons-material";

function Post() {
  return (
    <>
      <div className="post">
        <div className="postWrapper">
          <div className="postTop">
            <div className="postTopLeft">
              <img
                src="/src/assets/Person/1.jpeg"
                alt=""
                className="postProfileImg"
              />
              <span className="postUserName">Safak Gokulo</span>
              <span className="postDate">2 Days Ago</span>
            </div>
            <div className="postTopRight">
              <MoreVert />
            </div>
          </div>
          <div className="postCenter">
            <span className="postText">hey!! its my first post :</span>
            <img src="/src/assets/Post/1.jpeg" alt="" className="postImg" />
          </div>
          <div className="postBottom">
            <div className="postBottomLeft">
              <img className="likeIcon" src="/src/assets/like.png"></img>
              <img className="likeIcon" src="/src/assets/heart.png"></img>
              <span className="postLikeCounter">32 People Like It</span>
            </div>
            <div className="postBottomRight">
              <span className="postCommentCounter">36 Comments</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Post;
