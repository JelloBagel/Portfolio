/**
 * RepoListItem
 *
 * Lists the name and the issue count of a repository
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { FormattedNumber } from 'react-intl';

import { makeSelectCurrentUser } from 'data-modules/App/selectors';
import ListItem from 'components/ListItem';
import Wrapper from './Wrapper';

export function RepoListItem(props) {
    const { item } = props;
    let nameprefix = '';

    // If the repository is owned by a different person than we got the data for
    // it's a fork and we should show the name of the owner
    if (item.owner.login !== props.currentUser) {
        nameprefix = `${item.owner.login}/`;
    }

    // Put together the content of the repository
    const content = (
        <Wrapper>
            <FormattedNumber value={item.open_issues_count} />
        </Wrapper>
    );

    // Render the content into a list item
    return <ListItem key={`repo-list-item-${item.full_name}`} item={content} />;
}

RepoListItem.propTypes = {
    item: PropTypes.object,
    currentUser: PropTypes.string,
};

export default connect(
    createStructuredSelector({
        currentUser: makeSelectCurrentUser(),
    })
)(RepoListItem);
