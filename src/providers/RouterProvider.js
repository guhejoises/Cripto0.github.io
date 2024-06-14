import React from 'react';
import { Route, Routes } from 'react-router-dom';
import routesConfig from '../routes/routes.json'; // Ruta al archivo JSON de rutas
import NotFound from '../views/utils/NotFound.jsx'
function processRoutes(routes, parentPath = '') {
    return routes.map((route, index) => {
        const path = parentPath + (route.path ? route.path : '');
        if (route.routes) {
            return processRoutes(route.routes, path);
        } else {
            const Component = require(`../views/${route.component}`).default;
            return <Route key={index} path={path} element={<Component />} />;
        }
    });
}

function RouterProvider() {
    return (
        <Routes>
            {processRoutes(routesConfig.routes)}
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
}

export default RouterProvider;
