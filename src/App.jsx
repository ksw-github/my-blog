import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header";
import ToDoList from "./components/todo-list";
import PostIist from "./components/post-list";
import PostItem from "./components/post-item";
import PostForm from "./components/post-form";
import { URL } from "./router/constants";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path={URL} element={<ToDoList />} />
        <Route path={`${URL}post-list`} element={<PostIist />} />
        <Route path={`${URL}post/:index`} element={<PostItem />} />
        <Route path={`${URL}new-post`} element={<PostForm />} />
        <Route path={`${URL}edit-post/:index`} element={<PostForm />} />
      </Routes>
    </Router>
  );
}

export default App;
