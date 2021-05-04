import React from 'react';
import styled from 'styled-components';

export const NotSelectable = styled.div`
  -webkit-user-drag: none;
  -webkit-user-select: none; /* Safari */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* IE10+/Edge */
  user-select: none; /* Standard */
`;

export default NotSelectable;
