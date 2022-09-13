import React, { useEffect, useRef, useState } from "react";
import { connect } from "react-redux";
import "./GamePage.css";
import {Animated} from "react-animated-css";
import { Scrollbars } from 'react-custom-scrollbars';
import gameIcon from "../../../../resources/images/ninja-game-icon.png";
import fullScreenIcon from "../../../../resources/images/fullscreen.png";
import videoPlay from "../../../../resources/images/play.png";
import videoPause from "../../../../resources/images/pause.png";
import video from '../../../../resources/video/SCENE3.webm';
import ninjaVideo from '../../../../resources/video/ninjavideo.mp4';
import { PageWrapper, ConnectContainer } from '../../../../styles/globalstyle';
import shurikenBlackImage from "../../../../resources/images/shuriken-black.png";

const GamePage = (props) => {
  const showVideo = useRef(null);
  const videoRefWeb = useRef(null);
  const videoRefMobile = useRef(null);
  const [webFeatureLoad, setWebFeatureLoad] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [mobilePlaying, setMobilePlaying] = useState(false);

  useEffect(() => {
    if (props.pageNumber === 2) {
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

  const myFullCallback = () => (setPlaying(false));
  const myMobileFullCallback = () => (setMobilePlaying(false));
  
  const toggleFullScreenWeb = () => {
    var el = document.getElementById("videoRefWeb");
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
    var el = document.getElementById("videoRefMobile");
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
          <div onClick={() => { props.pageChangeHandler(3);}} style={{cursor:"pointer"}}>
            <div className="page-container">
              <div className="clippath-polygon" />
            </div>
            <p className="ninja-page-link">MEDIA</p>
          </div>
        </div>
      );

    return [...pageNumbers];
  };

  const pagesNumbers = getPagesNumbers();

  return (
    <div style={{overflow:"hidden", height: "100%"}}>
      <PageWrapper id='home-sec'>
        <ConnectContainer>
          <video muted className='fullscreen-bg-video video-game' ref={showVideo}>
            <source src={video} type="video/mp4" />
          </video>
        </ConnectContainer>
      </PageWrapper>
      {
        webFeatureLoad === 0 ? <div></div> : 
        <div key={webFeatureLoad} style={{height: "100%"}}>
          <Animated animationIn="zoomInLeft" animationInDuration={2000} isVisible={true} className="image-container">
            <img src={gameIcon} alt="game-icon" className="game-image" />
          </Animated>
          <div className="wrap-container wrap-column-game-center">
            <div style={{display: "flex", justifyContent:"center"}}>
              <div className="display-flex space-between game-container">
                <Animated animationIn="fadeInLeftBig" animationInDuration={2000} isVisible={true}>
                  <div>
                    <p className="media-title">ABOUT THE GAME</p>
                    <div className="scrollBar-web">
                      <p className="scroll-text">
                        <b style={{fontSize: "18px"}}>The NINJA GAME takes place in ancient times of Shoguns and Samurais. </b>
                        <br/><br/>
                        Ninjas were employed by the Shogun to work secretly in the shadows, loyal only to one master. Their training was hard and required focus and strong will to serve the Shogun. 
                        <br/><br/>
                        Those who passed the training and all the extreme trials were trusted with the most difficult and secret missions. Either to spy on other Shoguns, to scout the position of enemy forces without been discovered, or to assassinate rival Shoguns and Samurais. 
                        <br/><br/>
                        Ninjas value their loyalty to such a degree that if captured they are most likely to die than betray their masters. These elite warriors were situated in clans and had their own territory given by the Shogun, which was mostly villages, so they can disguise themselves as farmers and avoid revenge from their enemies.
                        <br/><br/>
                        NINJA-GAME is an action RPG multiplayer game similar to popular titles such as Path of Exile or the Diablo series. What sets NINJA-GAME apart from these titles is that instead of prohibiting or limiting trade between players, we plan to fully support it with unique integrations of both Crypto and NFT technologies.
                      </p>
                    </div>
                    <div className="wrap-container" style={{marginTop:"20px", justifyContent: "flex-start"}}>
                      {pagesNumbers}
                    </div>
                  </div>
                </Animated>
                <Animated animationIn="fadeInRightBig" animationInDuration={2000} isVisible={true} className="display-flex">
                  <div>
                    <p className="media-title video-circle">GAME TRAILER</p>
                    <div className="video-class">
                      <video className="video" src={ninjaVideo} ref={videoRefWeb} id="videoRefWeb" onEnded={() => myFullCallback()}>
                      </video>
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
                <div className="dummy-scroll-bar" style={{top: "210vh"}}>
                  <img src={shurikenBlackImage} alt="shuriken" className="dummy-shuriken" style={{top: "30vh"}}></img>
                  <p className="dummy-shuriken-letter" style={{top: "30vh"}}>Game</p>
                </div>
              </div>
            </div>
            <div className="game-mobile-container">
              <Animated animationIn="fadeInLeftBig" animationInDuration={2000} isVisible={true}>
                <div>
                  <p className="media-title" style={{textShadow: "1px 1px 2px black"}}>ABOUT THE GAME</p>
                  <div className="mobile-center-container">
                    <Scrollbars 
                      onMouseEnter={() => props.pageScrollHander(true)}
                      onMouseLeave={() => props.pageScrollHander(false)} className="scrollBar">
                      <p className="scroll-text">
                        <b style={{fontSize: "14px"}}>The NINJA GAME takes place in ancient times of Shoguns and Samurais. </b>
                        <br/><br/>
                        Ninjas were employed by the Shogun to work secretly in the shadows, loyal only to one master. Their training was hard and required focus and strong will to serve the Shogun. 
                        <br/><br/>
                        Those who passed the training and all the extreme trials were trusted with the most difficult and secret missions. Either to spy on other Shoguns, to scout the position of enemy forces without been discovered, or to assassinate rival Shoguns and Samurais. 
                        <br/><br/>
                        Ninjas value their loyalty to such a degree that if captured they are most likely to die than betray their masters. These elite warriors were situated in clans and had their own territory given by the Shogun, which was mostly villages, so they can disguise themselves as farmers and avoid revenge from their enemies.
                        <br/><br/>
                        NINJA-GAME is an action RPG multiplayer game similar to popular titles such as Path of Exile or the Diablo series. What sets NINJA-GAME apart from these titles is that instead of prohibiting or limiting trade between players, we plan to fully support it with unique integrations of both Crypto and NFT technologies.
                      </p>
                    </Scrollbars>
                  </div>
                </div>
              </Animated>
              <Animated animationIn="fadeInRightBig" animationInDuration={2000} isVisible={true}>
                <div>
                  <p className="media-title video-circle">GAME TRAILER</p>
                  <div className="mobile-center-container">
                    <div className="video-class">
                      <video className="video" ref={videoRefMobile} id="videoRefMobile" src={ninjaVideo} onEnded={() => myMobileFullCallback()}></video>
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

export default connect(mapStateToProps)(GamePage);