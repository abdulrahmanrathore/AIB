import { useContext, useEffect, useState } from "react";
import "./write.css";
import JoditEditor from 'jodit-react';
import axios from "axios";
import { Context } from "../../context/Context";

export default function Write() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [cat, setCat] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [file, setFile] = useState(null);
  const { user } = useContext(Context);


  useEffect(() => {
    const getCat = async () => {
      const res = await axios.get("/categories");
      setCat(res.data)
      console.log(res.data);
    }
    getCat()
  }, [])

  const editorConfig = {
    height: '500px',
    width: '1079px',
    placeholder: 'Tell your story...', 
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPost = {
      username: user.username,
      title,
      categories : selectedCategory,
      desc,
    };
    if (file) {
      const data =new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      newPost.photo = filename;
      try {
        await axios.post("/upload", data);
      } catch (err) {}
    }
    try {
      const res = await axios.post("/posts", newPost);
      window.location.replace("/post/" + res.data._id);
    } catch (err) {}
  };
  return (
    <div className="write">
      {file && (
        <img className="writeImg" src={URL.createObjectURL(file)} alt="" />
      )}
      <form className="writeForm" onSubmit={handleSubmit}>
        <div className="writeFormGroup container position-relative">
          <label htmlFor="fileInput">
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
            placeholder="Title"
            className="writeInput"
            autoFocus={true}
            onChange={e=>setTitle(e.target.value)}
          />
          <div className="writeCat position-absolute bottom-100 start-0">
            <select className="form-select" value={selectedCategory} onChange={e=>setSelectedCategory(e.target.value)} aria-label="Default select example">
              <option selected>Select Category</option>
              {cat.map((c) => (
                <option value={c.id}>{c.name}</option>
              ))}
            </select>
          </div>
        </div>
        
        <div className="writeFormGroup">
            <JoditEditor value={desc} config={editorConfig}  onChange={desc=>setDesc(desc)} />
        </div>
        
        <button className="writeSubmit" type="submit">
          Publish
        </button>
      </form>
    </div>
  );
}