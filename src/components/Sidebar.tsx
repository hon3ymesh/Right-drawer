import React from 'react';
import { Box, List, ListItem, ListItemText, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

interface SidebarProps {
  onOptionClick: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ onOptionClick }) => {
  return (
    <Box sx={{ width: 200, backgroundColor: '#f5f5f5', p: 2 }}>
      <List>
        <ListItem component="button" onClick={onOptionClick}>
          <IconButton><MenuIcon /></IconButton>
          <ListItemText primary="Option 1" />
        </ListItem>
        <ListItem component="button" onClick={onOptionClick}>
          <IconButton><MenuIcon /></IconButton>
          <ListItemText primary="Option 2" />
        </ListItem>
      </List>
    </Box>
  );
};

export default Sidebar;