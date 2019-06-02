import React from 'react';
import { FormattedMessage } from 'react-intl';

import './base.scss';
import messages from './messages';

import Button from '../Button';

class MastHead extends React.PureComponent {
    render() {
        return (
            <div className="mastHead homepage-bg">
                <div className="mastHead__title">
                    <h1>Stephanie Hong</h1>
                    <h3>Hello, World!</h3>
                </div>
            </div>
        );
    }
}

export default MastHead;
