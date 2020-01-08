import React from 'react';
import styled from 'styled-components';
import ContactCard from './ContactCard'

const IntroContainer = styled.section`
    align-items: center;
    display: flex;
    text-shadow: #ACDEF9 2px 2px 3px;
    @media(max-width: 800px) {
        padding: 20px 10px;
        padding-right: 0px;
    }
`

const Introduction = styled.section`
    align-items: center;
    width: 64vw;
    justify-content: center;
    padding-right: 100px;
`

const IntroHeader = styled.h1`
    font-size: 24px;
    margin: 0px;
`

const IntroText = styled.span`
    font-size: 16px;
    margin: 0px;
    text-shadow: none;
`

const Intro = () => {
    return(
        <div>
            <IntroContainer>
                <ContactCard/>
                <Introduction>
                    <IntroHeader>What I do...</IntroHeader>
                    <IntroText>
                        I'm a community-oriented full-stack developer driven to create and implement the most efficient solutions that achieve the company and team goals. I've worked in the IT Consulting industry for over 5 years in back-office support and management. Using my past experiences to understand client pain points, I bring functional solutions featuring responsive interfaces to make everyone's job easier.
                    </IntroText>
                    <br/>
                    <br/>
                    <IntroHeader>Who I Am...</IntroHeader>
                    <IntroText>
                        I was born and raised in Northern Virginia. I enjoy spending time with my family and friends and exploring all that the area has to offer including dining, breweries, and sports! I'm a loyal DC sports fan (for better or worse) and religiously follow the Nationals, Capitals, and Redskins. I love binging Netflix series, watching movies, and playing videogames. Check out some of my projects below and you'll see what I mean!
                    </IntroText>
                </Introduction>
            </IntroContainer>
        </div>
    );
} 

export default Intro;

