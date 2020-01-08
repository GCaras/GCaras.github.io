import React from 'react';
import styled from 'styled-components';
import reactIcon from '../Images/reactIcon.svg';
import nodeJsIcon from '../Images/nodeJsIcon.svg';

const StyledSkillsArticle = styled.article`
    align-items: center;
    color: black;
    display: flex;
    font-size: 18px;
    justify-content: center;
    margin: 20px 0px;
    min-height: 20vh;
    text-align: center;
    text-shadow: #5FBAE2 1px 1px 3px;
    width: 100vw;
    @media (max-width: 760px) {
    }
`

const StyledSkillsIconContainer = styled.div`
    align-items: center;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    margin: 20px;
`

const StyledTechIcon = styled.img`
    height: 50px;
    margin: 20px 40px 0px 40px;
    width: auto;
    @media (max-width: 375px) {
        margin: 10px 5px;
    }
`

const StyledTechTitle = styled.h4`
    margin: 0px 10px 20px 0px;
    @media (max-width: 375px) {
        margin: 0px 0px 20px 0px;
    }
`

const Skills = () => {
    return(
        <div>
            <StyledSkillsArticle>
                <StyledSkillsIconContainer>
                    <div>
                        <StyledTechIcon src="https://image.flaticon.com/icons/svg/919/919828.svg" />
                        <StyledTechTitle>JavaScript</StyledTechTitle>
                    </div>
                    <div>
                        <StyledTechIcon src={reactIcon} />
                        <StyledTechTitle>React</StyledTechTitle>
                    </div>
                    <div>
                        <StyledTechIcon src={nodeJsIcon} />
                        <StyledTechTitle>Node</StyledTechTitle>
                    </div>
                    <div>
                        <StyledTechIcon src="https://user-images.githubusercontent.com/11978772/40430921-73d53922-5e63-11e8-8dcd-1662136c3212.png" />
                        <StyledTechTitle>MongoDB</StyledTechTitle>
                    </div>
                    <div>
                        <StyledTechIcon src="https://icon-library.net/images/python-icon/python-icon-18.jpg" />
                        <StyledTechTitle>Python</StyledTechTitle>
                    </div>
                    <div>
                        <StyledTechIcon src="https://icon-library.net/images/django-icon/django-icon-0.jpg" />
                        <StyledTechTitle>Django</StyledTechTitle>
                    </div>
                    <div>
                        <StyledTechIcon src="https://image.flaticon.com/icons/svg/152/152843.svg" />
                        <StyledTechTitle>HTML</StyledTechTitle>
                    </div>
                    <div>
                        <StyledTechIcon src="https://image.flaticon.com/icons/svg/732/732007.svg" />
                        <StyledTechTitle>CSS</StyledTechTitle>
                    </div>
                </StyledSkillsIconContainer>
            </StyledSkillsArticle>
        </div>
    )
}

export default Skills;