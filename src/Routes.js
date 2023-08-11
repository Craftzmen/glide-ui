import React from 'react'
import { Routes as ReactRoutes, Route,  } from 'react-router-dom';

const Routes = () => {
    return (
        <div>
            <ReactRoutes>
                <Route path='docs' element={<h1>Documentation</h1>} >
                    <Route path='components' element={<h1>Components</h1>}>
                        <Route path='accordion' element={<h1>Accordion</h1>} />
                        <Route path='modal' element={<h1>Modal</h1>} />
                        <Route path='dialog' element={<h1>Dialog</h1>} />
                        <Route path='button' element={<h1>Button</h1>} />
                        <Route path='alert' element={<h1>Alert</h1>} />
                        <Route path='drawer' element={<h1>Drawer</h1>} />
                        <Route path='popup' element={<h1>Popup</h1>} />
                        <Route path='badge' element={<h1>Badge</h1>} />
                        <Route path='' element={<h1></h1>} />
                    </Route>
                    <Route path='utlities' element={<h1>Utlities</h1>}>
                        <Route />
                        <Route />
                        <Route />
                    </Route>
                </Route>
            </ReactRoutes>
        </div>
    )
}

export default Routes;