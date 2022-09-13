import styled from 'styled-components';

export const PageWrapper = styled.main`
  min-height: calc(80vh);
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const ConnectContainer = styled.div`
  height: 100%;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;

  .info {
    margin-bottom: 2rem;
    font-size: 18px;
    font-weight: 500;
    color: #4f2398;
  }

  .container {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    align-items: center;
    min-height: fit-content;

    .logo-container {
      margin-right: 3rem;
      img {
        width: 316px;
        height: 316px;
      }
    }

    .info-container {
      height: 100%;
      width: 435px;

      img {
        width: 427px;
        height: 160px;
      }

      .info-section {
        font-family: Arial;
        font-style: normal;
        font-weight: normal;
        font-size: 20px;
        line-height: 23px;
        margin: 37 auto;

        span {
          color: #1cd0ab;
        }
      }

      .button-section {
        display: flex;
        column-gap: 35px;
      }
    }
  }

  @media (max-width: 728px) {
    .container {
      flex-direction: column;
      justify-content: center;
      align-items: center;

      .logo-container {
        margin-right: 0;
        img {
          width: 100%;
          height: auto;
        }
      }

      .info-container {
        height: 100%;
        width: 100%;

        img {
          width: 100%;
          height: auto;
        }
      }

      .button-section {
        flex-wrap: wrap;
        justify-content: center !important;
        grid-gap: 1rem;
      }
    }
  }

  @media (max-width: 728px) {
    .container {
      .info-container {
        text-align: center;
        margin-top: 20px;
      }
      .logo-container {
        max-width: 250px;
        max-height: auto;
      }
      .info-container > img {
        text-align: center;
      }
    }
  }
`;
