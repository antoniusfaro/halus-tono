import React from 'react';
import { Container, Typography } from '@material-ui/core';

const TopBar = () => {
  const test = new Date().toLocaleString();
  console.log(test);

  return (
    <Container
      style={{ backgroundColor: '#acacac' }}
    >
      <Typography
        variant="h4"
      >
        Halus Todo
      </Typography>
      <Typography
        variant="body1"
      >
        {test}
      </Typography>
    </Container>
  )
};

export default TopBar;
