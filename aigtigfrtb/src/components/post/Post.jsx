import "./post.css";
import {Link} from 'react-router-dom';

export default function Post({post}) {
  const PF = "http://localhost:5000/images/"
  const htmlContent = post.desc;
  const plainText = document.createElement("div");
  plainText.innerHTML = htmlContent;
  const textContent = plainText.innerText;

  return (
    <div className="post card border-4 border-bottom border-info">
      {post.photo && (
        <img className="card-img-top" src={PF + post.photo} alt="" />
      )}
      <div className="card-body text-center">
        <div className="postCats">
          {post.categories.map((c) => (
          <span className="postCat">
            <span className="link">
              {c.name}
            </span>
          </span> 
          ))}
        </div>
        <Link to={`/post/${post._id}`} className="card-title text-dark link">
          <h5>{post.title}</h5>
        </Link>          
        <div className="postInfo">
          <span className="postDate text-center">{new Date(post.createdAt).toDateString()}</span>
        </div>
          <p className="postDesc card-text">{textContent}</p>
      </div>
    </div>
  )
}
