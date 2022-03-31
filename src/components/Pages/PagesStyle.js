import styled from 'styled-components'
import DotWorld from '../../images/Dots-Worldbackground.png'

export const PageContainer = styled.div`
display: flex;
flex-direction: column;
padding: 0px;
margin: 0px;
width: 100vw;
height: 100vh;
align-items: center;
position: relative;
background-image: linear-gradient(256.46deg, #F2ECE0 2.13%, #E7FFF1 161.97%);
`;

export const WorldDot = styled.div`
height: inherit;
width: inherit;
position: absolute;
left: 0%;
right: 0%;
top: 0%;
bottom: 0%;
background-image: url(${DotWorld})

// background-image: rgba(255, 253, 253, 0.3);
`;