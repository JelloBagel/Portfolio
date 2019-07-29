/*
 * Header Messages
 *
 * This contains all the text for the Header component.
 */
import { defineMessages } from 'react-intl';

export const scope = 'boilerplate.components.Header';

export default defineMessages({
    home: {
        id: `${scope}.home`,
        defaultMessage: 'Home',
    },
    features: {
        id: `${scope}.features`,
        defaultMessage: 'Features',
    },
    about: {
        id: `${scope}.about`,
        defaultMessage: 'about',
    },
    projects: {
        id: `${scope}.projects`,
        defaultMessage: 'projects',
    },
    media: {
        id: `${scope}.media`,
        defaultMessage: 'media',
    },
    contact: {
        id: `${scope}.contact`,
        defaultMessage: 'contact',
    },
    resume: {
        id: `${scope}.resume`,
        defaultMessage: 'resume',
    },
});
