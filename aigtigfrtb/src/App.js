import Home from "./pages/home/Home";
import TopBar from "./components/topbar/TopBar"
import Single from "./pages/single/Single"
import Write from "./pages/write/Write";
import Settings from "./pages/settings/Settings";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MyProfile from "./pages/myprofile/MyProfile";
import { useContext } from "react";
import { Context } from "./context/Context";
// import Community from "./pages/Community";
import CreatePost from "./pages/CreatePost";
import Community from "./pages/Home";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";



function App() {
  const { user } = useContext(Context);
  return (
    <div className="App">
      <BrowserRouter>
        <TopBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="register" element={user ? <Home /> : <Register />} />
          <Route path="login" element={user ? <Home /> : <Login />} />
            
          <Route path="about-us" element={<About />} />
          <Route path="community" element={<Community />} />
          <Route path="create" element={<CreatePost />} />
          <Route path="contact" element={<Contact />} />

          <Route path="write" element={user ? <Write /> : <Register />} />
  
          <Route path="myprofile" element={user ? <MyProfile /> : <Register />} />
          <Route path="settings" element={user ? <Settings /> : <Register />} />
  
          <Route path="/post/:postId" element={<Single />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
