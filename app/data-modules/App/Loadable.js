/**
 * Asynchronously loads the container page
 */

import React from 'react';
import loadable from '../../utils/loadable';
import LoadingIndicator from '../../components/LoadingIndicator';

export default page =>
    loadable(
        () => {
            return import(`../../containers/${page}/index`);
        },
        {
            fallback: <LoadingIndicator />,
        }
    );
