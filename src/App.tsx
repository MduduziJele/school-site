import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Label from "./components/Label";
import Posts from "./components/Posts";
import Aps from "./components/Aps";
import Portal from "./components/Portal";
import { Contact } from "./components/Contact";
import { Users } from "./components/Users";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import AboutUsPortal from "./components/AboutUsPortal";
import PostDetail from "./components/PostDetail";
import { BlogCard } from "./components/BlogCard";
import GalleryPortal from "./components/GalleryPortal";
import AddNewUser from "./components/AddNewUser";
import { CreatePost } from "./components/CreatePost";
import { UpdatePost } from "./components/UpdatePost";
import Update from "./components/Update";
import Delete from "./components/Delete";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/label" element={<Label />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/post/:id" element={<PostDetail />} />
        <Route path="/apscalculator" element={<Aps />} />
        <Route path="/login" element={<Login />} />
        <Route path="/portal" element={<Portal />}>
          <Route index path="dashboard" element={<Dashboard />} />
          <Route path="blog" element={<BlogCard />} />
          <Route path="about" element={<AboutUsPortal />} />
          <Route path="contact" element={<Contact />} />
          <Route path="gallery" element={<GalleryPortal />} />
          <Route path="users" element={<Users />} />
          <Route path="users/add" element={<AddNewUser />} />
          <Route path="createpost" element={<CreatePost />} />
          <Route path="update" element={<UpdatePost />} />
          <Route path="users/update/:id" element={<Update />} />
          <Route path="users/delete/:id" element={<Delete />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
