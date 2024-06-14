import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { List, ListItem, ListItemText, Collapse, Drawer } from '@mui/material';
import { ExpandLess, ExpandMore } from '@mui/icons-material';
import routesConfig from '../../routes/routes.json';
import MenuBar from './MenuBar';

function Menu({ routes, parentPath = '', level = 0, handleClose }) {
    const [openStates, setOpenStates] = useState({});

    const handleToggleCollapse = (index) => {
        setOpenStates((prevState) => ({
            ...prevState,
            [index]: !prevState[index],
        }));
    };

    const renderMenu = (routes, parentPath, level) => {
        return routes.map((route, index) => {
            const path = parentPath + (route.path ? `${route.path}` : '');

            if (route.addMenu !== false) {
                if (route.routes) {
                    return (
                        <React.Fragment key={index}>
                            <ListItem button onClick={() => handleToggleCollapse(index)} style={{ backgroundColor: `rgba(0, 0, 0, ${0.1 * level})` }}>
                                <ListItemText primary={route.name} />
                                {openStates[index] ? <ExpandLess /> : <ExpandMore />}
                            </ListItem>
                            <Collapse in={openStates[index]} timeout="auto" unmountOnExit style={{ borderRadius: 4, boxShadow: 'inset 0 2px 4px rgba(0, 0, 0, 0.2), inset 0 -2px 4px rgba(0, 0, 0, 0.2)' }}>
                                <List component="div" disablePadding >
                                    {renderMenu(route.routes, path, level + 1)}
                                </List>
                            </Collapse>
                        </React.Fragment>
                    );
                } else {
                    return (
                        <ListItem button key={index} component={Link} to={path} onClick={handleClose} style={{ backgroundColor: `rgba(0, 0, 0, ${0.1 * level})`, borderLeft: '2px solid rgba(0, 0, 0, 0.1)' }}>
                            <ListItemText primary={route.name} />
                        </ListItem>
                    );
                }
            } else {
                return null;
            }
        });
    };

    return (
        <List>
            {renderMenu(routes, parentPath, level)}
        </List>
    );
}

export default function NestedList() {
    const [open, setOpen] = useState(false);

    const toggleDrawer = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setOpen(open);
    };

    const handleClose = () => setOpen(false);

    return (
        <div>
            <MenuBar toggleDrawer={toggleDrawer} />
            <Drawer anchor="left" open={open} onClose={toggleDrawer(false)}>
                <div
                    role="presentation"
                    onClick={toggleDrawer(false)}
                    onKeyDown={toggleDrawer(false)}
                >
                    <Menu routes={routesConfig.routes} handleClose={handleClose} />
                </div>
            </Drawer>
        </div>
    );
}
