import React, { useState } from 'react';
import Menu from '../Components/Menu';
import { IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CV from '../Components/Cv';

function CVPage() {
    const [open, setOpen] = useState(false);

    const handleOpenMenu = () => {
      setOpen(!open);
    };
    return (
      <div>
  
      <IconButton onClick={handleOpenMenu}>
        <MenuIcon />
      </IconButton>
      <Menu open={open} onClose={() => setOpen(false)} />
      <CV/>
    </div>
    );
  }
  
  export default CVPage;