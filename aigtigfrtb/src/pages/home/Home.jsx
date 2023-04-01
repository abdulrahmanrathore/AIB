import { useEffect, useState } from "react";
import Header from "../../components/header/Header";
import Posts from "../../components/posts/Posts";
import Sidebar from "../../components/sidebar/Sidebar";
import "./home.css";
import axios from "axios";
import { useLocation } from "react-router-dom";

export default function Home() {
  const [posts, setPosts] = useState([]);
  const {search} = useLocation();

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("/posts"+search);
      setPosts(res.data)
      // console.log(res);
    }
    fetchPosts();
  }, [search])
  
  return (
    <>
        <Header />
      {/* <div className="home flex">
            <Posts />
            <Sidebar className="sidebar" />
          </div> 
      */}
        <div className="row me-0">
          <div className="col-md-8">
            <div className="container m-3 pb-3">
              <Posts posts={posts} />
            </div>
          </div>
          <div className="col-md-4 me-0"><Sidebar className="sidebar" /></div>
        </div>
    </>
  )
}
