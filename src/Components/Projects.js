import React from 'react';
import styled from 'styled-components';
import tcgThumb from '../Images/TCGthumb.jpg'
import videoGameThumb from '../Images/videogame-trivia-thumbnail.png'
import youDueThumb from '../Images/YouDueThumb.png'
import reactIcon from '../Images/reactIcon.svg'
import nodeJsIcon from '../Images/nodeJsIcon.svg'

const StyledProjectsContainer = styled.section`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
`

const StyledProjectHeader = styled.h3`
    color: #17252A;
    font-size: 24px;
    margin: 15px;
    text-shadow: 1px 1px 1px #3AAFA9;
    @media (max-width: 760px) {
        font-size: 20px;
    }
`

const StyledProjectThumbnail = styled.img`
    border: 5px solid #3AAFA9;
    border-radius: 5%/10%;
    height: 180px;
    width: 310px;
    margin-bottom: 20px;
    @media (max-width: 440px) {
        width: 300px;
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
    @media (max-width: 375px) {
        margin: 10px 5px;
    }
`

const Projects = () => {
    return(
        <div>
            <StyledProjectsContainer>
                <article className="flip-container">
                    <div className="flipper">
                        <div className="front">
                            <StyledProjectHeader>Videogame Trivia!</StyledProjectHeader>
                            <StyledProjectThumbnail src={videoGameThumb} alt="Videogame Trivia"/>
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
                                    <a target="_blank" href="https://gcaras.github.io/Project-1-Video-Game-Trivia/">
                                        <StyledTechIcon src="https://image.flaticon.com/icons/svg/152/152843.svg"/>
                                    </a>
                                    <a target="_blank" href="https://github.com/GCaras/Project-1-Video-Game-Trivia">
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
                            <StyledProjectHeader>Trading Card Game Index</StyledProjectHeader>
                            <StyledProjectThumbnail src={tcgThumb} alt="TCG Index"/>
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
                                    <a target="_blank" href="http://kanto.surge.sh/">
                                        <StyledTechIcon src={reactIcon}/>
                                    </a>
                                    <a target="_blank" href="https://github.com/chriswehe/MernFrontEnd">
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
                            <StyledProjectHeader>YouDue</StyledProjectHeader>
                            <StyledProjectThumbnail src={youDueThumb} alt="YouDue"/>
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
                                    <a target="_blank" href="http://youdue.surge.sh/">
                                        <StyledTechIcon src={reactIcon}/>
                                    </a>
                                    <a target="_blank" href="https://github.com/GCaras/Project-3-Dashboard">
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