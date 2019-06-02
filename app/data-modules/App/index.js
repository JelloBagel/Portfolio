/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';

import loadable from './Loadable';
import Header from 'components/Header';
import Footer from 'components/Footer';

import GlobalStyle from '../../global-styles';

const AppWrapper = styled.div`
    max-width: calc(1200px + 16px * 2);
    margin: 0 auto;
    display: flex;
    min-height: 100%;
    padding: 0 16px;
    flex-direction: column;
`;

export default function App() {
    return (
        <AppWrapper>
            <Header />
            <Switch>
                <Route exact path="/" component={loadable('HomePage')} />
                <Route path="/about" component={loadable('AboutPage')} />
                <Route path="/features" component={loadable('FeaturePage')} />
                <Route path="" component={loadable('NotFoundPage')} />
            </Switch>
            <Footer />
            <GlobalStyle />
        </AppWrapper>
    );
}
