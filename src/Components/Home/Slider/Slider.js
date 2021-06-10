import React, {useState, useEffect, useRef} from 'react';
import {css} from '@emotion/css';
import SliderContainer from './SliderContainer';
import Slide from './Slide';
import iconsvg from '../../Navigation/SideDrawer/Icon/icon.png';
import image1 from '../HomeButtons/Images/homepagechicken.jpeg';
import image2 from './promotion.jpg';
import image3 from '../HomeButtons/Images/image3.PNG';
import image4 from '../HomeButtons/Images/StoreInterior.jpg';
import DotContainer from './SliderDots/DotContainer';
import SliderDot from './SliderDots/SliderDot';

const Slider = props => {
    const [state, setState] = useState({
      activeSlide: 0,
      translate: 0,
      transition: 0.5
    })

    const { transition, translate, activeSlide} = state
    const autoPlayRef = useRef()

    useEffect(() => {
      autoPlayRef.current = nextSlide
    })

    useEffect(() => {
      const play = () => {
        autoPlayRef.current()
      }

      const interval = setInterval(play, 5 * 1000)
      return () => clearInterval(interval)
    },[])

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

  const nextSlide = () => {
    if (activeSlide === images.length - 1) {
      return setState({
        ...state,
        translate: 0,
        activeSlide: 0
      })
    }

    setState({
      ...state,
      activeSlide: activeSlide + 1,
      translate: (activeSlide + 1)
    })
  }

  const prevSlide = () => {
    if (activeSlide === 0) {
      return setState({
        ...state,
        translate: (images.length - 1),
        activeSlide: images.length - 1
      })
    }

    setState({
      ...state,
      activeSlide: activeSlide - 1,
      translate: (activeSlide - 1)
    })
  }

  const imageContainer = <div className={sliderCSS}>
    {/*<img src={iconsvg} className={arrowleft} onClick={prevSlide}/> 
    <img src={iconsvg} className={arrowright} onClick={nextSlide}/> */}
    <DotContainer className={dotPosition}>
      <SliderDot show={activeSlide === 0 ? true : false} dotClicked={() => setState({
        ...state,
        translate: 0,
        activeSlide: 0
      })}/>
      <SliderDot show={activeSlide === 1 ? true : false} dotClicked={() => setState({
        ...state,
        translate: 1,
        activeSlide: 1
      })}/>
      <SliderDot show={activeSlide === 2 ? true : false} dotClicked={() => setState({
        ...state,
        translate: 2,
        activeSlide: 2
      })}/>
      <SliderDot show={activeSlide === 3 ? true : false} dotClicked={() => setState({
        ...state,
        translate: 3,
        activeSlide: 3
      })}/>
    </DotContainer>
    <SliderContainer
      translate={translate}
      transition={transition}
      width = {images.length}
    >
      {images.map((image, i) => (
        <Slide content={image} key={image + i}/>
      ))}
    </SliderContainer>
  </div>

  Slider.defaultProps = {
    slides: [],
    autoPlay: null
  }

  return (
    <div>
      {imageContainer}
    </div>
  )
}

export default Slider;