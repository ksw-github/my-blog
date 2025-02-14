export const loadPosts = () => {
  const posts = localStorage.getItem("posts");
  return posts ? JSON.parse(posts) : [];
};

export const savePosts = (posts) => {
  localStorage.setItem("posts", JSON.stringify(posts));
};

export const loadTodos = () => {
  const todos = JSON.parse(localStorage.getItem("todos"));
  return todos ? todos : [];
};

export const saveTodos = (todos) => {
  localStorage.setItem("todos", JSON.stringify(todos));
};
