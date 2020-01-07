import React from 'react';
import styled from 'styled-components';
import WebDevImg from '../Images/dev.png';

const NavBarContainer = styled.section`
    border-bottom: 2px solid lightgrey;
    color: black;
    display: flex;
    justify-content: space-evenly;
    height: 10.2vh;
    margin: 0 auto;
    text-shadow: #ACDEF9 2px 2px;
    width: 98vw;
    @media (max-width: 600px) {
        align-items: center;
        flex-direction: column;
        height: 15vh;
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
`

const NavBarSection = styled.div`
    align-items: flex-start;
    display: flex;
    flex-direction: column;
    justify-content: center;
`

const NavBarLinks = styled.div`
    align-items: center;
    display: flex;
    justify-content: flex-end;
    padding-right: 50px;
    width: 50vw;
    @media (max-width: 600px) {
        padding-right: 0px;
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
    margin: 8px;
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
                    <LinkText>Projects</LinkText>
                    <LinkText>GitHub</LinkText>
                    <LinkText>LinkedIn</LinkText>
                </NavBarLinks>
            </NavBarContainer>
        </div>
    );
}

export default NavBar;