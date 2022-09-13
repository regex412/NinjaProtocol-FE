import styled from 'styled-components';
import "./style.css";

const NINJA_SOCIALS = [
  {
    icon: '/socialLinkIcons/twtr.svg',
    Link: 'https://twitter.com/NinjaProtocol',
  },
  {
    icon: '/socialLinkIcons/discord.svg',
    Link: 'https://discord.gg/ninjaprotocol',
  },
  {
    icon: '/socialLinkIcons/telegram.svg',
    Link: 'https://t.me/ninjamoney',
  },
  {
    icon: '/socialLinkIcons/youtube.svg',
    Link: 'https://www.youtube.com/NINJAPROTOCOL',
  },
  {
    icon: '/socialLinkIcons/twitch.svg',
    Link: 'https://www.twitch.tv/ninjaprotocol',
  },
  {
    icon: '/socialLinkIcons/Medium.svg',
    Link: 'https://medium.com/@NinjaSolProto',
  },
  {
    icon: '/socialLinkIcons/instagram.svg',
    Link: 'https://www.instagram.com/ninjaprotocol/',
  },
];

const Container = styled.div`
  margin: 0 auto;
  width: 90%;

  .content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;

    p {
      font-size: 14px;
      color: #ffffff;
    }

    ul {
      list-style-type: none;
      margin: 0px;

      li {
        margin-left: 1rem;
        a {
          img {
            border-radius: 15px;
          }
        }
      }
    }
  }
  @media (max-width: 1550px) {
    .content {
      p {
        font-size: 10px;
      }
    }
  }

  @media (max-width: 700px) {
    padding: 0 0.5rem;

    .content {
      flex-direction: column-reverse;
      text-align: center;
      width: 100%;

      ul {
        margin-bottom: 0.7rem;
      }
    }
  }
  @media screen and (min-width: 320px) and (max-width: 700px) {
    width: 100%;
    .content {
      flex-direction: column;
    }
  }
`;

const SvgBox = styled.div`
  margin: 0 10px;
`;

export default function Footer({ isPositionFixed }) {
  const FooterWrapper = styled.section`
    background: transparent;
    width: 100%;
    max-height: 100px;
    position: ${isPositionFixed ? 'absolute' : 'relative'};
    bottom: 0;
    padding: 10px 0;

    @media (max-width: 991px) {
      position: relative;
    }
  `;
  return (
    <FooterWrapper id='footer' style={{background: 'black'}}>
      <Container>
        <div className='content'>
          <p className='m-0'>
            Ninja Protocol {(new Date().getFullYear())}.
          </p>
          <SvgBox>
            <ul className='d-flex justify-content-end' style={{paddingLeft: "0px", marginBottom: "0px", paddingBottom: "0px"}}>
              {NINJA_SOCIALS.map(({ icon, Link }, index) => (
                <li key={index}>
                  <a href={Link} target='_blank' rel='noreferrer'>
                    <img alt={icon} src={icon} className='img-fluid' style={{ width: '32px', height: '32px' }} />
                  </a>
                </li>
              ))}
            </ul>
          </SvgBox>
        </div>
      </Container>
    </FooterWrapper>
  );
}
