/**
 * Asynchronously loads the container page
 */

import React from 'react';
import loadable from '../utils/loadable';

export default page =>
    loadable(
        () => {
            return import(`../containers/${page}/index`);
        },
        {
            fallback: <div>Loading..</div>,
        }
    );
