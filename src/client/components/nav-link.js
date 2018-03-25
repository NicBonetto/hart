import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const NavWrapper = styled.div`
  display: flex;
  display: inline-block;
  align-items: center;
  flex-direction: row;
  margin-right: 10px;
`;

const Nav = styled(Link)`
  color: rgba(0, 0, 0, 0.6);
  text-decoration: none;
  font-family: 'Open Sans', sans-serif;
  font-weight: 400;

  &:hover {
    color: rgba(0, 0, 0, 1);
  }

  &:visited {
    color: rgba(0, 0, 0, 0.6);
  }
`;

const NavLink = ({ text, path, children, ...props }) => {
  return (
    <NavWrapper>
      <Nav to={ path }>{ text }{ children }</Nav>
    </NavWrapper>
  );
};

NavLink.propTypes = {
  text: PropTypes.string,
  path: PropTypes.string.isRequired
};

export default NavLink;