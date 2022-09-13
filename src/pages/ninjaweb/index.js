import React, { useEffect, useState, useCallback } from 'react';
import styled from 'styled-components';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';

import Layout from '../../components/Layout';
import ninjaweb from '../../resources/ninjaweb-body.png';
import './style.css';

const FIRST_ROW_IMGS = [
  'images/web-page/web-1.jpg',
  'images/web-page/web-3.jpg',
  'images/web-page/web-5.jpg',
];

const SECOND_ROW_IMGS = [
  'images/web-page/web-2.jpg',
  'images/web-page/web-4.jpg',
  'images/web-page/web-6.jpg',
];

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .top-section {
    display: flex;
    align-items: center;
    grid-gap: 4rem;

    .about {
      max-width: 350px;

      p {
        margin-top: 1rem;
      }
    }

    .youtube-iframe {
      max-width: 719px;
      max-height: 414px;

      .below-video {
        color: white;
        text-align: center;
        font-size: 12px;
        opacity: 0.5;
      }
    }
  }

  .gallery-section {
    margin-top: 6rem;
    max-width: 1200px;
    border-top: 2px solid #4d81ba;
    border-bottom: 2px solid #4d81ba;
    padding: 2rem 0;
    width: 100%;

    .gallery {
      display: flex;
      flex-direction: column;
      row-gap: 35px;
      padding: 0 20px;
    }

    .custom-row {
      display: flex;
      justify-content: space-between;
      column-gap: 35px;
    }
  }

  @media (max-width: 768px) {
    .top-section {
      flex-direction: column;

      .about {
        width: 70%;
        text-align: center;
      }

      .youtube-iframe {
        padding: 0 1rem;
        width: 100%;
      }
    }

    .gallery-section {
      width: auto;
      border-top: none;
      border-bottom: none;

      .gallery {
        row-gap: 20px;
      }

      img {
        max-width: 300px;
        margin: 0rem;
      }

      .custom-row  {
        justify-content: center;
        flex-direction: column;
        row-gap: 20px;
      }
    }
  }
`;

const NinjaWeb = () => {
  useEffect(() => {
    document.body.style.backgroundImage = `url(${ninjaweb})`;
  }, []);
  const [isZoomed, setIsZoomed] = useState(false);

  const handleImgLoad = useCallback(() => {
    setIsZoomed(true);
  }, []);

  return (
    <Layout>
      <Container id='web-sec'>
        <div className='top-section'>
          <div className='about'>
            <img alt='img' src='images/img1.png' className='img-fluid' />
            <p>
              NINJA-WEB is the user dashboard of Ninja Protocol where you have the ability to utilize your NFTs within the Ninja Protocol ecosystem. You will be able to represent yourself with your NFT avatars on your NINJA profile and compete with others on the NINJA leaderboard.{' '}
            </p>
          </div>
          <div className='youtube-iframe'>
            <img alt='img' src='images/ninja-web.jpg' className='img-fluid' />
          </div>
        </div>

        <div className='gallery-section'>
          <div className='gallery'>
            <div className='custom-row'>
              {FIRST_ROW_IMGS.map((img, index) => (
                <div key={index}>
                  <Zoom
                    overlayBgColorStart='rgba(0, 0, 0, 0.9)'
                    overlayBgColorEnd='rgba(0, 0, 0, 0.9)'
                  >
                    <img
                      alt='gallery'
                      src={img}
                      onLoad={handleImgLoad}
                      width={isZoomed ? '100%' : '100px'}
                    />
                  </Zoom>
                </div>
              ))}
            </div>
            <div className='custom-row'>
              {SECOND_ROW_IMGS.map((img, index) => (
                <div key={index}>
                  <Zoom
                    overlayBgColorStart='rgba(0, 0, 0, 0.9)'
                    overlayBgColorEnd='rgba(0, 0, 0, 0.9)'
                  >
                    <img
                      alt='gallery'
                      src={img}
                      onLoad={handleImgLoad}
                      width={isZoomed ? '100%' : '150px'}
                    />
                  </Zoom>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </Layout>
  );
};

export default NinjaWeb;
