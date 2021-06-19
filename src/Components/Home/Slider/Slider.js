import {useState, useEffect, useRef} from 'react';
import {css} from '@emotion/css';
import SliderContainer from './SliderContainer';
import Slide from './Slide';
import Arrow from './Arrow';
import image1 from '../HomeButtons/Images/homepagechicken.jpeg';
import image2 from './promotion.jpg';
import image3 from '../../ContactUs/background2.PNG';
import DotContainer from './SliderDots/DotContainer';
import SliderDot from './SliderDots/SliderDot';

const Slider = () => {
  const images = [
    image1,
    image2,
    image3
  ]

  const firstSlide = images[0]
  const secondSlide = images[1]
  const lastSlide = images[images.length -1]

  const [state, setState] = useState({
    activeSlide: 0,
    translate: 1,
    transition: 0.2,
    _slides: [lastSlide,firstSlide,secondSlide],
    pause: false,
    firstCycle: true
  })

  const {transition, translate, activeSlide, _slides, pause, firstCycle} = state

  const autoPlayRef = useRef()
  const transitionRef = useRef()

  useEffect(() => {
    autoPlayRef.current = nextSlide
    transitionRef.current = smoothTransition
  })

  useEffect(() => {
    const smooth = () => {
      transitionRef.current()
    }

    const transitionEnd = window.addEventListener('transitionend',smooth)

    return window.removeEventListener('transitionend',transitionEnd)
  }, [])

  useEffect(() => {
    const play = () => {
      autoPlayRef.current()
    }

    const interval = setInterval(play, 3000)
    if (pause) clearInterval(interval)

    return () =>  {
      clearInterval(interval)
    }
  },[pause])

  useEffect(() => {
    if (pause) {
      const timer = setTimeout(() => {
        setState({...state, pause: false})
      }, 5000);
      return () => clearTimeout(timer)
    }
  },[activeSlide])

  useEffect(() => {
    // console.log('-----------------')
    // console.log('activeSlide: ' + activeSlide)
    // console.log('translate: ' +translate)
    // console.log('transition: ' +transition)
    // console.log('-----------------')
    
  },[activeSlide])

  useEffect(() => {
    if (transition === 0) setState({...state, transition: 0.2})
  }, [transition])

  const smoothTransition = () => {
    let _slides = []

    if (activeSlide === images.length - 1) {
      _slides = [images[images.length - 2],lastSlide,firstSlide]
    }

    else if (activeSlide === 0) _slides = [lastSlide,firstSlide,secondSlide]

    else _slides = images.slice(activeSlide - 1,activeSlide + 2)
    setState({
      ...state,
      _slides,
      transition: 0,
      translate: 1
    })
  }

  useEffect(() => {
    if (firstCycle) {
      setState({...state, firstCycle: false})
    }
    else {
      if (!pause) {
        nextSlide()
      }
    }
  },[pause])

  const buttonPressed = e => {
    if (e == 'right') {
      setState({
        ...state,
        pause: true, 
        translate: translate + 1,
        activeSlide: activeSlide === images.length - 1 ? 0 : activeSlide + 1
      })
    }
    else {
      setState({
        ...state,
        pause: true,
        translate: 0,
        activeSlide: activeSlide === 0 ? images.length - 1: activeSlide - 1
      })
    }
  }

  const nextSlide = () => {
    setState({
      ...state,
      translate: translate + 1,
      activeSlide: activeSlide === images.length - 1 ? 0 : activeSlide + 1
      })
  }

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
  const dotPosition = css`
    bottom: 0;
    position: absolute;
    z-index: 2;
    margin-bottom: 1rem;
  `
  const imageContainer = <div className={sliderCSS}>
    <Arrow nextSlide={() => buttonPressed('right')} direction={'right'}/>
    <Arrow nextSlide={() => buttonPressed('left')} direction={'left'}/>
    <DotContainer className={dotPosition}>
      <SliderDot show={activeSlide === 0 ? true : false}/>
      <SliderDot show={activeSlide === 1 ? true : false}/>
      <SliderDot show={activeSlide === 2 ? true : false}/>
      {/* <SliderDot show={activeSlide === 3 ? true : false}/> */}
    </DotContainer>
    <SliderContainer
      translate={translate}
      transition={transition}
      width = {_slides.length}
    >
      {_slides.map((_slide, i) => (
        <Slide content={_slide} key={_slide + i}/>
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