import React from 'react';
//import { Link } from 'react-router-dom';
//import { Nav } from 'react-bootstrap';
//import useWindowDimensions from '../../utils/layout';
//import { useHistory } from 'react-router-dom';
//import styled from 'styled-components';
import './style.css';
/*
const MENU_ITEMS = [
  {
    label: 'Products',
    href: '/',
    external: false,
    icon: true,
  },
  {
    label: 'Profile',
    href: 'https://profile.ninjaprotocol.io/',
    external: true,
    icon: true,
  },
  {
    label: 'Trade',
    href: 'https://dex.ninjaprotocol.io/',
    external: true,
    icon: true,
  },
  {
    label: 'Marketplace',
    href: 'https://market.ninjaprotocol.io',
    external: true,
    icon: true,
  },
  {
    label: 'Leaderboard',
    href: 'https://profile.ninjaprotocol.io/leaderboard/',
    external: true,
    icon: true,
  },
  {
    label: 'About Us',
    href: 'https://docs.ninjaprotocol.io/',
    external: true,
    icon: true,
  },
  {
    label: 'Contact Us',
    href: '/contactUs',
    external: false,
    icon: true,
  },
];

const ContainerNav = styled.div`
  background: rgba(0, 0, 0, 0.2) !important;
  z-index: 12;

  .connect-btn img {
    width: 33px;
    height: 20px;
  }

  .dex-button {
    a {
      text-decoration: none;
    }
  }
`;
*/
export default function Header() {
  /*
  const { width } = useWindowDimensions();
  const [menuItem, setMenuItem] = useState('Products');
  const [localMem, setLocalMem] = useState('Products');

  const history = useHistory();
  const path = history.location.pathname;

  const handleMenuClick = (item) => {
    localStorage.setItem('menu', localMem);
    setLocalMem(item);
    setMenuItem(item);
    localStorage.setItem('menu', item);
  };
  const local = localStorage.getItem('menu');

  useEffect(() => {
    if (path == '/') {
      localStorage.setItem('menu', 'Products');
    } else if (local) {
      setMenuItem(local);
      setLocalMem(local);
    }
  }, [local]);
*/
  return (
    /*
    <ContainerNav>
      <Navbar
        collapseOnSelect
        expand='lg'
        variant='dark'
        className='navbar-container'
      >
        <Link className='link' to='/'>
          <Navbar.Brand className='d-flex align-items-center logo-section mr-2'>
            <img src='/images/LOGO_SOL.png' id='brand' alt='logo' />
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse id='responsive-navbar-nav'>
          <div className='container'>
            <Nav className='m-auto'>
              {MENU_ITEMS.map(({ label, href, external, icon }) => (
                <MenuItems
                  key={label}
                  label={label}
                  href={href}
                  external={external}
                  icon={icon}
                  active={menuItem}
                  handleMenuClick={handleMenuClick}
                />
              ))}
            </Nav>
          </div>
        </Navbar.Collapse>
      </Navbar>
    </ContainerNav>
    */
   <div></div>
  );
}
/*
const MenuItems = ({
  label,
  href,
  external,
  active,
  icon,
  handleMenuClick,
}) => {
  return external ? (
    <a href={href}>
      <Nav.Item
        className={`navbar-item default nav-link ${
          active === label && 'active'
        }`}
      >
        <a>{label}</a>
      </Nav.Item>
    </a>
  ) : (
    <Link className='link' to={href}>
      <Nav.Item
        onClick={() => handleMenuClick(label)}
        className={`navbar-item default nav-link ${
          active === label && 'active'
        }`}
      >
        {label}
      </Nav.Item>
    </Link>
  );
};
*/