import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { loadPosts, savePosts } from "./utils";
import styled from "styled-components";

const Wrapper = styled.div`
  text-align: center;
`;

const PostForm = () => {
  const { index } = useParams();
  const nav = useNavigate();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [date, setDate] = useState(new Date().toLocaleString());

  useEffect(() => {
    if (index !== undefined) {
      const posts = loadPosts();
      const post = posts[index];
      setTitle(post.title);
      setContent(post.content);
      setDate(post.date);
    }
  }, [index]);

  const submit = () => {
    const posts = loadPosts();
    const newpost = { title, content, date };

    if (index !== undefined) {
      posts[index] = newpost;
    } else {
      posts.push(newpost);
    }

    savePosts(posts);
    nav("/post-list");
  };

  const cancel = () => {
    nav("/post-list");
  };

  return (
    <Wrapper>
      <form onSubmit={submit}>
        <input
          type="text"
          placeholder="제목"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <br />
        <textarea
          placeholder="내용"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
          style={{ width: "170px", height: "200px" }}
        />
        <br />
        <button type="submit">저장</button>
        <button onClick={cancel}>취소</button>
      </form>
    </Wrapper>
  );
};

export default PostForm;
