import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header";
import ToDoList from "./components/todo-list";
import PostIist from "./components/post-list";
import PostItem from "./components/post-item";
import PostForm from "./components/post-form";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/my-blog/" element={<ToDoList />} />
        <Route path="/post-list" element={<PostIist />} />
        <Route path="/post/:index" element={<PostItem />} />
        <Route path="/new-post" element={<PostForm />} />
        <Route path="/edit-post/:index" element={<PostForm />} />
      </Routes>
    </Router>
  );
}

export default App;
