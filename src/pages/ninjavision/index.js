import React from "react";
import Layout from "../../components/Layout";
import { PageWrapper, ConnectContainer } from "../../styles/globalstyle";
import ninjavision from "../../resources/ninjavision.png";
import styled from "styled-components";
import "./style.css";
const VisionContainer = styled.div`
  margin: 6% 10% 5% 5%;
  @media (max-width: 767px) {
    margin: 15% 5%;
  }
`;
const Leftp = styled.p`
  font-family: Mitr;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 28px;
  color: #ffffff;
  text-align: justify;
  @media only screen and (min-device-width: 850px) and (max-device-width: 1024px) {
    line-height: 16px;
    text-align: left;
  }
`;
const Rightp = styled.p`
  font-family: Mitr;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 22px;
  color: #ffffff;
  text-align: justify;
  @media only screen and (min-device-width: 850px) and (max-device-width: 1024px) {
    line-height: 18px;
    text-align: left;
  }
`;
const Image1 = styled.img`
  height: 100%;
`;
const ImageWrapper = styled.img`
  height: 100%;
  @media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
    height: unset;
  }
`;
const RowWrapper = styled.div`
  @media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
    height: unset;
  }
`;
class NinjaVision extends React.Component {
  componentWillMount() {
    document.body.style.backgroundImage = `url(${ninjavision})`;
  }
  render() {
    return (
      <Layout isPositionFixed={true}>
        <PageWrapper className="vision">
          <ConnectContainer>
            <VisionContainer>
              <div className="row vision-box">
                <div className="col-md-6 col-lg-2 col-xl-3 vision-text-box">
                  <img
                    alt="img"
                    src="images/ninja-vision.png"
                    className="img-fluid m-auto"
                  />
                  <Leftp className="mt-4 vision-text">
                    functionality and capability. It offers users the ability to
                    navigate their way around on-chain data with ease.
                    <br />
                    <br />
                    Ninja Protocol’s approach to the design of an explorer is
                    unique from both the back-end systems perspective and the
                    simple front-end.
                    <br />
                    <br />
                    Our design philosophy is to minimalize the data shown to the
                    bare basics for beginner users while providing the ability
                    to toggle advanced data and functions for power users.
                  </Leftp>
                </div>
                <div className="col-md-6 col-lg-5 col-xl-4 mb-4 vision-text-box">
                  <Image1
                    src="images/ninja-vission-1-FILEminimizer.png"
                    className="img-fluid overly-img"
                  ></Image1>
                </div>
                <div className="col-md-12 col-lg-3 col-xl-2 vision-text-box">
                  <RowWrapper className="row">
                    <div className="col-md-12  mb-4">
                      <ImageWrapper
                        alt="img"
                        src="/images/vision-2.png"
                        className="img2 img-fluid overly-img"
                      />
                    </div>
                    <div className="col-md-12 mb-4">
                      <ImageWrapper
                        alt="img"
                        src="/images/vision-3.png"
                        className="img3 img-fluid overly-img"
                      />
                    </div>
                  </RowWrapper>
                </div>
                <div className="col-md-12 col-lg-2 col-xl-3 vision-text-box ninja-vision-last">
                  <div className="row" >
                    <div className="col-md-12">
                      <img
                        alt="img"
                        src="/images/vision-4.png"
                        className="img4 img-fluid overly-img"
                      />
                    </div>
                    <div className="col-md-12 ">
                      <Rightp className="mt-4">
                        NINJA-VISION also powers our investigation unit
                        NINJA-CIA providing in-depth analysis into suspicious
                        transactions and wallet activity. There are no plans to
                        reveal further details regarding NINJA-VISION until
                        release.
                      </Rightp>
                    </div>
                  </div>
                </div>
              </div>
            </VisionContainer>
          </ConnectContainer>
        </PageWrapper>
      </Layout>
    );
  }
}
export default NinjaVision;
