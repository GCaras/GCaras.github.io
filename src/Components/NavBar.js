import React from 'react';
import styled from 'styled-components';
import WebDevImg from '../img/dev.png';

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
    @media (max-width: 750px) {
        align-items: center;
        flex-direction: column;
        height: 20vh;
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
    @media (max-width: 750px) {
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
    justify-content: flex-end;
    padding-right: 50px;
    width: 45vw;
    @media (max-width: 750px) {
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
                <NavBarTitleSection>
                    <NavImage src={WebDevImg}/>
                    <NavBarSection>
                        <NameText>George Caras</NameText>
                        <TitleText>Software Engineer</TitleText>
                    </NavBarSection>
                </NavBarTitleSection>
                <NavBarLinks>
                    <a target='blank' rel='noopener noreferrer' href='https://github.com/GCaras'>
                        <LinkText id='githubLink'>GitHub</LinkText>
                    </a>
                    <a target='blank' rel='noopener noreferrer' href='https://www.linkedin.com/in/george-caras/'>
                        <LinkText id='linkedinLink'>LinkedIn</LinkText>
                    </a>
                    <a target='_blank' rel="noopener noreferrer" href='https://drive.google.com/file/d/1djn9aycPQsKyoNzrWDPhtnh7wciJRdyn/view?usp=sharing'>
                        <LinkText id='resumeLink'>Resume</LinkText>
                    </a>
                </NavBarLinks>
            </NavBarContainer>
        </div>
    );
}

export default NavBar;