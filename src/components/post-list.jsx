import styled from "styled-components";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { loadPosts } from "../components/utils";

const Wrapper = styled.div`
  text-align: center;
  width: 500px;
  margin: 0 auto;
`;

const PostIist = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const posts = loadPosts();
    setPosts(posts);
  }, []);

  return (
    <Wrapper>
      <h1>Post-list</h1>
      <form>
        <Link to="/new-post">글쓰기</Link>
        {posts.length === 0 ? (
          <p>게시글이 없습니다</p>
        ) : (
          posts.map((post, index) => (
            <div
              key={index}
              style={{
                backgroundColor: "rgb(0,0,0,0.1)",
              }}
            >
              <Link to={`/post/${index}`}>
                <h3>{post.title}</h3>
                <p>{post.date}</p>
              </Link>
            </div>
          ))
        )}
      </form>
    </Wrapper>
  );
};

export default PostIist;
