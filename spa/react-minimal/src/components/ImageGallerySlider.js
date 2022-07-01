import React, {useRef, useState} from 'react';
import {getAPIBase} from "../helpers/AppHelpers";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import next from '../assets/arrow_next.svg';
import previous from '../assets/arrow_previous.svg';
import nextHover from '../assets/arrow_next_primary.svg';
import previousHover from '../assets/arrow_previous_primary.svg';
import styled from 'styled-components';

const StyledContainerDesktop = styled.div`
  
  @media (max-width: 700px) {
         display: none;
  }
`;

const StyledImageScroller = styled(Slider)`
  height: 50vh !important;
  outline: none;

  & div.slick-slide {
    opacity: 0.5;
    padding: 0 5px;
    &.slick-active {
      opacity: 1;
    }
  }
`;

const StyledImageScrollerMobile = styled(Slider)`
  height: 30vh !important;
  outline: none!important;
  margin-left: calc(-50vw + 50%)!important;
  width: 100vw!important;
  display: none!important;

  & div.slick-slide {
    opacity: 0.5!important;
    padding-right: 10px!important;
    &.slick-active {
      opacity: 1!important;
    }
  }

  @media (max-width: 700px) {
    display: block!important;
   }
  
`;

const StyledArrow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px;
`;

const StyledImage = styled.img`
  height: 50vh;
  width: auto !important;
`;

const StyledImageMobile = styled.img`
  height: 30vh;
  width: auto !important;
`;

const StyledButton = styled.button`
  background-color: transparent;
  padding: 0;
  border: 0;
  margin-left: 10px;
  cursor: pointer;
  &:focus {
    outline: none;
  }
`;

const StyledIconImg = styled.img`
  ${StyledButton}:hover & {
    display: none;
  }
  &:focus {
    outline: none;
  }
`;

const StyledIconImgHover = styled(StyledIconImg)`
  display: none;
  ${StyledButton}:hover & {
    display: flex;
  }
`;

const ImageGallerySlider = () => {
    const [contacts, setContactsPages] = useState(null);
    const slider = useRef(null);
    const settings = {
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        arrows: false,
        variableWidth: true,
        adaptiveHeight: true,
    };
    const settingsMoblie = {
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        variableWidth: true,
        adaptiveHeight: true,
    };
    React.useEffect(() => {
        async function fetchContactPages() {

            const response = await fetch(
                getAPIBase() + process.env.REACT_APP_MGNL_API_CONTACT_PAGES
            );
            const data = await response.json();
            setContactsPages(data.results);
        }

        fetchContactPages();
    }, []);
    return (
        <>
            <StyledContainerDesktop>
                <StyledImageScroller {...settings} ref={slider}>
                    {contacts?.map(item => (
                        <a href={process.env.REACT_APP_MGNL_ADDRESS_REACT + item['page']['@path']}><StyledImage
                            key={item['image']['@id']} src={process.env.REACT_APP_MGNL_HOST + item['image']['@link']}
                            alt={item['image']['@name']}/></a>
                    ))}
                </StyledImageScroller>
                <StyledArrow>
                    <StyledButton onClick={() => slider.current.slickPrev()}>
                        <StyledIconImg src={previous} alt=""/>
                        <StyledIconImgHover src={previousHover} alt=""/>
                    </StyledButton>
                    <StyledButton onClick={() => slider.current.slickNext()}>
                        <StyledIconImg src={next} alt=""/>
                        <StyledIconImgHover src={nextHover} alt=""/>
                    </StyledButton>
                </StyledArrow>
            </StyledContainerDesktop>
            <StyledImageScrollerMobile {...settingsMoblie}>
                {contacts?.map(item => (
                    <a href={process.env.REACT_APP_MGNL_ADDRESS_REACT + item['page']['@path']}><StyledImageMobile
                        key={item['image']['@id']} src={process.env.REACT_APP_MGNL_HOST + item['image']['@link']}
                        alt={item['image']['@name']}/></a>
                ))}
            </StyledImageScrollerMobile>
        </>
    );
}


export default ImageGallerySlider;
