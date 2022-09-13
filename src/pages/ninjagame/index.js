import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

import Layout from "../../components/Layout";
import ninjaweb from "../../resources/ninjaweb-body.png";
//import useWindowDimensions from "../../utils/layout";
import "./style.css";
import { BounceLoader } from "react-spinners";

const DAY_IMAGE = [
  "/images/game_ss/d-1.jpg",
  "/images/game_ss/d-2.jpg",
  "/images/game_ss/d-3.jpg",
  "/images/game_ss/d-4.png",
  "/images/game_ss/d-5.png",
  "/images/game_ss/d-6.jpg",
  "/images/game_ss/d-7.png",
];

const NIGHT_IMAGE = [
  "/images/game_ss/n-1.png",
  "/images/game_ss/n-2.jpg",
  "/images/game_ss/n-3.png",
  "/images/game_ss/n-4.png",
  "/images/game_ss/n-5.png",
  "/images/game_ss/n-6.jpg",
  "/images/game_ss/n-7.png",
];

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  .game-logo {
    text-align: center;
    margin-bottom: 2rem;
    img {
      width: 317px;
      height: 100px;
    }
  }

  .main-content {
    max-width: 1655px;
    border-bottom: 2px solid #920bc3;
    padding-bottom: 3rem;
    display: flex;
    justify-content: center;
    width: 87%;
    img {
      width: 100% !important;
      height: 90% !important;
    }

    .col-first {
      min-width: 200px;
      flex-basis: 50%;
      max-width: 411px;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      margin-right: 21px;
    }

    .col-second {
      flex-grow: 1;
      height: 100%;
      min-width: 300px;
      margin: 48px 0px;
      max-width: 785px;

      iframe {
        height: 430px;
      }
    }
    .col-third {
      min-width: 200px;
      flex-basis: 50%;
      max-width: 411px;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      margin-left: 21px;
    }
  }
  @media (max-width: 768px) {
    .main-content {
      flex-direction: column;
      align-items: center;

      .game-logo {
        margin-bottom: 2rem;
        margin: 2rem;
        img {
          width: 100%;
          height: auto;
        }
      }

      img {
        width: 90%;
        height: auto;
      }
    }
  }
`;

function NinjaGame() {
//  const { width } = useWindowDimensions();
  const [loadDayImage, setLoadDayImage] = useState(true);
  const [loadNightImage, setLoadNightImage] = useState(true);

  useEffect(() => {
    document.body.style.backgroundImage = `url(${ninjaweb})`;
  });

  return (
    <Layout>
      <Container id="ninjagame">
        <div className="game-logo">
          <img
            src="/images/game-logo.png"
            alt="ninja game logo"
            className="img-fluid w-100"
          />
        </div>

        <div className="main-content">
          <div className="col-first">
            <div className="left-right-sec mt-2">DAY</div>
            {DAY_IMAGE.map((image, index) => (
              <Zoom
                overlayBgColorStart="rgba(0, 0, 0, 0.9)"
                overlayBgColorEnd="rgba(0, 0, 0, 0.9)"
              >
                <img
                  src={image}
                  alt="d1"
                  className="img-fluid w-100 thumbnail"
                  key={index}
                  style={{ visibility: loadDayImage ? "hidden" : "visible" }}
                  onLoad={() => {
                    setTimeout(() => {
                      setLoadDayImage(false);
                    }, 500);
                  }}
                />
                {loadDayImage && (
                  <div className="spiner">
                    <BounceLoader color="#8919c1" loading={loadDayImage} />
                  </div>
                )}
              </Zoom>
            ))}
          </div>
          <div className="col-second">
            <iframe
              className="videoContent"
              title="game-intro"
              // width="100%"
              // height="100%"
              src="https://www.youtube.com/embed/IWPr9cVGjBg"
              // frameborder="0"
              // allowfullscreen
            />
            <div className="text-sec border-gradient-purple">
              <p>
                The NINJA GAME takes place in ancient times of Shoguns and
                Samurais. Ninjas were employed by the Shogun to work secretly in
                the shadows, loyal only to one master.
              </p>
              <p>
                Their training was hard and required focus and strong will to
                serve the Shogun. Those who passed the training and all the
                extreme trials were trusted with the most difficult and secret
                missions.
              </p>
              <p>
                Either to spy on other Shoguns, to scout the position of enemy
                forces without been discovered, or to assassinate rival Shoguns
                and Samurais.
              </p>
              <p>
                Ninjas value their loyalty to such a degree that if captured
                they are most likely to die than betray their masters.
              </p>
              <p>
                These elite warriors were situated in clans and had their own
                territory given by the Shogun, which was mostly villages, so
                they can disguise themselves as farmers and avoid revenge from
                their enemies.
              </p>
              <p>
                NINJA-GAME is an action RPG multiplayer game similar to popular
                titles such as Path of Exile or the Diablo series.
              </p>
              <p>
                What sets NINJA-GAME apart from these titles is that instead of
                prohibiting or limiting trade between players, we plan to fully
                support it with unique integrations of both Crypto and NFT
                technologies.
              </p>
              <p>
                Imagine a game where there is no punishment for trading in-game
                items, services, or even accounts with each other.
              </p>
              <p>What if it was encouraged and supported instead?</p>
              <p>
                Imagine a rich ARPG environment that not only looks great but
                has a thriving economy full of trading activity and engaging
                gameplay
              </p>
              <p>
                Another thing that sets NINJA-GAME apart from our competitors is
                our team. It consists of hardcore gamers, experienced in
                multiple ARPG games, with extensive play-time in many AAA
                titles.
              </p>
              <p>
                Combined, we have well over 60,000 hours of gameplay at the
                highest levels of both trade and the games themselves. Our team
                understands the grind and what makes games of this genre fun to
                play over and over again.
              </p>
              <p>
                Our main focus is on the game mechanics and building a great
                game. The vision is to create a game that is fun to play as a
                stand-alone game yet offers immense value for your time through
                its connectivity with cryptocurrencies and NFT technologies.
              </p>
              <p>A game by gamers, truly for gamers.</p>
              <p>This is the FUTURE we intend to create.</p>
            </div>
          </div>
          <div className="col-third">
            <div className="left-right-sec mt-2">NIGHT</div>
            {NIGHT_IMAGE.map((image, index) => (
              <Zoom
                overlayBgColorStart="rgba(0, 0, 0, 0.9)"
                overlayBgColorEnd="rgba(0, 0, 0, 0.9)"
              >
                <img
                  src={image}
                  alt="d1"
                  className="img-fluid w-100 thumbnail"
                  key={index}
                  style={{ visibility: loadNightImage ? "hidden" : "visible" }}
                  onLoad={() => {
                    setTimeout(() => {
                      setLoadNightImage(false);
                    }, 500);
                  }}
                />
                {loadNightImage && (
                  <div className="spiner">
                    <BounceLoader color="#8919c1" loading={loadNightImage} />
                  </div>
                )}
              </Zoom>
            ))}
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-md-12">
            <div className="hrr" />
          </div>
        </div>
      </Container>
    </Layout>
  );
}
export default NinjaGame;
