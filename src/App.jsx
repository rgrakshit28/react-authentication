import React from 'react';
import { Routes, Route } from "react-router-dom";
import routes from "./routes";

const App = () => {
    return (
        <>
            <Routes>
                {routes.map(
                    ({ path, element }, key) =>
                        element && <Route key={key} exact path={path} element={element} />
                )}
            </Routes>
        </>
    );
};

export default App;