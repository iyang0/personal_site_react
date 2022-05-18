import styled from "styled-components";

export const HeroContainer = styled.div`
  background: #38474e;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 95vh;
  position: relative;
  z-index: 1;
`

export const HeroBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-image: url(${props => props.image});
  background-color: #38474e;
  background-position: center;
  background-size: cover;
  width: 100%;
  height: 100%;
  overflow: hidden;
`

export const HeroText = styled.div`
  position: absolute;
  font-size: 6rem;
  text-align: center;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  color: white;
  -webkit-text-stroke: 1.5px;
  -webkit-text-stroke-color: black;
`