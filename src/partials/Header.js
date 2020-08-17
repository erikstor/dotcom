import React from 'react';

import CssBaseline from '@material-ui/core/CssBaseline';
import Tabs from './Tabs';
import MobileMenu from './MobileMenu';

export default function Album() {

    window.addEventListener('resize', selectMenu);
    var width = 0;

    function selectMenu() {
        width = window.outerWidth;

        if (width > 800) {
            return <Tabs/>
        } else {
            return <MobileMenu/>
        }
    }

    return (
        <React.Fragment>
            <CssBaseline/>
            <div>
                <Tabs/>
            </div>
        </React.Fragment>
    );
}