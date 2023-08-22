import React from "react";
import { Routes as ReactRoutes, Route } from "react-router-dom";
import Documentation from "./Documentation";
import Accordion from "./components/Accordion";

const Routes = () => {
    return (
        <div>
            <ReactRoutes>
                <Route path="/" element={<Documentation />}>
                    <Route path="installation" />
                    <Route path="accordion" element={<Accordion/>} />
                    <Route path="modal" element={<h1>Modal</h1>} />
                    <Route path="dialog" element={<h1>Dialog</h1>} />
                    <Route path="button" element={<h1>Button</h1>} />
                    <Route path="alert" element={<h1>Alert</h1>} />
                    <Route path="drawer" element={<h1>Drawer</h1>} />
                    <Route path="popup" element={<h1>Popup</h1>} />
                    <Route path="badge" element={<h1>Badge</h1>} />
                    <Route path="aspect-ratio" element={<h1>Aspect Ratio</h1>} />
                    <Route path="checkbox" element={<h1>Checkbox</h1>} />
                    <Route path="dropdown" element={<h1>Dropdown</h1>} />
                    <Route path="form" element={<h1>Form</h1>} />
                    <Route path="radio-group" element={<h1>Radio Group</h1>} />
                    <Route path="text-area" element={<h1>Text Area</h1>} />
                </Route>
            </ReactRoutes>
        </div>
    );
};

export default Routes;
