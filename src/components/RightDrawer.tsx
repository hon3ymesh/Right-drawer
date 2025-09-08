import React, { useState } from 'react';
import { Drawer, Box, Typography, TextField, Select, MenuItem, FormControl, InputLabel, Button, Chip } from '@mui/material';
import { Resizable } from 'react-resizable';
import 'react-resizable/css/styles.css'; // Import default styles for resizable

interface RightDrawerProps {
  open: boolean;
  onClose: () => void;
}

const RightDrawer: React.FC<RightDrawerProps> = ({ open, onClose }) => {
  const [width, setWidth] = useState(800); // Initial width

  const handleResize = (event: any, { size }: { size: { width: number; height: number } }) => {
    setWidth(size.width);
  };

  return (
    <Drawer
      anchor="right"
      open={open}
      onClose={onClose}
      sx={{
        '& .MuiDrawer-paper': { width, backgroundColor: '#fff', p: 2, overflow: 'hidden' }, // Dynamic width
      }}
    >
      <Resizable
        width={width}
        height={Infinity} // Allow vertical growth as needed
        minConstraints={[400, Infinity]} // Minimum width
        maxConstraints={[1200, Infinity]} // Maximum width
        onResize={handleResize}
        resizeHandles={['w']} // Resize handle on the west (left) side
        handle={<div className="react-resizable-handle react-resizable-handle-w" />} // Custom handle styling
      >
        <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%', flexGrow: 1, overflowY: 'auto' }}>
          <Typography variant="h4" gutterBottom> Global Data Policy Builder </Typography>

          <Typography variant="subtitle1" gutterBottom> Policy Name <span style={{ fontSize: 'small' }}>ℹ</span> </Typography>
          <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
            <TextField 
              fullWidth 
              size="small"
              variant="outlined" 
              placeholder="Mask & Limit Email Data to Locations"
            />
            <TextField 
              fullWidth 
              size="small"
              variant="outlined" 
              placeholder="Enter Policy Name"
            />
          </Box>

          <Typography variant="h6" gutterBottom> How should this policy protect the data? </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mb: 2 }}>
            <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
              <FormControl fullWidth size="small">
                <InputLabel>Mask Columns</InputLabel>
                <Select value="" label="Mask Columns">
                  <MenuItem value=""><em>None</em></MenuItem>
                  <MenuItem value="email">Email</MenuItem>
                  <MenuItem value="phone">Phone</MenuItem>
                  <MenuItem value="address">Address</MenuItem>
                </Select>
              </FormControl>
              <FormControl fullWidth size="small">
                <InputLabel>Using Hashing</InputLabel>
                <Select value="" label="Using Hashing">
                  <MenuItem value=""><em>None</em></MenuItem>
                  <MenuItem value="sha256">SHA-256</MenuItem>
                  <MenuItem value="md5">MD5</MenuItem>
                </Select>
              </FormControl>
            </Box>
            
            <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
              <FormControl fullWidth size="small">
                <InputLabel>When Tagged</InputLabel>
                <Select value="" label="When Tagged">
                  <MenuItem value=""><em>None</em></MenuItem>
                  <MenuItem value="pii">PII</MenuItem>
                  <MenuItem value="sensitive">Sensitive</MenuItem>
                </Select>
              </FormControl>
              <FormControl fullWidth size="small">
                <InputLabel>For Everyone</InputLabel>
                <Select value="" label="For Everyone">
                  <MenuItem value=""><em>None</em></MenuItem>
                  <MenuItem value="true">Yes</MenuItem>
                  <MenuItem value="false">No</MenuItem>
                </Select>
              </FormControl>
            </Box>

            <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
              <FormControl fullWidth size="small">
                <InputLabel>Except when user</InputLabel>
                <Select value="" label="Except when user">
                  <MenuItem value=""><em>None</em></MenuItem>
                  <MenuItem value="admin">Admin</MenuItem>
                  <MenuItem value="manager">Manager</MenuItem>
                </Select>
              </FormControl>
              <Box sx={{ display: 'flex', gap: 1 }}>
                <Chip 
                  label="pii.email" 
                  color="primary" 
                  onDelete={() => {}} 
                  sx={{ cursor: 'pointer' }} 
                />
              </Box>
            </Box>
          </Box>

          <Box sx={{ display: 'flex', gap: 2, mb: 2, alignItems: 'center' }}>
            <FormControl fullWidth size="small">
              <InputLabel>Has attribute</InputLabel>
              <Select value="" label="Has attribute">
                <MenuItem value=""><em>None</em></MenuItem>
              </Select>
            </FormControl>
            <Button variant="contained" color="primary" size="small" sx={{ width: '140px' }}>Fraud Specialist</Button>
            <Button variant="contained" color="primary" size="small" sx={{ width: '140px' }}>or</Button>
            <Button variant="contained" color="primary" size="small" sx={{ width: '140px' }}>Sales Rep</Button>
          </Box>

          <Box sx={{ display: 'flex', gap: 2, mb: 2, alignItems: 'center' }}>
            <Typography>AND</Typography>
          </Box>

          <Box sx={{ display: 'flex', gap: 2, mb: 2, alignItems: 'center' }}>
            <FormControl fullWidth size="small">
              <InputLabel>Only show rows</InputLabel>
              <Select value="" label="Only show rows">
                <MenuItem value=""><em>None</em></MenuItem>
              </Select>
            </FormControl>
            <FormControl fullWidth size="small">
              <InputLabel>Where user</InputLabel>
              <Select value="" label="Where user">
                <MenuItem value=""><em>None</em></MenuItem>
              </Select>
            </FormControl>
          </Box>

          <Box sx={{ display: 'flex', gap: 2, mb: 2, alignItems: 'center' }}>
            <FormControl fullWidth size="small">
              <InputLabel>User has attribute</InputLabel>
              <Select value="" label="User has attribute">
                <MenuItem value=""><em>None</em></MenuItem>
              </Select>
            </FormControl>
            <FormControl fullWidth size="small">
              <InputLabel>In</InputLabel>
              <Select value="" label="In">
                <MenuItem value=""><em>None</em></MenuItem>
              </Select>
            </FormControl>
            <Button variant="contained" color="primary" size="small" sx={{ width: '140px' }}>Country Code</Button>
            <FormControl fullWidth size="small">
              <InputLabel>matches value in column</InputLabel>
              <Select value="" label="matches value in column">
                <MenuItem value=""><em>None</em></MenuItem>
              </Select>
            </FormControl>
          </Box>

          <Box sx={{ display: 'flex', gap: 2, mb: 2, alignItems: 'center' }}>
            <FormControl fullWidth size="small">
              <InputLabel>tagged</InputLabel>
              <Select value="" label="tagged">
                <MenuItem value=""><em>None</em></MenuItem>
              </Select>
            </FormControl>
            <Chip label="CountryCode" color="primary" onDelete={() => {}} sx={{ cursor: 'pointer' }} />
          </Box>

          <Button variant="contained" color="primary" size="small" onClick={onClose} sx={{ mt: 2, width: '140px' }}>
            Close
          </Button>
        </Box>
      </Resizable>
    </Drawer>
  );
};

export default RightDrawer;