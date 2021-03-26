import React, {useState} from 'react';
import {css} from '@emotion/css';
import SliderContainer from './SliderContainer';
import Slide from './Slide';
import iconsvg from '../../Navigation/SideDrawer/Icon/icon.png';
import image1 from '../HomeButtons/Images/homepagechicken.jpeg';
import image2 from '../HomeButtons/Images/StoreInterior.jpg';
import image3 from '../HomeButtons/Images/image3.PNG';
import image4 from '../HomeButtons/Images/image4.png';
import DotContainer from './SliderDots/DotContainer';
import SliderDot from './SliderDots/SliderDot';

const Slider = props => {
    const [slide, setSlide] = useState(0);

    const images = [
        image1,
        image2,
        image3,
        image4
    ]

    const sliderCSS = css`
        width: 100%;
        height: 700px;
        position: relative;
        overflow: hidden;
        @media (max-width: 1399px) {
          height: 500px
        }
        @media (max-width: 999px) {
          height: ${(window.innerWidth) /2}px;
        }
    `

    const arrowleft = css`
        position: absolute;
        top: 50%;
        z-index: 1;
        height: 60px;
        width: 60px;
        background-color: rgba(0, 0, 0, 0.2);
        border-radius: 4rem;
        margin-left: 0.5rem;
        @media (max-width: 999px) {
          height: 40px;
          width: 40px;
          top: 45%;
        }
        &:hover {
            background-color: rgba(0, 0, 0, 0.5);
        }
    `

    const arrowright = css`
        position: absolute;
        top: 50%;
        right: 0;
        z-index: 1;
        height: 60px;
        width: 60px;
        transform: rotate(180deg);
        background-color: rgba(0, 0, 0, 0.2);
        border-radius: 4rem;
        margin-right: 0.5rem;
        @media (max-width: 999px) {
          height: 40px;
          width: 40px;
          top: 45%;
        }
        &:hover {
            background-color: rgba(0, 0, 0, 0.5);
        }
    `

    const dotPosition = css`
        bottom: 0;
        position: absolute;
        z-index: 2;
        margin-bottom: 1rem;
    `

  const imageContainer = <div className={sliderCSS}>
    <img src={iconsvg} className={arrowleft} onClick={slide === 0 ? () => setSlide(images.length - 1) : () => setSlide(slide - 1)}/>
    <img src={iconsvg} className={arrowright} onClick={slide === images.length - 1 ? () => setSlide(0) : () => setSlide(slide + 1)}/>
    <DotContainer className={dotPosition}>
      <SliderDot show={slide === 0 ? true : false} dotClicked={() => setSlide(0)}/>
      <SliderDot show={slide === 1 ? true : false} dotClicked={() => setSlide(1)}/>
      <SliderDot show={slide === 2 ? true : false} dotClicked={() => setSlide(2)}/>
      <SliderDot show={slide === 3 ? true : false} dotClicked={() => setSlide(3)}/>
    </DotContainer>
    <SliderContainer
      translate={slide}
      width = {images.length}
    >
      {images.map((image, i) => (
        <Slide content={image} key={image + i}/>
      ))}
    </SliderContainer>
  </div>
    


  return (
    <div>
      {imageContainer}
    </div>
  )
}

export default Slider;