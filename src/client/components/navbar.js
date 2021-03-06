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
  width: 80px;

  &:hover {
    cursor: pointer;
  }
`;

const notRegistered = [
  <NavLink key={ 1 } path="/signin" text="Sign In"/>,
  <NavLink key={ 2 } path="/signup" text="Sign Up"/>
];

const NavBar = ({ username, ...props }) => (
  <Wrapper>
    <NavLeft>
      <NavLink path="/" text=""><Logo src=""/></NavLink>
    </NavLeft>
    <NavRight>
      { username ? <NavLink path="/wishlist" text="Wish List"/> : notRegistered }
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