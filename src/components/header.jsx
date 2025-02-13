import { Link } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 50px;
  padding: 10px;
  background-color: rgb(0, 0, 0, 0.2);
`;

const Header = () => {
  return (
    <Wrapper>
      <Link to="/">Home</Link>
      <Link to="/post-list">Post</Link>
    </Wrapper>
  );
};

export default Header;
