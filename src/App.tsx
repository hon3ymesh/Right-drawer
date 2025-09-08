import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import RightDrawer from './components/RightDrawer';
import { Box } from '@mui/material';

const App: React.FC = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleOptionClick = () => {
    setIsDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setIsDrawerOpen(false);
  };

  return (
    <Box sx={{ display: 'flex', height: '100vh' }}>
      <Sidebar onOptionClick={handleOptionClick} />
      <RightDrawer open={isDrawerOpen} onClose={handleDrawerClose} />
    </Box>
  );
};

export default App;