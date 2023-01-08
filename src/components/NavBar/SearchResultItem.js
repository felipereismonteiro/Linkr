import styled from "styled-components";
import { useNavigate } from "react-router-dom";

export default function SearchResultItem({ user, setShowResults }) {
    const navigate = useNavigate();

    return(
        <Container onClick={() => {
            setShowResults(false)
            navigate(`/user/${user.id}`);
          }}>
            <img src={user.profile_picture} />
            <p>{user.user_name}</p>
        </Container>
    )
}

const Container = styled.div`
    height: 42px;
    display: flex;
    align-items: center;
    gap: 12px;
    cursor: pointer;

    img {
        width: 39px;
        height: 39px;
        border-radius: 304px;
    }

    p {
        font-family: 'Lato';
        font-weight: 400;
        font-size: 19px;
        color: #515151;
    }
`