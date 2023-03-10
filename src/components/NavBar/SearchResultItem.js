import styled from "styled-components";
import { useNavigate } from "react-router-dom";

export default function SearchResultItem({ user, setShowResults }) {
  const navigate = useNavigate();

  return (
    <Container
      onClick={() => {
        setShowResults(false);
        navigate(`/user/${user.id}`);
      }}
    >
      <img src={user.profile_picture} />
      <p>
        {user.user_name}{" "}
        {user.is_followed && <FollowStatus>• following</FollowStatus>}
      </p>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 53px;
  display: flex;
  align-items: center;
  gap: 12px;
  cursor: pointer;
  flex-shrink: 0;
  padding-left: 8px;
  border-radius: 3px;

  &:hover {
    background-color: #dddddd;
  }

  img {
    width: 39px;
    height: 39px;
    border-radius: 304px;
  }

  p {
    font-family: "Lato";
    font-weight: 400;
    font-size: 19px;
    color: #515151;
  }
`;

const FollowStatus = styled.span`
  font-family: "Lato";
  font-weight: 400;
  font-size: 19px;
  color: #c5c5c5;
  font-size: 19px;
`;
