import React from 'react';
import Box from '@mui/material/Box';

function Main({ children }: React.PropsWithChildren<{}>) {
  return (
    <Box
      component='main'
      sx={{
        marginTop: '25px'
      }}
    >
      { children }
    </Box>
  );
}

export default Main;
