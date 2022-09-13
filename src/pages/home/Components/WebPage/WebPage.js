import React, { useEffect, useRef, useState } from "react";
import { connect } from "react-redux";
import {Animated} from "react-animated-css";
import { PageWrapper, ConnectContainer } from '../../../../styles/globalstyle';
import "./WebPage.css";
import video from '../../../../resources/video/SCENE2.webm';
import webIcon from "../../../../resources/images/ninja-web-icon.png";
import shurikenBlackImage from "../../../../resources/images/shuriken-black.png";
import shurikenImage from "../../../../resources/images/shuriken.png";
import swap from "../../../../resources/images/swap.png";
import user from "../../../../resources/images/user.png";
import leaderboard from "../../../../resources/images/leaderboard.png";
import marketplace from "../../../../resources/images/marketplace.png";
import auction from "../../../../resources/images/auction.png";


const WebPage = (props) => {
  const showVideo = useRef(null);
  const [showShuriken, setShowShuriken] = useState(false);
  const [imageClicked, setImageClicked] = useState(false);
  const [imageClass, setImageClass] = useState("mobile-shuriken-image-big");
  const [showImage, setShowImage] = useState("show-image");
  const [webFeatureLoad, setWebFeatureLoad] = useState(0);

  useEffect(() => {
    if (props.pageNumber === 1) {
      showVideo.current.currentTime = 0;
      showVideo.current.play();
      setWebFeatureLoad(1);
    }
  }, [props.pageNumber]);

  const showImageCallback = () => {
    if(!imageClicked)
    {
      setImageClass("mobile-shuriken-image");
      setShowImage("show-none-image");
      setImageClicked(true);
    } else {
      setImageClass("mobile-shuriken-image-big"); 
      setShowImage("show-image");
      setImageClicked(false);
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
          <div onClick={() => { props.pageChangeHandler(2);}} style={{cursor:"pointer"}}>
            <div className="page-container">
              <div className="clippath-polygon" />
            </div>
            <p className="ninja-page-link">GAME</p>
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
    <div style={{height: "100%", overflow: "hidden"}}>
      <PageWrapper id='home-sec'>
        <ConnectContainer>
          <video muted className='fullscreen-bg-video video-web' ref={showVideo}>
            <source src={video} type="video/mp4" />
          </video>
        </ConnectContainer>
      </PageWrapper>
      {
        webFeatureLoad === 0 ? <div></div> : 
        <div style={{height:"100%"}} key={webFeatureLoad}>
          <div className="flex-container">
            <div>
              <Animated animationIn="zoomInLeft" animationInDuration={2000} isVisible={true}>
                <img src={webIcon} alt="web-icon" className="web-image" style={{width: "304px", height: "95px"}} />
              </Animated>
            </div>
            <Animated animationIn="zoomInLeft" animationInDuration={2000} isVisible={true}>
              <p className="web-introduce">NINJA-WEB is an ecosystem of decentralized applications on the Solana blockchain.
              Together they offer a full suite of ways for users of Ninja Protocol's ecosystem to interact with various gaming and NFT products. 
              </p>
            </Animated>
            <Animated animationIn="fadeInLeft" animationInDuration={2000} isVisible={true}>
            <div>
              <div className="navigation-wrapper">
                  {
                    showShuriken ? 
                    <input id="toggleCheck" type="checkbox"/> :
                    <input id="toggleCheck" type="checkbox" defaultChecked />
                  }
                <label htmlFor="toggleCheck" className="toggle-minimize">
                  <div className="button" id="menuBtn">
                    {
                      showShuriken ? 
                      <img src={shurikenBlackImage} alt="shuriken-black" onClick={() => { setShowShuriken(false);}} /> :
                      <img src={shurikenImage} alt="shuriken-white" onClick={() => { setShowShuriken(true);}} />
                    }
                  </div>
                </label>
                <nav className="navigation">
                  <ul>
                    <li><a href="/#">AUCTION HOUSE</a></li>
                    <li>|</li>
                    <li><a href="https://dex.ninjaprotocol.io/" target="_blank" rel="noreferrer">DEX/SWAP</a></li>
                    <li>|</li>
                    <li><a href="https://profile.ninjaprotocol.io/" target="_blank" rel="noreferrer">PROFILE</a></li>
                    <li>|</li>
                    <li><a href="https://profile.ninjaprotocol.io/leaderboard" target="_blank" rel="noreferrer">LEADERBOARD</a></li>
                    <li>|</li>
                    <li><a href="https://market.ninjaprotocol.io/" target="_blank" rel="noreferrer">MARKETPLACE</a></li>
                  </ul>
                </nav>
                <div className="wrap-container" style={{marginTop:"20px", justifyContent: "flex-start", marginLeft: "5vw"}}>
                  {pagesNumbers}
                </div>
              </div>
            </div>
            </Animated>            
            <div className="dummy-scroll-bar" style={{top: "120vh"}}>
              <img src={shurikenBlackImage} alt="shuriken" className="dummy-shuriken" style={{top: "20vh"}}></img>
              <p className="dummy-shuriken-letter" style={{top: "20vh"}}>Web</p>
            </div>
          </div>
          <div className="web-mobile-page">
            <div>
              <Animated animationIn="zoomInLeft" animationInDuration={2000} isVisible={true}>
                <img src={webIcon} alt="web-icon" className="web-image" />
              </Animated>
              <Animated animationIn="zoomInLeft" animationInDuration={2000} isVisible={true}>
                <div style={{width: "100%"}} className="display-flex web-mobile-introduce-center">
                  <p className="web-mobile-introduce">NINJA-WEB is the user dashboard of Ninja Protocol 
                    where you have the ability to utilize your NFTs 
                    within the Ninja Protocol ecosystem. 
                    You will be able to represent yourself with your 
                    NFT avatars on your NINJA profile and compete 
                    with others on the NINJA leaderboard.</p>
                </div>
              </Animated>
            </div>
            <Animated animationIn="zoomInLeft" animationInDuration={2000} isVisible={true}>
              <div>
                <div className={`shuriken-swap ${showImage}`}>
                  <p className="shuriken-letter">DEX/SWAP</p>
                  <a href="https://dex.ninjaprotocol.io/" target="_blank" rel="noreferrer"><img src={swap} alt="swap" className="shuriken-child-image"></img></a>
                </div>
                <div className={`shuriken-user ${showImage}`}>
                  <p className="shuriken-letter">PROFILE</p>
                  <a href="https://profile.ninjaprotocol.io/" target="_blank" rel="noreferrer"><img src={user} alt="user" className={`shuriken-child-image`}></img></a>
                </div>
                <div className={`shuriken-leaderboard ${showImage}`}>
                  <p className="shuriken-letter">LEADERBOARD</p>
                  <a href="https://profile.ninjaprotocol.io/leaderboard" target="_blank" rel="noreferrer"><img src={leaderboard} alt="leaderboard" className={`shuriken-child-image`}></img></a>
                </div>
                <div className={`shuriken-marketplace ${showImage}`}>
                  <p className="shuriken-letter">MARKET PLACE</p>
                  <a href="https://market.ninjaprotocol.io/" target="_blank" rel="noreferrer"><img src={marketplace} alt="markedplace" className={`shuriken-child-image`}></img></a>
                </div>
                <div className={`shuriken-auction ${showImage}`}>
                  <p className="shuriken-letter">AUCTION</p>
                  <a href="https://market.ninjaprotocol.io/" target="_blank" rel="noreferrer"><img src={auction} alt="auction" className={`shuriken-child-image`}></img></a>
                </div>
                <img 
                  src={shurikenImage} 
                  alt="shuriken-white" 
                  className={imageClass}
                  onClick={() => { showImageCallback();}}
                ></img>
              </div>
            </Animated>
          </div>
        </div>
      }
    </div>
  );
};

const mapStateToProps = state => ({
  pageNumber: state.pageNumber
})

export default connect(mapStateToProps)(WebPage);