import React, { useEffect, useRef, useState } from "react";
import { connect } from "react-redux";
import { Navbar, Nav, NavDropdown, Container, DropdownButton, ButtonGroup } from "react-bootstrap";
import {Animated} from "react-animated-css";
import "./ProtocolPage.css";
import video from '../../../../resources/video/SCENE1.webm';
import { PageWrapper, ConnectContainer } from '../../../../styles/globalstyle';
import protocolIcon from "../../../../resources/images/ninja_protocol_icon.png";
import stepUp from "../../../../resources/images/step_up.png";
import stepUpBlack from "../../../../resources/images/step_up_black.png";
import shurikenBlackImage from "../../../../resources/images/shuriken-black.png";

const ProtocolPage = (props) => {

  const showVideo = useRef(null);
  const [show, setShow] = useState(false);
  const [webFeatureLoad, setWebFeatureLoad] = useState(0);

  useEffect(() => {
    if (props.pageNumber === 0) {
      showVideo.current.currentTime = 0;
      showVideo.current.play();
      setWebFeatureLoad(1);
    }
  }, [props.pageNumber]);

  
  const getPagesNumbers = () => {
    const pageNumbers = [];
      pageNumbers.push(
        <div className="display-flex" key="1">
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
          <video muted className='fullscreen-bg-video video-protocol' ref={showVideo}>
            <source src={video} type="video/mp4" />
          </video>
        </ConnectContainer>
      </PageWrapper>
      {
        <div style={{height: "100%"}} key={webFeatureLoad}>
          <div className="wrap-container protocol-container">
            <div className="main-container">
              <div className="protocol-menu">
                  <div className="display-flex space-between protocol-web">
                    <Animated animationIn="zoomInLeft" animationInDuration={2000} isVisible={true}>
                      <img src={protocolIcon} alt="protocol-icon" className="protocol-image" />
                    </Animated>
                    <div className="display-flex align-center">
                      <Animated animationIn="zoomInRight" animationInDuration={2000} isVisible={true}>
                        <Navbar>
                          <NavDropdown
                            title="NINJA ECOSYSTEM"
                            show={show}
                            onMouseEnter={() => setShow(true)}
                            onMouseLeave={() => setShow(false)}
                          >
                            <NavDropdown.Item onClick={() => { props.pageChangeHandler(2);}}>NINJA GAME</NavDropdown.Item>
                            <NavDropdown.Item href="https://pixels.ninjaprotocol.io/" target="_blank" rel="noreferrer">NINJA PIXELS</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.1" className="last-navitem">DEGEN BALL</NavDropdown.Item>
                          </NavDropdown>
                          <Nav.Link href="https://docs.ninjaprotocol.io/" target="_blank" rel="noreferrer">ABOUT US</Nav.Link>
                        </Navbar>
                      </Animated>
                    </div>
                  </div>
                  <div className="space-between protocol-mobile">
                    <Animated animationIn="zoomInLeft" animationInDuration={2000} isVisible={true}>
                      <img src={protocolIcon} alt="protocol-icon" className="protocol-image" style={{float: "left"}} />
                    </Animated>
                    <Animated animationIn="zoomInRight" animationInDuration={2000} isVisible={true}>
                      <Navbar collapseOnSelect expand="lg" variant="light" className="mobile-navbar">
                        <Container>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                          <div className="mb-2">
                            <DropdownButton
                              as={ButtonGroup}
                              key="start"
                              id="dropdown-button-drop-start"
                              drop="start"
                              variant="secondary"
                              title="NINJA PROTOCOL"
                            >
                              <NavDropdown.Item onClick={() => { props.pageChangeHandler(2);}}>NINJA GAME</NavDropdown.Item>
                              <NavDropdown.Item href="https://pixels.ninjaprotocol.io/" target="_blank" rel="noreferrer">NINJA PIXELS</NavDropdown.Item>
                              <NavDropdown.Item href="#action/3.1" className="last-navitem">DEGEN BALL</NavDropdown.Item>
                            </DropdownButton>
                          </div>
                          <Nav.Link href="https://docs.ninjaprotocol.io/" target="_blank" rel="noreferrer">ABOUT US</Nav.Link>
                        </Navbar.Collapse>
                        </Container>
                      </Navbar>
                    </Animated>
                  </div>
              </div>
              <div className="protocol-second">
                <div className="display-flex space-between protocol-web">
                  <Animated animationIn="zoomInLeft" animationInDuration={2000} isVisible={true}>
                    <div className="scrollbar-container">
                      <p className="about-protocol">Ninja Protocol, an ecosystem of products 
                        being developed on the Solana blockchain  
                        with focus on Gaming and NFTs.</p>
                      <div className="wrap-container" style={{marginTop:"40px"}}>
                        {pagesNumbers}
                      </div>
                    </div>
                  </Animated>
                  <div style={{display:"flex", flexDirection: "column-reverse", marginBottom: "15px"}}>
                    <Animated animationIn="zoomInRight" animationInDuration={2000} isVisible={true}>
                      <a href="https://dex.ninjaprotocol.io/" className="display-flex trade-ninja">
                        <img className="step-up-image" src={stepUp} alt="step up" />
                        <p className="step-up-letter">TRADE $NINJA</p>
                      </a>
                    </Animated>
                  </div>
                </div>
                <div className="dummy-scroll-bar">
                  <img src={shurikenBlackImage} alt="shuriken" className="dummy-shuriken"></img>
                  <p className="dummy-shuriken-letter">HOME</p>
                </div>
              </div>
            </div>
          </div>
          <div className="protocol-mobile mobile-about-protocol">
            <div>
              <Animated animationIn="zoomInLeft" animationInDuration={2000} isVisible={true}>
                <div style={{width: "100%",display: "flex", justifyContent: "center"}}>
                  <div className="scrollbar-container">
                    <p className="about-protocol">Ninja Protocol, an ecosystem of products 
                      being developed on the Solana blockchain  
                      with focus on Gaming and NFTs.</p>
                  </div>
                </div>
              </Animated>
              <div style={{width: "100%",display: "flex", justifyContent: "center"}}>
                <div className="scrollbar-container">
                  <Animated animationIn="zoomInRight" animationInDuration={2000} isVisible={true}>
                    <a href="https://dex.ninjaprotocol.io/" className="display-flex trade-ninja">
                      <img className="step-up-image" src={stepUpBlack} alt="step up" />
                      <p className="step-up-letter">TRADE $NINJA</p>
                    </a>
                  </Animated>
                </div>
              </div>
              <Animated animationIn="zoomInRight" animationInDuration={2000} isVisible={true}>
                <div className="wrap-container" style={{marginTop:"40px"}}>
                  {pagesNumbers}
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
});

export default connect(mapStateToProps)(ProtocolPage);