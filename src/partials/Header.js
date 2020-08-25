import React from 'react';

import CssBaseline from '@material-ui/core/CssBaseline';
import Tabs from './Tabs';
import MobileMenu from './MobileMenu';

export default function Header() {

    return (
        <React.Fragment>
            <CssBaseline/>
            <div>
                <div className="display-mobile-menu position-mobile-menu">
                    <MobileMenu/>
                </div>
                <div>
                    <Tabs/>
                </div>
            </div>
        </React.Fragment>
    );
}