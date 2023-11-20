import React from 'react';
import { Box, Spinner } from '@chakra-ui/react';

const LoadingSpinner = () => {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      height="100vh"
    >
      <Spinner size="xl" color="blue.500" />
    </Box>
  );
};

export default LoadingSpinner;
