import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import NavLink from './nav-link';

const Wrapper = styled.div`
  flex-shrink: 0;
  height: 74px;
  width: 100%;
  padding: 0 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const NavLeft = styled.div`
  float: left;
  display: inline-block;
`;

const NavRight = styled.div`
  float: right;
  display: inline-block;
`;

const Logo = styled.img`
  width: 40px;

  &:hover {
    cursor: pointer;
  }
`;

const NavBar = ({ username, ...props }) => (
  <Wrapper>
    <NavLeft>
      <NavLink path="/" text=""><Logo src="beer-icon.png"/></NavLink>
    </NavLeft>
    <NavRight>
      { username ? <NavLink path="/wishlist" text="Wish List"/> : <NavLink path="/auth/login" text="Login"/>}
    </NavRight>
  </Wrapper>
);

NavBar.propTypes = {
  username: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.bool
  ]).isRequired
};

const mapStateToProps = ({ session }) => {
  return { username: session ? session.username : false };
};

export default connect(mapStateToProps)(NavBar);