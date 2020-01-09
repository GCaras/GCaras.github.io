import React from 'react';
import styled from 'styled-components';
import reactIcon from '../img/reactIcon.svg';
import nodeJsIcon from '../img/nodeJsIcon.svg';

const StyledSkillsArticle = styled.article`
    align-items: center;
    color: black;
    display: flex;
    font-size: 18px;
    justify-content: center;
    margin: 20px 5px;
    min-height: 20vh;
    text-align: center;
    text-shadow: #5FBAE2 1px 1px 3px;
    width: 98vw;
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

const SkillsHeader = styled.h4`
    font-size: 32px;
    margin: 0px;
    text-align: center;
    text-shadow: #5FBAE2 1px 1px 3px;
`

const StyledTechTitle = styled.h4`
    margin: 0px 0px 20px 0px;
`

const Skills = () => {
    return(
        <div>
            <SkillsHeader>Skills</SkillsHeader>
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
                        <StyledTechIcon src="https://img.icons8.com/color/48/000000/mongodb.png" />
                        <StyledTechTitle>MongoDB</StyledTechTitle>
                    </div>
                    <div>
                        <StyledTechIcon src="https://img.icons8.com/color/48/000000/python.png" />
                        <StyledTechTitle>Python</StyledTechTitle>
                    </div>
                    <div>
                        <StyledTechIcon src="https://cdn.iconscout.com/icon/free/png-512/django-1-282754.png" />
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