import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { List, ListItem, ListItemText, Collapse, IconButton, Drawer, Button } from '@mui/material';
import { ExpandLess, ExpandMore, Menu as MenuIcon } from '@mui/icons-material';
import routesConfig from '../../routes/routes.json';

function Menu({ routes, parentPath = '', level = 0, handleClose }) {
    // Render menu items
    const renderMenu = (routes, parentPath, level) => {
        return routes.map((route, index) => {
            const path = parentPath + (route.path ? `${route.path}` : '');

            // Check if route has menu and routes
            if (route.addMenu !== false) {
                if (route.routes) {
                    // Create local state for collapse control within this level
                    // eslint-disable-next-line react-hooks/rules-of-hooks
                    const [isOpen, setIsOpen] = useState(false);

                    const handleToggleCollapse = (event) => {
                        event.stopPropagation(); // Prevent menu from closing
                        setIsOpen(!isOpen);
                    };

                    return (
                        <React.Fragment key={index}>
                            <ListItem button onClick={handleToggleCollapse} style={{ backgroundColor: `rgba(0, 0, 0, ${0.1 * level})` }}>
                                <ListItemText primary={route.name} />
                                {isOpen ? <ExpandLess /> : <ExpandMore />}
                            </ListItem>
                            <Collapse in={isOpen} timeout="auto" unmountOnExit style={{ borderRadius: 4, boxShadow: 'inset 0 2px 4px rgba(0, 0, 0, 0.2), inset 0 -2px 4px rgba(0, 0, 0, 0.2)' }}>
                                <List component="div" disablePadding >
                                    {renderMenu(route.routes, path, level + 1)}
                                </List>
                            </Collapse>
                        </React.Fragment>
                    );
                } else {
                    // Render non-menu route item
                    return (
                        <ListItem button key={index} component={Link} to={path} onClick={handleClose} style={{ backgroundColor: `rgba(0, 0, 0, ${0.1 * level})`, borderLeft: '2px solid rgba(0, 0, 0, 0.1)' }}>
                            <ListItemText primary={route.name} />
                        </ListItem>
                    );
                }
            } else {
                // Skip routes without menu flag
                return null;
            }
        });
    };

    return (
        <>
            <List>
                {renderMenu(routes, parentPath, level)}
            </List>
            <div style={{ padding: '16px', textAlign: 'center' }}>
                <Button
                    variant="contained"
                    color="primary"
                    href="/CV.pdf"
                    download="cv.pdf"
                    style={{ marginBottom: '8px' }}
                >
                    Descargar PDF
                </Button>
                <br/>
                <Button
                    variant="contained"
                    color="secondary"
                    href="/public_key.pem"
                    download="llave_publica.pem"
                >
                    Descargar PEM
                </Button>
            </div>
        </>
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
            <IconButton onClick={toggleDrawer(true)}>
                <MenuIcon />
            </IconButton>
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
