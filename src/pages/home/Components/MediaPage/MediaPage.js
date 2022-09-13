import React, { useEffect, useRef, useState } from "react";
import { connect } from "react-redux";
import { PageWrapper, ConnectContainer } from '../../../../styles/globalstyle';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./MediaPage.css";
import {Animated} from "react-animated-css";
import video from '../../../../resources/video/SCENE4.webm';
import mediaIcon from "../../../../resources/images/ninja-media-icon.png";
import gameDay1 from "../../../../resources/images/game_ss/SS1.jpg";
import gameDay2 from "../../../../resources/images/game_ss/SS2.jpg";
import gameDay3 from "../../../../resources/images/game_ss/SS3.jpg";
import gameDay4 from "../../../../resources/images/game_ss/SS4.jpg";
import gameDay5 from "../../../../resources/images/game_ss/SS5.jpg";
import gameDay6 from "../../../../resources/images/game_ss/SS6.jpg";
import gameDay7 from "../../../../resources/images/game_ss/SS7.jpg";
import gameDay8 from "../../../../resources/images/game_ss/SS8.jpg";
import gameDay9 from "../../../../resources/images/game_ss/SS9.jpg";
import gameNight1 from "../../../../resources/images/game_ss/NN1.jpg";
import gameNight2 from "../../../../resources/images/game_ss/NN2.jpg";
import gameNight3 from "../../../../resources/images/game_ss/NN3.jpg";
import gameNight4 from "../../../../resources/images/game_ss/NN4.jpg";
import gameNight5 from "../../../../resources/images/game_ss/NN5.jpg";
import gameNight6 from "../../../../resources/images/game_ss/NN6.jpg";
import gameNight7 from "../../../../resources/images/game_ss/NN7.jpg";
import gameNight8 from "../../../../resources/images/game_ss/NN8.jpg";
import gameNight9 from "../../../../resources/images/game_ss/NN9.jpg";
import leftArrow from "../../../../resources/images/leftarrow.png";
import rightArrow from "../../../../resources/images/rightarrow.png";
import dayIcon from "../../../../resources/images/day.png";
import nightIcon from "../../../../resources/images/night.png";
import footageVideo from '../../../../resources/video/footage.mp4';
import videoPlay from "../../../../resources/images/play.png";
import videoPause from "../../../../resources/images/pause.png";
import fullScreenIcon from "../../../../resources/images/fullscreen.png";
import shurikenBlackImage from "../../../../resources/images/shuriken-black.png";

const MediaPage = (props) => {
  const showVideo = useRef(null);
  const [showImage, setShowImage] = useState(2);
  const [meridiem, setMeridiem] = useState(true);
  const videoRefWeb = useRef(null);
  const videoRefMobile = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [mobilePlaying, setMobilePlaying] = useState(false);
  const [webFeatureLoad, setWebFeatureLoad] = useState(0);
  const [imageToShow, setImageToShow] = useState("");
  const [lightboxDisplay, setLightBoxDisplay] = useState(false);

  const dayImages = [gameDay1, gameDay2, gameDay3, gameDay4, gameDay5, gameDay6, gameDay7, gameDay8, gameDay9];
  const nightImages = [gameNight1, gameNight2, gameNight3, gameNight4, gameNight5, gameNight6, gameNight7, gameNight8, gameNight9];

  useEffect(() => {
    if (props.pageNumber === 3) {
      showVideo.current.currentTime = 0;
      showVideo.current.play();
      setWebFeatureLoad(1);
    }
  }, [props.pageNumber])

  
  const videoHandler = (control) => {
    if (control === "play") {
      videoRefWeb.current.play();
      setPlaying(true);
    } else if (control === "pause") {
      videoRefWeb.current.pause();
      setPlaying(false);
    }
  };

  const videoHandlerMobile = (control) => {
    if (control === "play") {
      videoRefMobile.current.play();
      setMobilePlaying(true);
    } else if (control === "pause") {
      videoRefMobile.current.pause();
      setMobilePlaying(false);
    }
  };

  function NextArrow(props) {
    const { className, onClick } = props;
    return (
      <div
        className={className}
        onClick={onClick}
      >
        <img src={rightArrow} alt="right-arrow" style={{marginTop: "-14px"}}></img>
      </div>
    );
  }

  function PrevArrow(props) {
    const { className, onClick } = props;
    return (
      <div
        className={className}
        onClick={onClick}
      >
        <img src={leftArrow} alt="left-arrow" style={{marginTop: "-14px"}}></img>
      </div>
    );
  }

  const slideSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
  };

  const myFullCallback = () => (setPlaying(false));
  const myMobileFullCallback = () => (setMobilePlaying(false));
  
  const toggleFullScreenWeb = () => {
    var el = document.getElementById("videoRefWebMedia");
    if (el.requestFullscreen) {
      el.requestFullscreen();
    } else if (el.msRequestFullscreen) {
      el.msRequestFullscreen();
    } else if (el.mozRequestFullScreen) {
      el.mozRequestFullScreen();
    } else if (el.webkitRequestFullscreen) {
      el.webkitRequestFullscreen();
    }
  };

  
  const toggleFullScreenMobile = () => {
    var el = document.getElementById("videoRefMobileMedia");
    if (el.requestFullscreen) {
      el.requestFullscreen();
    } else if (el.msRequestFullscreen) {
      el.msRequestFullscreen();
    } else if (el.mozRequestFullScreen) {
      el.mozRequestFullScreen();
    } else if (el.webkitRequestFullscreen) {
      el.webkitRequestFullscreen();
    }
  };

  const showFullScreenImage = (image) => {
    setImageToShow(image);
    setLightBoxDisplay(true);
  };

  //hide lightbox
  const hideLightBox = () => {
    setLightBoxDisplay(false);
  };

  const showNext = (e) => {
    e.stopPropagation();
    let currentNumber = parseInt(imageToShow.slice(16, imageToShow.length - 13));
    let currentMeridiem = imageToShow.slice(14, imageToShow.length - 14);
    
    let nextImage;
    if (currentNumber >= 9) {
      currentMeridiem === "SS" ?  nextImage = dayImages[0]
      : nextImage = nightImages[0];
      setImageToShow(nextImage);
    } else {
      currentMeridiem === "SS" ?  nextImage = dayImages[currentNumber]
      : nextImage = nightImages[currentNumber];
      setImageToShow(nextImage);
    }
  };

  //show previous image in lightbox
  const showPrev = (e) => {
    e.stopPropagation();
    let currentNumber = parseInt(imageToShow.slice(16, imageToShow.length - 13));
    let currentMeridiem = imageToShow.slice(14, imageToShow.length - 14);
    
    let prevImage;
    if (currentNumber <= 1) {
      currentMeridiem === "SS" ?  prevImage = dayImages[8]
      : prevImage = nightImages[8];
      setImageToShow(prevImage);
    } else {
      currentMeridiem === "SS" ?  prevImage = dayImages[currentNumber -2]
      : prevImage = nightImages[currentNumber - 2];
      setImageToShow(prevImage);
    }
  };
/*
  const showSlideNext = () => {
    if (meridiem) {
      if(showImage >= 9) setShowImage(1);
      else setShowImage(showImage + 1);
    } else {
      if(showImage >= 18) setShowImage(10);
      else setShowImage(showImage + 1);
    }
  };

  //show previous image in lightbox
  const showSlidePrev = () => {    
    if (meridiem) {
      if(showImage <= 1) setShowImage(9);
      else setShowImage(showImage - 1);
    } else {
      if(showImage <= 10) setShowImage(18);
      else setShowImage(showImage - 1);
    }
  };
*/
  
  const getPagesNumbers = () => {
    const pageNumbers = [];
      pageNumbers.push(
        <div className="display-flex" key="0">
          <div onClick={() => { props.pageChangeHandler(0);}} style={{cursor:"pointer"}}>
            <div className="page-container">
              <div className="clippath-polygon" />
            </div>
            <p className="ninja-page-link">HOME</p>
          </div>
          <hr className="line" />
          <div onClick={() => { props.pageChangeHandler(1);}} style={{cursor:"pointer"}}>
            <div className="page-container">
              <div className="clippath-polygon" />
            </div>
            <p className="ninja-page-link">WEB</p>
          </div>
          <hr className="line" />
          <div onClick={() => { props.pageChangeHandler(2);}} style={{cursor:"pointer"}}>
            <div className="page-container">
              <div className="clippath-polygon" />
            </div>
            <p className="ninja-page-link">GAME</p>
          </div>
        </div>
      );

    return [...pageNumbers];
  };

  const pagesNumbers = getPagesNumbers();

  return (
    <div style={{height: "100%"}}>
      <PageWrapper id='home-sec'>
        <ConnectContainer>
          <video muted className='fullscreen-bg-video video-media' ref={showVideo}>
            <source src={video} type="video/mp4" />
          </video>
        </ConnectContainer>
      </PageWrapper>
      {
        webFeatureLoad === 0 ? <div></div> : 
        <div style={{overflow:"hidden", height: "100%"}} key={webFeatureLoad}>
          {
            lightboxDisplay ? 
              <div id="lightbox" onClick={hideLightBox}>
                <button style={{marginLeft: "calc(-100vw + 32px)"}} className="full-image-button" onClick={showPrev}><i className="fa fa-4x fa-arrow-circle-left"></i></button>
                <img alt="fullscreen" id="lightbox-img" src={imageToShow}></img>
                <button style={{marginLeft: "calc(100vw - 32px)"}} className="full-image-button" onClick={showNext}><i className="fa fa-4x fa-arrow-circle-right"></i></button>
              </div>
          : ""
          }
          <Animated animationIn="zoomInLeft" animationInDuration={2000} isVisible={true} className="image-container">
            <img src={mediaIcon} alt="media-icon" className="media-image" />
          </Animated>
          <div className="wrap-container wrap-column-media-center">
            <div className="media-container-center">
              <div className="display-flex space-between media-container">
                <Animated animationIn="fadeInLeftBig" animationInDuration={2000} isVisible={true}>
                  <div className="slider-show">
                    <p className="slider-letter-screenshot">GAME SCREENSHOTS</p>
                    <div className="media-image-border">
                      {
                        showImage === 1 ?
                        <div key={showImage}>
                          <img src={gameDay1} alt="game-day-1" className="media-select-image" id="game-day-1" onClick={() => showFullScreenImage(gameDay1)}></img>
                        </div> : showImage === 2 ? 
                        <div key={showImage}>
                          <img src={gameDay2} alt="game-day-2" className="media-select-image" id="game-day-2" onClick={() => showFullScreenImage(gameDay2)}></img>
                        </div> : showImage === 3 ? 
                        <div key={showImage}>
                          <img src={gameDay3} alt="game-day-3" className="media-select-image" id="game-day-3" onClick={() => showFullScreenImage(gameDay3)}></img>
                        </div> : showImage === 4 ? 
                        <div key={showImage}>
                          <img src={gameDay4} alt="game-day-4" className="media-select-image" id="game-day-4" onClick={() => showFullScreenImage(gameDay4)}></img>
                        </div> : showImage === 5 ? 
                        <div key={showImage}>
                          <img src={gameDay5} alt="game-day-5" className="media-select-image" id="game-day-5" onClick={() => showFullScreenImage(gameDay5)}></img>
                        </div> : showImage === 6 ? 
                        <div key={showImage}>
                          <img src={gameDay6} alt="game-day-6" className="media-select-image" id="game-day-6" onClick={() => showFullScreenImage(gameDay6)}></img>
                        </div> : showImage === 7 ? 
                        <div key={showImage}>
                          <img src={gameDay7} alt="game-day-7" className="media-select-image" id="game-day-7" onClick={() => showFullScreenImage(gameDay7)}></img>
                        </div> : showImage === 8 ? 
                        <div key={showImage}>
                          <img src={gameDay8} alt="game-day-8" className="media-select-image" id="game-day-8" onClick={() => showFullScreenImage(gameDay8)}></img>
                        </div> : showImage === 9 ? 
                        <div key={showImage}>
                          <img src={gameDay9} alt="game-day-9" className="media-select-image" id="game-day-9" onClick={() => showFullScreenImage(gameDay9)}></img>
                        </div>: showImage === 10 ? 
                        <div key={showImage}>
                          <img src={gameNight1} alt="game-night-1" className="media-select-image" id="game-night-1" onClick={() => showFullScreenImage(gameNight1)}></img>
                        </div>: showImage === 11 ? 
                        <div key={showImage}>
                          <img src={gameNight2} alt="game-night-2" className="media-select-image" id="game-night-2" onClick={() => showFullScreenImage(gameNight2)}></img>
                        </div>: showImage === 12 ? 
                        <div key={showImage}>
                          <img src={gameNight3} alt="game-night-3" className="media-select-image" id="game-night-3" onClick={() => showFullScreenImage(gameNight3)}></img>
                        </div>: showImage === 13 ? 
                        <div key={showImage}>
                          <img src={gameNight4} alt="game-night-4" className="media-select-image" id="game-night-4" onClick={() => showFullScreenImage(gameNight4)}></img>
                        </div>: showImage === 14 ? 
                        <div key={showImage}>
                          <img src={gameNight5} alt="game-night-5" className="media-select-image" id="game-night-5" onClick={() => showFullScreenImage(gameNight5)}></img>
                        </div>: showImage === 15 ? 
                        <div key={showImage}>
                          <img src={gameNight6} alt="game-night-6" className="media-select-image" id="game-night-6" onClick={() => showFullScreenImage(gameNight6)}></img>
                        </div>: showImage === 16 ? 
                        <div key={showImage}>
                          <img src={gameNight7} alt="game-night-7" className="media-select-image" id="game-night-7" onClick={() => showFullScreenImage(gameNight7)}></img>
                        </div>: showImage === 17 ? 
                        <div key={showImage}>
                          <img src={gameNight8} alt="game-night-8" className="media-select-image" id="game-night-8" onClick={() => showFullScreenImage(gameNight8)}></img>
                        </div> : showImage === 18 ?
                        <div key={showImage}>
                          <img src={gameNight9} alt="game-night-9" className="media-select-image" id="game-night-9" onClick={() => showFullScreenImage(gameNight9)}></img>
                        </div>
                        : <div></div>
                      }
                    </div>
                    <div className="day-night-container">
                      <div className="clippath-right"></div>
                      <img src={dayIcon} alt="day-icon" onClick={() => { setMeridiem(true);}} style={{cursor: "pointer", width: "20px", height: "20px", borderRadius: "50%",marginTop:"10px", marginLeft: "10px"}}></img>
                      <img src={nightIcon} alt="night-icon" onClick={() => { setMeridiem(false);}} style={{cursor: "pointer",width: "20px", height: "20px", borderRadius: "50%",marginTop:"10px", marginLeft: "10px", marginRight: "10px"}}></img>
                      <div className="clippath-left"></div>
                    </div>
                    <Slider {...slideSettings}>
                      <div>
                        <div className="game-image-container">
                          {
                            meridiem ?
                            <Animated animationIn="zoomIn" animationInDuration={2000} isVisible={true}>
                              <img src={gameDay1} alt="game-day-1" className="media-game-image" onClick={() => { setShowImage(1);}}></img>
                            </Animated>
                            :
                            <Animated animationIn="zoomIn" animationInDuration={2000} isVisible={true}>
                              <img src={gameNight1} alt="game-night-1" className="media-game-image" onClick={() => { setShowImage(10);}}></img>
                            </Animated>
                          }
                        </div>
                      </div>
                      <div>
                        <div className="game-image-container">
                          {
                            meridiem ?
                            <Animated animationIn="zoomIn" animationInDuration={2000} isVisible={true}>
                              <img src={gameDay2} alt="game-day-2" className="media-game-image" onClick={() => { setShowImage(2);}}></img>
                            </Animated>
                            :
                            <Animated animationIn="zoomIn" animationInDuration={2000} isVisible={true}>
                              <img src={gameNight2} alt="game-night-2" className="media-game-image" onClick={() => { setShowImage(11);}}></img>
                            </Animated>
                          }
                        </div>
                      </div>
                      <div>
                        <div className="game-image-container">
                          {
                            meridiem ?
                            <Animated animationIn="zoomIn" animationInDuration={2000} isVisible={true}>
                              <img src={gameDay3} alt="game-day-3" className="media-game-image" onClick={() => { setShowImage(3);}}></img>
                            </Animated>
                            :
                            <Animated animationIn="zoomIn" animationInDuration={2000} isVisible={true}>
                              <img src={gameNight3} alt="game-night-3" className="media-game-image" onClick={() => { setShowImage(12);}}></img>
                            </Animated>
                          }
                        </div>
                      </div>
                      <div>
                        <div className="game-image-container">
                          {
                            meridiem ?
                            <Animated animationIn="zoomIn" animationInDuration={2000} isVisible={true}>
                              <img src={gameDay4} alt="game-day-4" className="media-game-image" onClick={() => { setShowImage(4);}}></img>
                            </Animated>
                            :
                            <Animated animationIn="zoomIn" animationInDuration={2000} isVisible={true}>
                              <img src={gameNight4} alt="game-night-4" className="media-game-image" onClick={() => { setShowImage(13);}}></img>
                            </Animated>
                          }
                        </div>
                      </div>
                      <div>
                        <div className="game-image-container">
                          {
                            meridiem ?
                            <Animated animationIn="zoomIn" animationInDuration={2000} isVisible={true}>
                              <img src={gameDay5} alt="game-day-5" className="media-game-image" onClick={() => { setShowImage(5);}}></img>
                            </Animated>
                            :
                            <Animated animationIn="zoomIn" animationInDuration={2000} isVisible={true}>
                              <img src={gameNight5} alt="game-night-5" className="media-game-image" onClick={() => { setShowImage(14);}}></img>
                            </Animated>
                          }
                        </div>
                      </div>
                      <div>
                        <div className="game-image-container">
                          {
                            meridiem ?
                            <Animated animationIn="zoomIn" animationInDuration={2000} isVisible={true}>
                              <img src={gameDay6} alt="game-day-6" className="media-game-image" onClick={() => { setShowImage(6);}}></img>
                            </Animated>
                            :
                            <Animated animationIn="zoomIn" animationInDuration={2000} isVisible={true}>
                              <img src={gameNight6} alt="game-night-6" className="media-game-image" onClick={() => { setShowImage(15);}}></img>
                            </Animated>
                          }
                        </div>
                      </div>
                      <div>
                        <div className="game-image-container">
                          {
                            meridiem ?
                            <Animated animationIn="zoomIn" animationInDuration={2000} isVisible={true}>
                              <img src={gameDay7} alt="game-day-7" className="media-game-image" onClick={() => { setShowImage(7);}}></img>
                            </Animated>
                            :
                            <Animated animationIn="zoomIn" animationInDuration={2000} isVisible={true}>
                              <img src={gameNight7} alt="game-night-7" className="media-game-image" onClick={() => { setShowImage(16);}}></img>
                            </Animated>
                          }
                        </div>
                      </div>
                      <div>
                        <div className="game-image-container">
                          {
                            meridiem ?
                            <Animated animationIn="zoomIn" animationInDuration={2000} isVisible={true}>
                              <img src={gameDay8} alt="game-day-8" className="media-game-image" onClick={() => { setShowImage(8);}}></img>
                            </Animated>
                            :
                            <Animated animationIn="zoomIn" animationInDuration={2000} isVisible={true}>
                              <img src={gameNight8} alt="game-night-8" className="media-game-image" onClick={() => { setShowImage(17);}}></img>
                            </Animated>
                          }
                        </div>
                      </div>
                      <div>
                        <div className="game-image-container">
                          {
                            meridiem ?
                            <Animated animationIn="zoomIn" animationInDuration={2000} isVisible={true}>
                              <img src={gameDay9} alt="game-day-9" className="media-game-image" onClick={() => { setShowImage(9);}}></img>
                            </Animated>
                            :
                            <Animated animationIn="zoomIn" animationInDuration={2000} isVisible={true}>
                              <img src={gameNight9} alt="game-night-9" className="media-game-image" onClick={() => { setShowImage(18);}}></img>
                            </Animated>
                          }
                        </div>
                      </div>
                    </Slider>
                  </div>
                  <div className="wrap-container" style={{marginTop:"20px", justifyContent: "flex-start"}}>
                    {pagesNumbers}
                  </div>
                </Animated>
                <Animated animationIn="fadeInRightBig" animationInDuration={2000} isVisible={true}>
                  <div>
                    <p className="media-title game-video-circle">GAME FOOTAGE</p>
                    <div className="video-class">
                      <video className="video" src={footageVideo} id="videoRefWebMedia" ref={videoRefWeb} onEnded={() => myFullCallback()}></video>
                      <div className="controlsContainer">
                        <div className="controls">
                          {
                            playing ? 
                              <img onClick={() => videoHandler("pause")} className="controlsIcon--small" alt="" src={videoPause} /> :
                              <img onClick={() => videoHandler("play")} className="controlsIcon--small" alt="" src={videoPlay} />
                          }
                          <img src={fullScreenIcon} className="controlsIcon--small" alt="fullscreen" onClick={() => toggleFullScreenWeb()}></img>
                        </div>
                      </div>
                    </div>
                  </div>
                </Animated>
                <div className="dummy-scroll-bar" style={{top: "310vh"}}>
                  <img src={shurikenBlackImage} alt="shuriken" className="dummy-shuriken" style={{top: "40vh"}}></img>
                  <p className="dummy-shuriken-letter" style={{top: "40vh"}}>Media</p>
                </div>
              </div>
            </div>
            <div className="media-mobile-container">
              <div style={{display: "flex", justifyContent:"center"}}>
                <Animated animationIn="fadeInLeftBig" animationInDuration={2000} isVisible={true}>
                  <div className="slider-show">
                    <p className="slider-letter-screenshot">GAME SCREENSHOTS</p>
                    <div className="media-image-border">
                      {
                        showImage === 1 ?
                        <div key={showImage}>
                          <img src={gameDay1} alt="game-day-1" className="media-select-image" id="game-day-1" onClick={() => showFullScreenImage(gameDay1)}></img>
                        </div> : showImage === 2 ? 
                        <div key={showImage}>
                          <img src={gameDay2} alt="game-day-2" className="media-select-image" id="game-day-2" onClick={() => showFullScreenImage(gameDay2)}></img>
                        </div> : showImage === 3 ? 
                        <div key={showImage}>
                          <img src={gameDay3} alt="game-day-3" className="media-select-image" id="game-day-3" onClick={() => showFullScreenImage(gameDay3)}></img>
                        </div> : showImage === 4 ? 
                        <div key={showImage}>
                          <img src={gameDay4} alt="game-day-4" className="media-select-image" id="game-day-4" onClick={() => showFullScreenImage(gameDay4)}></img>
                        </div> : showImage === 5 ? 
                        <div key={showImage}>
                          <img src={gameDay5} alt="game-day-5" className="media-select-image" id="game-day-5" onClick={() => showFullScreenImage(gameDay5)}></img>
                        </div> : showImage === 6 ? 
                        <div key={showImage}>
                          <img src={gameDay6} alt="game-day-6" className="media-select-image" id="game-day-6" onClick={() => showFullScreenImage(gameDay6)}></img>
                        </div> : showImage === 7 ? 
                        <div key={showImage}>
                          <img src={gameDay7} alt="game-day-7" className="media-select-image" id="game-day-7" onClick={() => showFullScreenImage(gameDay7)}></img>
                        </div> : showImage === 8 ? 
                        <div key={showImage}>
                          <img src={gameDay8} alt="game-day-8" className="media-select-image" id="game-day-8" onClick={() => showFullScreenImage(gameDay8)}></img>
                        </div> : showImage === 9 ? 
                        <div key={showImage}>
                          <img src={gameDay9} alt="game-day-9" className="media-select-image" id="game-day-9" onClick={() => showFullScreenImage(gameDay9)}></img>
                        </div>: showImage === 10 ? 
                        <div key={showImage}>
                          <img src={gameNight1} alt="game-night-1" className="media-select-image" id="game-night-1" onClick={() => showFullScreenImage(gameNight1)}></img>
                        </div>: showImage === 11 ? 
                        <div key={showImage}>
                          <img src={gameNight2} alt="game-night-2" className="media-select-image" id="game-night-2" onClick={() => showFullScreenImage(gameNight2)}></img>
                        </div>: showImage === 12 ? 
                        <div key={showImage}>
                          <img src={gameNight3} alt="game-night-3" className="media-select-image" id="game-night-3" onClick={() => showFullScreenImage(gameNight3)}></img>
                        </div>: showImage === 13 ? 
                        <div key={showImage}>
                          <img src={gameNight4} alt="game-night-4" className="media-select-image" id="game-night-4" onClick={() => showFullScreenImage(gameNight4)}></img>
                        </div>: showImage === 14 ? 
                        <div key={showImage}>
                          <img src={gameNight5} alt="game-night-5" className="media-select-image" id="game-night-5" onClick={() => showFullScreenImage(gameNight5)}></img>
                        </div>: showImage === 15 ? 
                        <div key={showImage}>
                          <img src={gameNight6} alt="game-night-6" className="media-select-image" id="game-night-6" onClick={() => showFullScreenImage(gameNight6)}></img>
                        </div>: showImage === 16 ? 
                        <div key={showImage}>
                          <img src={gameNight7} alt="game-night-7" className="media-select-image" id="game-night-7" onClick={() => showFullScreenImage(gameNight7)}></img>
                        </div>: showImage === 17 ? 
                        <div key={showImage}>
                          <img src={gameNight8} alt="game-night-8" className="media-select-image" id="game-night-8" onClick={() => showFullScreenImage(gameNight8)}></img>
                        </div> : showImage === 18 ?
                        <div key={showImage}>
                          <img src={gameNight9} alt="game-night-9" className="media-select-image" id="game-night-9" onClick={() => showFullScreenImage(gameNight9)}></img>
                        </div>
                        : <div></div>
                      }
                    </div>
                    <div className="day-night-container">
                      <div className="clippath-right"></div>
                      <img src={dayIcon} alt="day-icon" onClick={() => { setMeridiem(true);}} style={{cursor: "pointer", width: "20px", height: "20px", borderRadius: "50%",marginTop:"10px", marginLeft: "10px"}}></img>
                      <img src={nightIcon} alt="night-icon" onClick={() => { setMeridiem(false);}} style={{cursor: "pointer",width: "20px", height: "20px", borderRadius: "50%",marginTop:"10px", marginLeft: "10px", marginRight: "10px"}}></img>
                      <div className="clippath-left"></div>
                    </div>
                    <Slider {...slideSettings}>
                      <div>
                        <div className="game-image-container">
                          {
                            meridiem ?
                            <Animated animationIn="zoomIn" animationInDuration={2000} isVisible={true}>
                              <img src={gameDay1} alt="game-day-1" className="media-game-image" onClick={() => { setShowImage(1);}}></img>
                            </Animated>
                            :
                            <Animated animationIn="zoomIn" animationInDuration={2000} isVisible={true}>
                              <img src={gameNight1} alt="game-night-1" className="media-game-image" onClick={() => { setShowImage(10);}}></img>
                            </Animated>
                          }
                        </div>
                      </div>
                      <div>
                        <div className="game-image-container">
                          {
                            meridiem ?
                            <Animated animationIn="zoomIn" animationInDuration={2000} isVisible={true}>
                              <img src={gameDay2} alt="game-day-2" className="media-game-image" onClick={() => { setShowImage(2);}}></img>
                            </Animated>
                            :
                            <Animated animationIn="zoomIn" animationInDuration={2000} isVisible={true}>
                              <img src={gameNight2} alt="game-night-2" className="media-game-image" onClick={() => { setShowImage(11);}}></img>
                            </Animated>
                          }
                        </div>
                      </div>
                      <div>
                        <div className="game-image-container">
                          {
                            meridiem ?
                            <Animated animationIn="zoomIn" animationInDuration={2000} isVisible={true}>
                              <img src={gameDay3} alt="game-day-3" className="media-game-image" onClick={() => { setShowImage(3);}}></img>
                            </Animated>
                            :
                            <Animated animationIn="zoomIn" animationInDuration={2000} isVisible={true}>
                              <img src={gameNight3} alt="game-night-3" className="media-game-image" onClick={() => { setShowImage(12);}}></img>
                            </Animated>
                          }
                        </div>
                      </div>
                      <div>
                        <div className="game-image-container">
                          {
                            meridiem ?
                            <Animated animationIn="zoomIn" animationInDuration={2000} isVisible={true}>
                              <img src={gameDay4} alt="game-day-4" className="media-game-image" onClick={() => { setShowImage(4);}}></img>
                            </Animated>
                            :
                            <Animated animationIn="zoomIn" animationInDuration={2000} isVisible={true}>
                              <img src={gameNight4} alt="game-night-4" className="media-game-image" onClick={() => { setShowImage(13);}}></img>
                            </Animated>
                          }
                        </div>
                      </div>
                      <div>
                        <div className="game-image-container">
                          {
                            meridiem ?
                            <Animated animationIn="zoomIn" animationInDuration={2000} isVisible={true}>
                              <img src={gameDay5} alt="game-day-5" className="media-game-image" onClick={() => { setShowImage(5);}}></img>
                            </Animated>
                            :
                            <Animated animationIn="zoomIn" animationInDuration={2000} isVisible={true}>
                              <img src={gameNight5} alt="game-night-5" className="media-game-image" onClick={() => { setShowImage(14);}}></img>
                            </Animated>
                          }
                        </div>
                      </div>
                      <div>
                        <div className="game-image-container">
                          {
                            meridiem ?
                            <Animated animationIn="zoomIn" animationInDuration={2000} isVisible={true}>
                              <img src={gameDay6} alt="game-day-6" className="media-game-image" onClick={() => { setShowImage(6);}}></img>
                            </Animated>
                            :
                            <Animated animationIn="zoomIn" animationInDuration={1000} isVisible={true}>
                              <img src={gameNight6} alt="game-night-6" className="media-game-image" onClick={() => { setShowImage(15);}}></img>
                            </Animated>
                          }
                        </div>
                      </div>
                      <div>
                        <div className="game-image-container">
                          {
                            meridiem ?
                            <Animated animationIn="zoomIn" animationInDuration={1000} isVisible={true}>
                              <img src={gameDay7} alt="game-day-7" className="media-game-image" onClick={() => { setShowImage(7);}}></img>
                            </Animated>
                            :
                            <Animated animationIn="zoomIn" animationInDuration={1000} isVisible={true}>
                              <img src={gameNight7} alt="game-night-7" className="media-game-image" onClick={() => { setShowImage(16);}}></img>
                            </Animated>
                          }
                        </div>
                      </div>
                      <div>
                        <div className="game-image-container">
                          {
                            meridiem ?
                            <Animated animationIn="zoomIn" animationInDuration={1000} isVisible={true}>
                              <img src={gameDay8} alt="game-day-8" className="media-game-image" onClick={() => { setShowImage(8);}}></img>
                            </Animated>
                            :
                            <Animated animationIn="zoomIn" animationInDuration={1000} isVisible={true}>
                              <img src={gameNight8} alt="game-night-8" className="media-game-image" onClick={() => { setShowImage(17);}}></img>
                            </Animated>
                          }
                        </div>
                      </div>
                      <div>
                        <div className="game-image-container">
                          {
                            meridiem ?
                            <Animated animationIn="zoomIn" animationInDuration={1000} isVisible={true}>
                              <img src={gameDay9} alt="game-day-9" className="media-game-image" onClick={() => { setShowImage(9);}}></img>
                            </Animated>
                            :
                            <Animated animationIn="zoomIn" animationInDuration={1000} isVisible={true}>
                              <img src={gameNight9} alt="game-night-9" className="media-game-image" onClick={() => { setShowImage(18);}}></img>
                            </Animated>
                          }
                        </div>
                      </div>
                    </Slider>
                  </div>
                </Animated>
              </div>
              <Animated animationIn="fadeInRightBig" animationInDuration={3000} isVisible={true}>
                <div>
                  <p className="media-title game-video-circle">GAME FOOTAGE</p>
                  <div style={{display: "flex", justifyContent:"center"}}>
                    <div className="video-class">
                      <video className="video" src={footageVideo} id="videoRefMobileMedia" ref={videoRefMobile} onEnded={() => myMobileFullCallback()}></video>
                      <div className="controlsContainer">
                        <div className="controls">
                          {
                            mobilePlaying ? 
                              <img onClick={() => videoHandlerMobile("pause")} className="controlsIcon--small" alt="" src={videoPause} /> :
                              <img onClick={() => videoHandlerMobile("play")} className="controlsIcon--small" alt="" src={videoPlay} />
                          }
                          <img src={fullScreenIcon} className="controlsIcon--small" alt="fullscreen" onClick={() => toggleFullScreenMobile()}></img>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Animated>
            </div>
          </div>
        </div>
      }
    </div>
  );
};

const mapStateToProps = state => ({
  pageNumber: state.pageNumber
})

export default connect(mapStateToProps)(MediaPage);