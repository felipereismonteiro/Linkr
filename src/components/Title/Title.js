import styled from "styled-components"

export default function Title({title, showHashtag}) {
    return(
        <Header>{showHashtag && "#"}{title}</Header>
    )
}

const Header = styled.h1`
    font-family: 'Oswald';
    font-weight: 700;
    font-size: 43px;
    color: #FFFFFF;
    font-family: 'Oswald', sans-serif;
    margin-bottom: 43px;
`