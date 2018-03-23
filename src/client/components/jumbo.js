import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Background = styled.div`
  background-color: #f2f2f2;
  width: 100%;
  height: 600px;
  display: flex;
  align-items: center;
  justify-content: middle;
  flex-direction: column;
`;

const Jumbo = ({ children }) => (
  <Background>
    { children }
  </Background>
);

export default Jumbo;