import React from 'react';
import styled from 'styled-components';
import WebDevImg from '../Images/dev.png';

const NavBarContainer = styled.section`
    border-bottom: 2px solid lightgrey;
    color: black;
    display: flex;
    justify-content: space-evenly;
    height: 10vh;
    text-shadow: #ACDEF9 2px 2px;
    width: 100vw;
`

const NavBarSection = styled.div`
    align-items: flex-start;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 10px;
    width: 50vw;
`

const NavBarLinks = styled.div`
    align-items: center;
    display: flex;
    justify-content: center;
    padding: 10px;
    width: 50vw;
`

const NavImage = styled.img`
    max-height: 10vh;
    width: auto;
`

const TitleText = styled.h3`
    font-size: 16px;
    margin: 0px;
`

const LinkText = styled.h2`
    font-size: 20px;
    margin: 8px;
`

const NavBar = () => {
    return(
        <div>
            <NavBarContainer>
                <NavImage src={WebDevImg}/>
                <NavBarSection>
                    <h1>George Caras</h1>
                    <TitleText>Software Engineer</TitleText>
                </NavBarSection>
                <NavBarLinks>
                    <LinkText>Projects</LinkText>
                    <LinkText>GitHub</LinkText>
                    <LinkText>LinkedIn</LinkText>
                </NavBarLinks>
            </NavBarContainer>
        </div>
    );
}

export default NavBar;