import React from 'react';
import styled from 'styled-components';
import tcgThumb from '../img/TCGthumb.jpg'
import videoGameThumb from '../img/videogame-trivia-thumbnail.png'
import youDueThumb from '../img/YouDueThumb.png'
import reactIcon from '../img/reactIcon.svg'
import nodeJsIcon from '../img/nodeJsIcon.svg'

const StyledPageHeader = styled.h3`
    text-align: center;
    color: black;
    font-size: 32px;
    margin: 60px 0px 0px 0px;
    text-shadow: 1px 1px 3px #5FBAE2;
    @media (max-width: 760px) {
        font-size: 20px;
    }
    @media (max-width: 400px) {
        font-size: 20px;
        margin: 20px 0px;
    }
`

const StyledProjectsContainer = styled.section`
    align-items: center;
    display: flex;
    flex-wrap: wrap;
    min-height: 60vh;
    justify-content: space-around;
`

const StyledProjectHeader = styled.h3`
    color: black;
    font-size: 24px;
    margin: 15px;
    text-shadow: 1px 1px 1px #5FBAE2;
    @media (max-width: 760px) {
        font-size: 20px;
    }
`

const StyledProjectThumbnail = styled.img`
    border-top-left-radius: 17.5px;
    border-top-right-radius: 17.5px;
    height: 180px;
    width: 330px;
    margin-bottom: 0px;
    @media (max-width: 400px) {
        width: 330px;
    }
    @media (max-width: 350px) {
        width: 260px;
    }
`

const StyledProjectDesc = styled.section`
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
`

const StyledTechIconContainer = styled.div`
    align-items: center;
    display: flex;
    justify-content: space-around;
    margin: 20px;
`

const StyledTechIcon = styled.img`
    height: 50px;
    margin: 0px 10px;
    width: auto;
    &:hover{
    transform:scale(1.1);
    z-index:1;
    }
    @media (max-width: 375px) {
        margin: 10px 5px;
    }
`

const Projects = () => {
    return(
        <div>
            <StyledPageHeader>Projects</StyledPageHeader>
            <StyledProjectsContainer>
                <article className="flip-container">
                    <div className="flipper">
                        <div className="front">
                            <StyledProjectThumbnail src={videoGameThumb} alt="Videogame Trivia"/>
                            <StyledProjectHeader>Videogame Trivia!</StyledProjectHeader>
                            <StyledTechIcon src="https://image.flaticon.com/icons/svg/152/152843.svg"/>
                            <StyledTechIcon src="https://image.flaticon.com/icons/svg/732/732007.svg"/>
                            <StyledTechIcon src="https://image.flaticon.com/icons/svg/919/919828.svg"/>
                        </div>
                        <div className="back">
                            <StyledProjectHeader>Videogame Trivia!</StyledProjectHeader>
                            <StyledProjectDesc>
                                <li>Responsively designed website trivia game that features Javascript, HTML, and CSS</li>
                                <li>Utilizes Object Oriented Programming and DOM manipulation in JS to provide questions, validate answers, and provide information and feedback on selected answers</li>
                                <StyledTechIconContainer>
                                    <a target="_blank" rel='noopener noreferrer' href="https://gcaras.github.io/Project-1-Video-Game-Trivia/">
                                        <StyledTechIcon src="https://image.flaticon.com/icons/svg/152/152843.svg"/>
                                    </a>
                                    <a target="_blank" rel='noopener noreferrer' href="https://github.com/GCaras/Project-1-Video-Game-Trivia">
                                        <StyledTechIcon src="https://image.flaticon.com/icons/svg/25/25657.svg" />
                                    </a>
                                </StyledTechIconContainer>
                            </StyledProjectDesc>
                        </div>
                    </div>
                </article>
                <article className="flip-container">
                    <div className="flipper">
                        <div className="front">
                            <StyledProjectThumbnail src={tcgThumb} alt="TCG Index"/>
                            <StyledProjectHeader>Trading Card Game Index</StyledProjectHeader>
                            <StyledTechIcon src={reactIcon}/>
                            <StyledTechIcon src={nodeJsIcon} />
                        </div>
                        <div className="back">
                            <StyledProjectHeader>Trading Card Game Index</StyledProjectHeader>
                            <StyledProjectDesc>
                                <li>Based on the original Pokemon Trading Card Game Base Set.</li>
                                <li>Full-Stack MERN(MongoDB, Express, Node, React) application with CRUD functionality</li>
                                <li>Users can view, edit, and delete cards as well as create their own custom card.</li>
                                <StyledTechIconContainer>
                                    <a target="_blank" rel='noopener noreferrer' href="http://kanto.surge.sh/">
                                        <StyledTechIcon src={reactIcon}/>
                                    </a>
                                    <a target="_blank" rel='noopener noreferrer' href="https://github.com/chriswehe/MernFrontEnd">
                                        <StyledTechIcon src="https://image.flaticon.com/icons/svg/25/25657.svg" />
                                    </a>
                                </StyledTechIconContainer>
                            </StyledProjectDesc>
                        </div>
                    </div>
                </article>
                <article className="flip-container">
                    <div className="flipper">
                        <div className="front">
                            <StyledProjectThumbnail src={youDueThumb} alt="YouDue"/>
                            <StyledProjectHeader>YouDue</StyledProjectHeader>
                            <StyledTechIcon src={reactIcon}/>
                            <StyledTechIcon src={nodeJsIcon} />
                        </div>
                        <div className="back">
                            <StyledProjectHeader>YouDue</StyledProjectHeader>
                            <StyledProjectDesc>
                                <li>Full-Stack MERN(MongoDB, Express, Node, React) application with CRUD functionality</li>
                                <li>Utilizes Google APIs to populate search queries for media</li>
                                <li>Allows users to select Books, Movies, and other media of interest and set reminders for these items on specific dates.</li>
                            <StyledTechIconContainer>
                                    <a target="_blank" rel='noopener noreferrer' href="http://youdue.surge.sh/">
                                        <StyledTechIcon src={reactIcon}/>
                                    </a>
                                    <a target="_blank" rel='noopener noreferrer' href="https://github.com/GCaras/Project-3-Dashboard">
                                        <StyledTechIcon src="https://image.flaticon.com/icons/svg/25/25657.svg" />
                                    </a>
                                </StyledTechIconContainer>
                            </StyledProjectDesc>
                        </div>
                    </div>
                </article>
            </StyledProjectsContainer>
        </div>
    )
};

export default Projects;