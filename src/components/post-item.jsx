import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { loadPosts, savePosts } from "./utils";

const Wrapper = styled.div`
  text-align: center;
  width: 500px;
  margin: 0 auto;
  // background-color: rgb(0, 0, 0, 0.1);
  // border: 1px solid black;
`;

const Title = styled.div`
  text-align: center;
  background-color: rgb(0, 0, 0, 0.2);
  padding: 10px;
`;

const Text = styled.div`
  text-align: center;
  background-color: rgb(0, 0, 0, 0.1);
  padding: 10px;
`;

const PostItem = () => {
  const { index } = useParams();
  const nav = useNavigate();
  const [post, setPost] = useState(null);

  useEffect(() => {
    const posts = loadPosts();
    const postIndex = parseInt(index, 10);
    if (postIndex >= 0 && postIndex < posts.length) {
      setPost(posts[postIndex]);
    } else {
      setPost(null);
    }
  }, [index]);

  if (!post) {
    return <p>게시글을 찾을 수 없습니다</p>;
  }

  const del = () => {
    const posts = loadPosts();
    posts.splice(index, 1);
    savePosts(posts);
    nav("/post-list");
  };

  const edit = () => {
    nav(`/edit-post/${index}`);
  };

  const cancel = () => {
    nav("/post-list");
  };

  return (
    <Wrapper>
      <h1>Post</h1>
      <div
        style={{ border: "1px solid gray", backgroundColor: "rgb(0,0,0,0.1)" }}
      >
        <Title>{post.title}</Title>
        <Text>{post.content}</Text>
        <p>{post.date}</p>
        <button type="button" onClick={edit}>
          수정
        </button>
        <button type="button" onClick={del}>
          삭제
        </button>
        <button type="button" onClick={cancel}>
          이전
        </button>
      </div>
    </Wrapper>
  );
};

export default PostItem;
