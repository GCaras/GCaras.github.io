import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import WebDevImg from '../Images/dev.png';

const NavBarContainer = styled.section`
    border-bottom: 2px solid lightgrey;
    color: black;
    display: flex;
    justify-content: space-evenly;
    height: 10.2vh;
    margin: 0 auto;
    margin-top: 1vh;
    text-shadow: #ACDEF9 2px 2px 3px;
    width: 98vw;
    @media (max-width: 600px) {
        align-items: center;
        flex-direction: column;
        height: 15vh;
        justify-content: center;
    }
    @media (max-width: 400px) {
        align-items: center;
        flex-direction: column;
        height: 30vh;
        justify-content: center;
    }
`

const NavBarTitleSection = styled.div`
    display: flex;
    padding-left: 20px;
    width: 50vw;
    @media (max-width: 600px) {
        padding-left: 0px;
    }
    @media (max-width: 400px) {
        align-items: center;
        flex-direction: column;
        height: 20vh;
        justify-content: center;
        width: 100vw;
    }
`

const NavBarSection = styled.div`
    align-items: flex-start;
    display: flex;
    flex-direction: column;
    justify-content: center;
    @media (max-width: 400px) {
        align-items: center;
        flex-direction: column;
        justify-content: center;
        width: 100vw;
    }
`

const NavBarLinks = styled.div`
    align-items: center;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-end;
    padding-right: 50px;
    width: 50vw;
    @media (max-width: 600px) {
        padding-right: 0px;
        justify-content: center;
        width: 100vw;
    }
    @media (max-width: 400px) {
        flex-wrap: wrap;
    }
`

const NavImage = styled.img`
    margin: 0px 10px;
    max-height: 10vh;
    width: auto;
`

const NameText = styled.h1`
    font-size: 24px;
    margin: 0px;
`

const TitleText = styled.h3`
    font-size: 16px;
    margin: 0px;
`

const LinkText = styled.h2`
    font-size: 20px;
    margin: 15px;
    text-shadow: none;
    &:hover{
        transform:scale(1.1);
        z-index:1;
    }
    @media (max-width: 400px) {
        margin: 5px;
    }
`

const NavBar = () => {
    return(
        <div>
            <NavBarContainer>
                <Link to='/'>
                    <NavBarTitleSection>
                        <NavImage src={WebDevImg}/>
                        <NavBarSection>
                            <NameText>George Caras</NameText>
                            <TitleText>Software Engineer</TitleText>
                        </NavBarSection>
                    </NavBarTitleSection>
                </Link>
                <NavBarLinks>
                    <Link to='/projects/'>
                        <LinkText id="projectsLink">Projects</LinkText>
                    </Link>
                    <LinkText id='githubLink'>GitHub</LinkText>
                    <LinkText id='linkedinLink'>LinkedIn</LinkText>
                    <a target='_blank' href='https://drive.google.com/file/d/15I8rDso6evaZ274yWDtWjiA7xkaAvNSj/view'>
                        <LinkText id='resumeLink'>Resume</LinkText>
                    </a>
                </NavBarLinks>
            </NavBarContainer>
        </div>
    );
}

export default NavBar;