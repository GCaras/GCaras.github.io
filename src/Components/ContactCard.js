import React from 'react';
import styled from 'styled-components';
import headshot from '../img/headshot.png'

const ContactContainer = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    height: 60vh;
    justify-content: center;
    margin: 5px;
    padding: 5px;
    text-shadow: #ACDEF9 2px 2px 3px;
    width: 34vw;
    @media (max-width: 900px) {
        align-items: center;
        flex-direction: column;
        height: 40vh;
        justify-content: center;
        width: 100vw;
    }
    @media (max-width: 600px) {
        align-items: center;
        flex-direction: column;
        justify-content: center;
    }
    @media (max-width: 400px) {
        align-items: center;
        height: 40vh;
        justify-content: center;
        margin: 20px;
        width: 100vw;
    }
`

const ContactImage = styled.img`
    border-radius: 100%;
    border: 3px solid black;
    height: auto;
    margin-bottom: 20px; 
    width: 20vw;
    @media (max-width: 750px) {
        width: 30vw;
    }
    @media (max-width: 400px) {
        align-items: center;
        flex-direction: column;
        justify-content: center;
        width: 50vw;
    }
`

const ContactText = styled.h1`
    font-size: 32px;
    margin: 0px;
    @media (max-width: 400px) {
        font-size: 24px;
    }
`

const ContactSubText = styled.h3`
    cursor: pointer;
    font-size: 20px;
    margin: 0px;
    &:hover{
        transform:scale(1.1);
        z-index:1;
    }
    @media (max-width: 400px) {
        font-size: 20px;
        text-align: center;
    }
`

const ContactSubTextFill = styled.span`
    font-size: 16px;
    margin: 0px;
`

const ContactCard = () => {
    return(
        <div>
            <ContactContainer>
                <ContactImage src={headshot}/>
                <ContactText>Contact</ContactText>
                <ContactSubText onClick={() => window.open('mailto:gcaras0@gmail.com')}>
                    Email:
                    <ContactSubTextFill>
                        {" "}gcaras0@gmail.com
                    </ContactSubTextFill>
                </ContactSubText>
                <ContactSubText onClick={() => window.open('tel:7039752084')}>
                    Phone:
                    <ContactSubTextFill>
                        {" "}(703) 975-2084
                    </ContactSubTextFill>
                </ContactSubText>
            </ContactContainer>
        </div>
    );
} 

export default ContactCard;