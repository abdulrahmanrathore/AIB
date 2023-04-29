import axios from "axios";
import { useContext, useEffect, useState } from "react";
import JoditEditor from 'jodit-react';
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import "./singlePost.css";

export default function SinglePost(props) {
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  const [post, setPost] = useState({});
  const PF = "http://localhost:5000/images/";
  const { user } = useContext(Context);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [updateMode, setUpdateMode] = useState(false);
  const [file, setFile] = useState(null);


  const editorConfig = {
    height: '500px',
    width: '1079px', 
  };

  useEffect(() => {
    const getPost = async () => {
      const res = await axios.get("/posts/" + path);
      setPost(res.data);
      setTitle(res.data.title);
      setDesc(res.data.desc);
    };
    getPost();
  }, [path]);

  useEffect(() => {
    props.onDataReceived(updateMode);
  }, [updateMode, props]);

  const handleDelete = async () => {
    try {
      await axios.delete(`/posts/${post._id}`, {
        data: { username: user.username },
      });
      window.location.replace("/");
    } catch (err) {}
  };

  const handleUpdate = async () => {
    const updatedPost = {
      username: user.username,
      title,
      desc,
    }
    if (file) {
      const data =new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      updatedPost.photo = filename;
      try {
        await axios.post("/upload", data);
      } catch (err) {}
    }
    try {
      await axios.put(`/posts/${post._id}`, updatedPost);
      setUpdateMode(false)
    } catch (err) {};
    
  };

  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        {updateMode ? (file && (
        <img className="writeImg" src={URL.createObjectURL(file)} alt="" />
      )):(post.photo && (
          <img src={PF + post.photo} alt="" className="singlePostImg" />
        ))}
        {updateMode ? (
           <>
         <label className="label" htmlFor="fileInput">
           <i className="writeIcon fas fa-plus"></i>
         </label>
         <input
           type="file"
           id="fileInput"
           style={{ display: "none" }}
           onChange={(e) => setFile(e.target.files[0])}
         />
          <input
            type="text"
            value={title}
            className="singlePostTitleInput"
            autoFocus
            onChange={(e) => setTitle(e.target.value)}
          />
           </>
        ) : (
          <h1 className="singlePostTitle">
            {title}
            { post.username === user?.username && (
              <div className="singlePostEdit">
                <i
                  className="singlePostIcon far fa-edit"
                  onClick={() => setUpdateMode(true)}
                ></i>
                <i
                  className="singlePostIcon far fa-trash-alt"
                  onClick={handleDelete}
                ></i>
              </div>
            )}
          </h1>
        )}
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author:
            <Link to={`/?user=${post.username}`} className="link">
              <b> {post.username}</b>
            </Link>
          </span>
          <span className="singlePostDate">
            {new Date(post.createdAt).toDateString()}
          </span>
        </div>
        {updateMode ? (
          <div className="writeFormGroup">
            <JoditEditor value={desc} config={editorConfig}  onChange={desc=>setDesc(desc)} />
          </div>
        ) : (
            <div className="singlePostDesc" dangerouslySetInnerHTML={{__html: post.desc} } />
        )}
        {updateMode && (
          <button className="singlePostButton" onClick={handleUpdate}>
            Update
          </button>
        )}
      </div>
    </div>
  );
}