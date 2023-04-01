import "./posts.css"
import Post from "../post/Post"

export default function Posts({posts}) {
  return (
    <div className="posts justify-content-center">
      {posts.map(p=>(
        <Post post={p} className="card" />
      ))}
    </div>
  )
}
