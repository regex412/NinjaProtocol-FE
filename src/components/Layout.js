import styled from 'styled-components';

import { useHistory } from 'react-router-dom';
import Footer from './footer';
import Header from './Header';

const AppWrapper = styled.div`
  background: transparent;
  min-height: 100vh;
  position: relative;
  display: flex;
  flex-direction: column;

  .main-wrapper {
    flex: 1;
    @media (max-width: 1280px) {
      max-width: 100%;
    }
  }

  .contact-wrapper {
    max-width: 1550px;

    @media (max-width: 1280px) {
      max-width: 100%;
      height: 900px;
      margin-top: 100px; 
    }
  }
`;

export default function Layout({ children, isPositionFixed }) {
  const history = useHistory();
  const path = history.location.pathname;

  return (
    <AppWrapper>
      <Header />
      <div
        className={path !== '/contactUs' ? 'main-wrapper' : 'contact-wrapper'}
      >
        {children}
      </div>
      <Footer isPositionFixed={isPositionFixed} />
    </AppWrapper>
  );
}
