import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import HomeIcon from './icons/navigation/HomeIcon.jsx';
import MapIcon from './icons/navigation/MapIcon.jsx';
import FavoriteIcon from './icons/navigation/FavoriteIcon.jsx';

function NavBar() {
  return (
    <Navigation>
      <NavList role="list">
        <NavigationLink to="/">
          <li>
            <HomeIcon />
            <p>Start</p>
          </li>
        </NavigationLink>
        <NavigationLink to="/map">
          <li>
            <MapIcon />
            <p>Karte</p>
          </li>
        </NavigationLink>
        <NavigationLink to="/favorites">
          <li>
            <FavoriteIcon />
            <p>Favoriten</p>
          </li>
        </NavigationLink>
      </NavList>
    </Navigation>
  );
}

const Navigation = styled.nav`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  height: 4.6875rem;
  position: fixed;
  bottom: 0;
  border-top: 1px solid black;
  background-color: #ffffff;
`;

const NavList = styled.ul`
  width: 100%;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: space-around;
  color: #2196f3;
  list-style: none;
`;

const NavigationLink = styled(NavLink)`
  text-decoration: none;
  color: #2196f3;
  &.active {
    text-decoration: none;
    color: #0367b4;
  }
`;

export default NavBar;