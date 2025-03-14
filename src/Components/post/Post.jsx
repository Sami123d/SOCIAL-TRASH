import "./post.css";
import { MoreVert } from "@mui/icons-material";
import { Users } from "../../dummyData";
import {useState} from "react"
function Post({post}) {
 const user =  Users.filter((user)=> user.id === post.id)
 const [like,setLike] = useState(post.like)//2
 const [isLiked,setIsLiked] = useState(false)

 const likeHandler =()=>{
   setLike(isLiked ? like-1 : like+1)
   setIsLiked(!isLiked)
 }

 return (
    <>
      <div className="post">
        <div className="postWrapper">
          <div className="postTop">
            <div className="postTopLeft">
              <img
                src={user[0].profilePicture}
                alt=""
                className="postProfileImg"
              />
              <span className="postUserName">{user[0]?.username}</span>
              <span className="postDate">{post.date}</span>
            </div>
            <div className="postTopRight">
              <MoreVert />
            </div>
          </div>
          <div className="postCenter">
            <span className="postText">{post.desc}</span>
            <img src={post?.photo} alt="" className="postImg" />
          </div>
          <div className="postBottom">
            <div className="postBottomLeft">
              <img className="likeIcon" src="/src/assets/like.png" onClick={likeHandler}></img>
              <img className="likeIcon" src="/src/assets/heart.png"></img>
              <span className="postLikeCounter">{like} people like it</span>
            </div>
            <div className="postBottomRight">
              <span className="postCommentCounter">{post?.comment === 1 ? post?.comment + " Comment" : post?.comment + " Comments"}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Post;
