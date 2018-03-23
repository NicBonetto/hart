import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled';

const NavWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  margin-right: 10px;
`;

const Nav = styled(Link)`
  color: rgba(0, 0, 0, 0.6);
  text-decoration: none;
  font-family: 'Open Sans', sans-serif;
  font-weight: 400;
`;

const NavLink = ({ text, path, ...props }) => {
  return (
    <NavWrapper>
      <Nav path={ path }>{ text }</Nav>
    </NavWrapper>
  );
};